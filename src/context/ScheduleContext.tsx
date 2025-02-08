import { createContext, useContext, useState } from "react";
import { ScheduleContextProps } from "../assets/contextProps/ScheduleContextProps";
import { dummySchedule } from "../assets/ScheduleDummyData";
import { TimeSlotType } from "../assets/types/TimeSlotType";

export const ScheduleContext = createContext<ScheduleContextProps | null>(null)

interface ScheduleProviderProps{

    children: React.ReactNode

}


export const ScheduleProvider = ({ children }: ScheduleProviderProps ) =>{

    const [schedule, setSchedule] = useState(dummySchedule),
          [preferences, setPreferences] = useState(dummySchedule.preferences),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotType | null>(null)

    return(

        <ScheduleContext.Provider 
            value={{ schedule, setSchedule, preferences, setPreferences, slotIndex, setSlotIndex, slotTime, setSlotTime, selectedTimeSlot, setSelectedTimeSlot }}
        >

            {children}

        </ScheduleContext.Provider>

    )
    
}

export const useSchedule = () =>{

    const context = useContext(ScheduleContext)

    if(!context) throw new Error("Schedule context not found")

    return context

}