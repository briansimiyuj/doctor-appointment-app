import { createContext, useEffect, useState } from "react";
import { DoctorType } from "../assets/DoctorType";
import { useParams } from "react-router-dom";
import { doctors } from "../assets/frontend/assets";

interface BookingContextProps{

    doctorInfo: DoctorType | null
    doctorID: string | null
    slotIndex: number
    setSlotIndex: (index: number) => void

}

interface BookingContextProviderProps{

    children: React.ReactNode

}

export const BookingContext = createContext<BookingContextProps>({
    
    doctorID: null,
    doctorInfo: null,
    slotIndex: 0,
    setSlotIndex: () => {}

})


export const BookingContextProvider =  ({ children }: BookingContextProviderProps) =>{

    const { doctorID } = useParams(),
          [doctorInfo, setDoctorInfo] = useState<DoctorType | null>(null),
          [slotIndex, setSlotIndex] = useState(0)


    const fetchDocInfo = () =>{
    
       const docInfo = doctors.find(doc => doc._id === doctorID) || null

       setDoctorInfo(docInfo)
    
    }

    
    useEffect(() =>{
    
       fetchDocInfo()
    
    }, [doctorID, doctors])


    return(

        <BookingContext.Provider value={{
            doctorInfo, 
            doctorID: doctorID || null, 
            slotIndex,
            setSlotIndex
        }}>
        
            {children}
        
        </BookingContext.Provider>

    )

}