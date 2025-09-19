import { createContext, useContext, useEffect, useState } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { RescheduleModalContextProps } from "../assets/contextProps/RescheduleModalContextProps"
import { DoctorType } from "../assets/types/DoctorType"
import { useRescheduleAppointment } from "../hooks/useRescheduleAppointment"
import { useDateTime } from "./DateTimeContext"
import { useDoctorContext } from "./DoctorContext"

interface RescheduleModalProviderProps{

    children: React.ReactNode
    appointment: AppointmentType
    onClose: () => void

}

const RescheduleModalContext = createContext<RescheduleModalContextProps | undefined>(undefined)

export const RescheduleModalProvider: React.FC<RescheduleModalProviderProps> = ({ children, appointment, onClose }) =>{

    const { date: newDate, setDate: setNewDate, time: newTime, setTime: setNewTime }  = useDateTime(),
          { rescheduleAppointment } = useRescheduleAppointment(),
          { doctors } = useDoctorContext(),
          [selectedDoctor, setSelectedDoctor] = useState<DoctorType | null>(null),
          [isConfirmed, setIsConfirmed] = useState(false),
          [availableDoctors, setAvailableDoctors] = useState<DoctorType[]>(doctors),
          [consultationType, setConsultationType] = useState<"in-person" | "online" | null>(null),
          isValid = Boolean(newDate) !== null && newTime !== null && selectedDoctor !== null && consultationType !== null && isConfirmed,
          mockCurrentDoctorID = 'doctor1'

    useEffect(() =>{
    
        if(appointment){

            setNewDate(appointment.date)

            setNewTime(appointment.time)

        }
    
    }, [appointment, setNewDate, setNewTime])      


    useEffect(() =>{
    
        const filteredDoctors = doctors.filter(doctor => doctor._id !== mockCurrentDoctorID)

        setAvailableDoctors(filteredDoctors)
    
    }, [])


    const handleRescheduleConfirm = () =>{

        if(!appointment && !isValid) return

        if(newDate && newTime && selectedDoctor && consultationType){

            const rescheduleSuccess = rescheduleAppointment(appointment, newDate, newTime, consultationType, selectedDoctor)

            if(rescheduleSuccess){
                
                onClose()

            }
            
        }

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
        resetDoctorFilter,
        consultationType,
        setConsultationType
        
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