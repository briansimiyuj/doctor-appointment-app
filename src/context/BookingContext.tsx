import { createContext, useEffect, useState } from "react";
import { DoctorType } from "../assets/types/DoctorType";
import { useParams } from "react-router-dom";
import { doctors } from "../assets/frontend/assets";
import { TimeSlotType } from "../assets/types/TimeSlotType";
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType";

interface BookingContextProps{

    doctorInfo: DoctorType | null
    doctorID: string | null
    slotIndex: number
    setSlotIndex: (index: number) => void
    slotTime: string
    setSlotTime: (time: string) => void
    selectedTimeSlot: TimeSlotType | null
    setSelectedTimeSlot: (slot: TimeSlotType | null) => void
    appointedDoctors: AppointedDoctorType[]
    setAppointedDoctors: (doctors: AppointedDoctorType[] | ((prev: AppointedDoctorType[]) => AppointedDoctorType[])) => void,
    isBooked: boolean
    setIsBooked: (isBooked: boolean) => void

}

interface BookingContextProviderProps{

    children: React.ReactNode

}

export const BookingContext = createContext<BookingContextProps>({
    
    doctorID: null,
    doctorInfo: null,
    slotIndex: 0,
    setSlotIndex: () => {},
    slotTime: '',
    setSlotTime: () => {},
    selectedTimeSlot: null,
    setSelectedTimeSlot: () => {},
    appointedDoctors: [],
    setAppointedDoctors: () => {},
    isBooked: false,
    setIsBooked: () => {}

})


export const BookingContextProvider =  ({ children }: BookingContextProviderProps) =>{

    const { doctorID } = useParams(),
          [doctorInfo, setDoctorInfo] = useState<DoctorType | null>(null),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotType | null>(null),
          [isBooked, setIsBooked] = useState(false),
         
            [appointedDoctors, setAppointedDoctors] = useState<AppointedDoctorType[]>(() =>{

                const storedAppointedDoctors = localStorage.getItem("appointedDoctors")

                return storedAppointedDoctors ? JSON.parse(storedAppointedDoctors) : []

            })

    
    useEffect(() =>{

        localStorage.setItem("appointedDoctors", JSON.stringify(appointedDoctors))

    }, [appointedDoctors])
            


    const fetchDocInfo = () =>{
    
       const docInfo = doctors.find(doc => doc._id === doctorID) || null

       setDoctorInfo(docInfo)
    
    }



    useEffect(() =>{
        
        const storedAppointedDoctors = localStorage.getItem("appointedDoctors")

        if(storedAppointedDoctors){
            
            setAppointedDoctors(JSON.parse(storedAppointedDoctors))

        }

    }, [])

    
    useEffect(() =>{
    
       fetchDocInfo()
    
    }, [doctorID, doctors])


    return(

        <BookingContext.Provider value={{
            doctorInfo, 
            doctorID: doctorID || null, 
            slotIndex,
            setSlotIndex,
            slotTime,
            setSlotTime,
            selectedTimeSlot,
            setSelectedTimeSlot,
            appointedDoctors,
            setAppointedDoctors,
            isBooked,
            setIsBooked
        }}>
        
            {children}
        
        </BookingContext.Provider>

    )

}