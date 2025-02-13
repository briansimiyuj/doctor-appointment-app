import { useState } from "react"
import { useSchedule } from "../context/ScheduleContext"

export const useScheduleManagement = () =>{

    const { schedule }  = useSchedule(),
          [isChanged, setIsChanged] = useState<boolean>(false),
          [tempSchedule, setTempSchedule] = useState(schedule)

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>, date: string, slotIndex: number) =>{
    
       const { value } = e.target

        
        const updatedSlots = tempSchedule.availableSlots.map(day =>{

            if(day.date === date){

                const updatedDaySlots = day.slots.map((slot, index) =>{

                    if(index === slotIndex){

                        return value

                    }

                    return slot

                })

                console.log(updatedDaySlots)

                return { ...day, slots: updatedDaySlots }


            }

            return day
            
        })

        console.log(updatedSlots)

        setTempSchedule({ ...tempSchedule, availableSlots: updatedSlots })

        setIsChanged(true)
    
    }
    
    return { handleInputChange, isChanged }
}