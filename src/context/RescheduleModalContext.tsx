import { createContext, useContext, useEffect, useState } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { RescheduleModalContextProps } from "../assets/contextProps/RescheduleModalContextProps"
import { useUpdatePatientDetails } from "../hooks/useUpdatePatientDetails"
import { doctors } from "../assets/frontend/doctorsData"
import { DoctorType } from "../assets/types/DoctorType"

interface RescheduleModalProviderProps{

    children: React.ReactNode
    appointment: AppointmentType
    onClose: () => void

}

const RescheduleModalContext = createContext<RescheduleModalContextProps | undefined>(undefined)

export const RescheduleModalProvider: React.FC<RescheduleModalProviderProps> = ({ children, appointment, onClose }) =>{

    const { newDate, setNewDate, newTime, setNewTime } = useUpdatePatientDetails(),
          [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null),
          [isConfirmed, setIsConfirmed] = useState(false),
          [availableDoctors, setAvailableDoctors] = useState<DoctorType[]>(doctors),
          isValid = newDate !== null && newTime !== null && selectedDoctor !== null && isConfirmed,
          mockCurrentDoctorID = 'doctor1'


    useEffect(() =>{
    
        const filteredDoctors = doctors.filter(doctor => doctor._id !== mockCurrentDoctorID)

        setAvailableDoctors(filteredDoctors)
    
    }, [])


    const handleRescheduleConfirm = () =>{

        if(!appointment && !isValid) return

        onClose()

    }

    const filterDoctorsBySpeciality = (speciality: string) =>{

        const filteredDoctors = doctors.filter(doctor => doctor.speciality === speciality && doctor._id !== mockCurrentDoctorID)

        setAvailableDoctors(filteredDoctors)

    }

    const resetDoctorFilter = () =>{

        const filteredDoctors = doctors.filter(doctor => doctor._id !== mockCurrentDoctorID)

        setAvailableDoctors(filteredDoctors)

    }        

    const value ={

        appointment,
        newDate,
        setNewDate,
        newTime,
        setNewTime,
        isValid,
        onClose,
        handleRescheduleConfirm,
        isConfirmed,
        setIsConfirmed,
        selectedDoctor,
        setSelectedDoctor,
        availableDoctors,
        filterDoctorsBySpeciality,
        resetDoctorFilter
        
    }

    return(

        <RescheduleModalContext.Provider value={value}>

            {children}

        </RescheduleModalContext.Provider>

    )

}

export const useRescheduleModal = () =>{

   const context = useContext(RescheduleModalContext)

   if(!context) throw new Error('useRescheduleModal must be used within a RescheduleModalProvider')

   return context

}