import { useContext } from "react"
import { useSchedule } from "../context/ScheduleContext"
import { LoginContext } from "../context/LoginContext"
import { doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "./useToast"

export const useScheduleManagement = () =>{

    const { schedule, setSchedule, isChanged, setIsChanged, setLoading }  = useSchedule(),
          { showToast } = useToast(),
          loginContext = useContext(LoginContext)

    if(!loginContext) throw new Error("Login context not found")

    const { userID } = loginContext

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>, date: string, slotIndex: number) =>{
    
       const { value } = e.target,
             [status, time] = value.split(" - "),
             formattedValue = `${time} - ${status}`

        
        const updatedSlots = schedule.availableSlots.map(day =>{

            if(day.date === date){

                const updatedDaySlots = day.slots.map((slot, index) =>{

                    if(index === slotIndex){

                        return formattedValue

                    }

                    return slot

                })

                return { ...day, slots: updatedDaySlots }


            }

            return day
            
        })


        setSchedule({ ...schedule, availableSlots: updatedSlots })

        setIsChanged(true)
    
    }


    const handleSaveSchedule = async() =>{

        if(!userID) return
        
        try{

            setLoading(true)

            const scheduleDocRef = doc(db, "schedules", userID)

            await setDoc(scheduleDocRef, schedule)

            setIsChanged(false)

            showToast("Schedule saved successfully", "success")

        }catch(err){

            console.error("Error saving schedule:", err)

            showToast("Error saving schedule", "error")

        }finally{   

            setLoading(false)

        }
        
    }
    
    return { handleInputChange, isChanged, handleSaveSchedule }

}