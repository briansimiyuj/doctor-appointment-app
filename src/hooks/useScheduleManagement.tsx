import { useState } from "react"
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

                        console.log('Updating slot from:', slot, 'to:', formattedValue)

                        return formattedValue

                    }

                    return slot

                })

                return { ...day, slots: updatedDaySlots }


            }

            return day
            
        })

        console.log('Final slot value:', updatedSlots[slotIndex].slots[slotIndex])



        setTempSchedule({ ...tempSchedule, availableSlots: updatedSlots })

        setSchedule({ ...schedule, availableSlots: updatedSlots })

        console.log('Temp schedule updated', tempSchedule.availableSlots[slotIndex].slots[slotIndex])

        console.log('Schedule updated', schedule.availableSlots[slotIndex].slots[slotIndex])

        setIsChanged(true)
    
    }



    const handleSave = () =>{
    
       setSchedule(tempSchedule)

       setIsChanged(false)

       localStorage.setItem("schedule", JSON.stringify(tempSchedule))

       console.log('Schedule saved')
    
    }
    
    return { handleInputChange, isChanged, handleSave }

}