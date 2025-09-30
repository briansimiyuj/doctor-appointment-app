import { createContext, useContext, useState } from "react";
import { ScheduleContextProps } from "../assets/contextProps/ScheduleContextProps";
import { TimeSlotType } from "../assets/types/TimeSlotType";
import { dummySchedule } from "../assets/dummyData/ScheduleDummyData";

export const ScheduleContext = createContext<ScheduleContextProps | null>(null)

interface ScheduleProviderProps{

    children: React.ReactNode

}


export const ScheduleProvider = ({ children }: ScheduleProviderProps ) =>{

    const savedSchedule = localStorage.getItem("schedule"),
          initialSchedule = savedSchedule ? JSON.parse(savedSchedule) : dummySchedule;

    const [schedule, setSchedule] = useState(initialSchedule),
          [isChanged, setIsChanged] = useState(false),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotType | null>(null),
          [loading, setLoading] = useState(false)

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
                setIsChanged,
                loading,
                setLoading

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