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
    
        console.log('Updated temp schedule:', tempSchedule.availableSlots[0].slots[0])
 
        console.log('Updated schedule:', schedule.availableSlots[0].slots[0])
     
    }, [tempSchedule, schedule]) 


    const handleSave = () =>{
    
       setSchedule(tempSchedule)

       setIsChanged(false)

       localStorage.setItem("schedule", JSON.stringify(tempSchedule))

       console.log('Schedule saved')
    
    }
    
    return { handleInputChange, isChanged, handleSave }

}