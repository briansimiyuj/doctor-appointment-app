import { createContext, useContext, useEffect, useState } from "react";
import { ScheduleContextProps } from "../assets/contextProps/ScheduleContextProps";
import { TimeSlotType } from "../assets/types/TimeSlotType";
import { dummySchedule } from "../assets/dummyData/ScheduleDummyData";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { LoginContext } from "./LoginContext";

export const ScheduleContext = createContext<ScheduleContextProps | null>(null)

interface ScheduleProviderProps{

    children: React.ReactNode

}

export const ScheduleProvider = ({ children }: ScheduleProviderProps ) =>{

    const [schedule, setSchedule] = useState(dummySchedule),
          [isChanged, setIsChanged] = useState(false),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotType | null>(null),
          [loading, setLoading] = useState(true),
          loginContext = useContext(LoginContext)

    if(!loginContext) throw new Error("Login context not found")

    const { userID } = loginContext

    useEffect(() =>{

        const fetchSchedule = async() =>{

            if(!userID) return

            try{

                setLoading(true)

                const scheduleDocRef = doc(db, "schedules", userID),
                      scheduleDoc = await getDoc(scheduleDocRef)

                if(scheduleDoc.exists()){

                    setSchedule(scheduleDoc.data() as typeof dummySchedule)

                }else{

                    setSchedule(dummySchedule)

                }

            }catch(err){

                console.error("Error fetching schedule:", err)

                setSchedule(dummySchedule)

            }finally{

                setLoading(false)

            }

        }

        fetchSchedule()

    }, [userID])

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