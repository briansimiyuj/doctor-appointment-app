import { useState } from "react"
import { useSchedule } from "../context/ScheduleContext"

export const useScheduleManagement = () =>{

    const { schedule }  = useSchedule(),
          [isChanged, setIsChanged] = useState<boolean>(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>, date: string, slotIndex: number) =>{
    
       const { value } = e.target

        console.log(value)
    
    }
    
    return { handleInputChange, isChanged }
}