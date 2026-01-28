import { useCallback, useEffect, useRef, useState } from "react"
import { useManageAppointmentContext } from "../context/ManageAppointmentContext"
import { useProfileContext } from "../context/ProfileContext"
import { deleteDoc, doc, onSnapshot, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useTypingIndicator = () =>{

    const { profile } = useProfileContext(),
          { appointment } = useManageAppointmentContext(),
          [isTyping, setIsTyping] = useState(false),
          [otherUserTyping, setOtherUserTyping] = useState(false),
          appointmentID = appointment?._id || "",
          currentUserID = profile?._id || "",
          currentUserType = profile?.type,
          typingTimeoutRef = useRef<NodeJS.Timeout | null>(null),
          hideTypingTimeoutRef = useRef<NodeJS.Timeout | null>(null),
          isHandlingDeleteRef = useRef(false),
          hasSeenDocumentRef = useRef(false),
          DEBOUNCE_DELAY = 1000,
          TYPING_INDICATOR_DELAY = 2000, 
          myTypingRef = currentUserID ? doc(db, "appointments", appointmentID, "typingIndicators", currentUserID) : null,
          otherUserID = profile?.type === "doctor" ? appointment?.patient.patientInfo._id : profile?.type === "patient" ? appointment?.doctor.doctorInfo._id : null,
          otherUserTypingRef = otherUserID ? doc(db, "appointments", appointmentID, "typingIndicators", otherUserID) : null

    useEffect(() =>{
    
        if(!otherUserTypingRef) return

        const unsubscribe = onSnapshot(otherUserTypingRef, doc =>{

            if(doc.exists()){
                
                const data = doc.data(),
                    isOtherUserTyping = data.isTyping || false,
                    lastTyped = data.lastTyped || "",
                    lastTypedTime = lastTyped ? new Date(lastTyped).getTime() : 0,
                    timeSinceLastTyped = Date.now() - lastTypedTime,
                    isRecent = lastTyped && (timeSinceLastTyped < 3000)

                hasSeenDocumentRef.current = true

                if(isOtherUserTyping && isRecent){
                    
                    isHandlingDeleteRef.current = false
                    
                    setOtherUserTyping(true)

                    if(hideTypingTimeoutRef.current){

                        clearTimeout(hideTypingTimeoutRef.current)

                    }   
                    
                    hideTypingTimeoutRef.current = setTimeout(() =>{

                        setOtherUserTyping(false)

                    }, TYPING_INDICATOR_DELAY)

                }

            }else{

                if(!hasSeenDocumentRef.current){

                    return
                    
                }

                if(isHandlingDeleteRef.current){

                    return
                    
                }
                
                isHandlingDeleteRef.current = true
                
                if(hideTypingTimeoutRef.current){

                    clearTimeout(hideTypingTimeoutRef.current)

                    hideTypingTimeoutRef.current = null

                }

                setOtherUserTyping(false)

            }

        })

        return () =>{

            unsubscribe()

            if(hideTypingTimeoutRef.current){

                clearTimeout(hideTypingTimeoutRef.current)

            }

        }

    }, [appointmentID, otherUserID])


    const setTypingStatus = useCallback(async (isUserTyping: boolean) =>{

        if(!myTypingRef || !currentUserType || !currentUserID) return

        try{
        
            if(isUserTyping){

                await setDoc(myTypingRef, {

                    isTyping: true,
                    lastTyped: new Date().toISOString(),
                    userType: currentUserType,
                    userID: currentUserID,
                    updatedAt: new Date().toISOString()

                }, { merge: true })
            
            }else{
                
                await deleteDoc(myTypingRef)

            }
        
        }catch(error){
        
           console.error('Error updating typing status: ', error)
        
        }

    }, [myTypingRef, currentUserType, currentUserID])

    const startTyping = useCallback(() =>{

        if(!isTyping) setIsTyping(true)

        if(typingTimeoutRef.current){

            clearTimeout(typingTimeoutRef.current)

        }

        setTypingStatus(true)

        typingTimeoutRef.current = setTimeout(() =>{

            setIsTyping(false)

            setTypingStatus(false)

        }, DEBOUNCE_DELAY)

    }, [isTyping, setTypingStatus])

    const stopTyping = useCallback(() =>{
        
        if(typingTimeoutRef.current){

            clearTimeout(typingTimeoutRef.current)

        }

        setIsTyping(false)

        setTypingStatus(false)

    }, [setTypingStatus])

    useEffect(() =>{
    
        return () =>{

            if(typingTimeoutRef.current){

                clearTimeout(typingTimeoutRef.current)

            }

            if(hideTypingTimeoutRef.current){
                
                clearTimeout(hideTypingTimeoutRef.current)

            }

        }
    
    }, [setTypingStatus])

    return{ 

        isTyping,
        otherUserTyping,
        startTyping,
        stopTyping,
        typingUserType: currentUserType === "doctor" ? "patient" : "doctor"

    }

}