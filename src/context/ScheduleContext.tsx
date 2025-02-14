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
          [isChanged, setIsChanged] = useState(false),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotType | null>(null)

    return(

        <ScheduleContext.Provider 
            value={{ 
                
                schedule:{

                    workingHours: schedule.workingHours,
                    preferences: schedule.preferences,
                    availableSlots: schedule.availableSlots,
                    blockedDates: schedule.blockedDates,
                    breakTime: schedule.breakTime
                },
                selectedTimeSlot,
                setSelectedTimeSlot,
                slotIndex,
                setSlotIndex,
                slotTime,
                setSlotTime,
                setSchedule, 
                isChanged,
                setIsChanged

            }}
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