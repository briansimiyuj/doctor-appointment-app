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

                    console.log('✅ TYPING EVENT: Other user typing detected - Showing indicator')
                    
                    isHandlingDeleteRef.current = false
                    
                    setOtherUserTyping(true)

                    if(hideTypingTimeoutRef.current){

                        console.log('🔄 TYPING TIMER: Clearing previous hide timer')

                        clearTimeout(hideTypingTimeoutRef.current)

                    }   

                    console.log(`⏰ TYPING TIMER: Setting hide timer for ${TYPING_INDICATOR_DELAY}ms`)
                    
                    hideTypingTimeoutRef.current = setTimeout(() =>{

                        console.log('⏰ TYPING TIMER: Hide timer expired - Hiding indicator')

                        setOtherUserTyping(false)

                    }, TYPING_INDICATOR_DELAY)

                }

            }else{

                if(!hasSeenDocumentRef.current){

                    console.log('📭 TYPING: Initial state - no typing document exists')

                    return
                    
                }

                if(isHandlingDeleteRef.current){

                    console.log('⏸️ TYPING: Skipping duplicate delete - already handling one')

                    return
                    
                }
                
                console.log('🗑️ TYPING EVENT: Document deleted - User stopped typing')
                
                isHandlingDeleteRef.current = true
                
                if(hideTypingTimeoutRef.current){

                    console.log('🗑️ TYPING TIMER: Clearing hide timer')

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

                console.log('📝 TYPING STATUS: Setting MY status to TYPING')

                await setDoc(myTypingRef, {

                    isTyping: true,
                    lastTyped: new Date().toISOString(),
                    userType: currentUserType,
                    userID: currentUserID,
                    updatedAt: new Date().toISOString()

                }, { merge: true })
            
            }else{
                
                console.log('📝 TYPING STATUS: Setting MY status to NOT TYPING')

                await deleteDoc(myTypingRef)

            }
        
        }catch(error){
        
           console.error('❌ TYPING ERROR: ', error)
        
        }

    }, [myTypingRef, currentUserType, currentUserID])

    const startTyping = useCallback(() =>{

        console.log('⌨️ TYPING ACTION: startTyping called')

        if(!isTyping) setIsTyping(true)

        if(typingTimeoutRef.current){

            console.log('🔄 TYPING TIMER: Clearing previous typing timeout')

            clearTimeout(typingTimeoutRef.current)

        }

        setTypingStatus(true)

        typingTimeoutRef.current = setTimeout(() =>{

            console.log('⏰ TYPING TIMER: Typing timeout expired - Stopping typing')

            setIsTyping(false)

            setTypingStatus(false)

        }, DEBOUNCE_DELAY)

        console.log(`⏰ TYPING TIMER: Started ${DEBOUNCE_DELAY}ms typing timeout`)

    }, [isTyping, setTypingStatus])

    const stopTyping = useCallback(() =>{
        
        console.log('🛑 TYPING ACTION: stopTyping called')
        
        if(typingTimeoutRef.current){

            console.log('🛑 TYPING TIMER: Clearing typing timeout')

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