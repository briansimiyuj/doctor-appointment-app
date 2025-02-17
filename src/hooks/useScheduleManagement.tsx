import { useEffect, useState } from "react"
import { useSchedule } from "../context/ScheduleContext"

export const useScheduleManagement = () =>{

    const { schedule, setSchedule, isChanged, setIsChanged }  = useSchedule(),
          [tempSchedule, setTempSchedule] = useState(schedule)

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>, date: string, slotIndex: number) =>{
    
       const { value } = e.target,
             [status, time] = value.split(" - "),
             formattedValue = `${time} - ${status}`

        
        const updatedSlots = tempSchedule.availableSlots.map(day =>{

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


        setTempSchedule({ ...tempSchedule, availableSlots: updatedSlots })

        setSchedule({ ...schedule, availableSlots: updatedSlots })

        setIsChanged(true)
    
    }



    useEffect(() =>{
    
        if(isChanged){

            localStorage.setItem("schedule", JSON.stringify(schedule))

        }
    
    }, [schedule, isChanged])


    const handleSave = () =>{
    
       setSchedule(tempSchedule)

       setIsChanged(false)
    
    }
    
    return { handleInputChange, isChanged, handleSave }

}