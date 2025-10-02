import { createContext, useContext, useEffect, useState } from "react";
import { DoctorType } from "../assets/types/DoctorType";
import { useParams } from "react-router-dom";
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType";
import { AppointedPatientType } from "../assets/types/AppointedPatientType";
import { BookingContextProps } from "../assets/contextProps/BookingContextProps";
import { TimeSlotType } from "../assets/types/TimeSlotType";
import { useSchedule } from "./ScheduleContext"
import { ProfileContext } from "./ProfileContext";
import { AppointmentType } from "../assets/types/AppointmentType";
import { useDoctorContext } from "./DoctorContext";


interface BookingContextProviderProps{

    children: React.ReactNode

}

export const BookingContext = createContext<BookingContextProps>({

    doctorID: null,
    patientID: null,
    doctorInfo: null,
    patientInfo: null,
    slotIndex: 0,
    setSlotIndex: () => {},
    slotTime: '',
    setSlotTime: () => {},
    consultationType: "in-person",
    setConsultationType: () => {},
    selectedTimeSlot: null,
    setSelectedTimeSlot: () => {},
    appointedDoctors: [],
    setAppointedDoctors: () => {},
    appointedPatients: [],
    setAppointedPatients: () => {},
    isBooked: {},
    setIsBooked: () => {},
    slots: [],
    setSlots: () => {},
    appointments: [],
    setAppointments: () => {},
    loading: false,
    setLoading: () => {}

})


export const BookingContextProvider = ({ children }: BookingContextProviderProps) =>{

    const { doctorID } = useParams(),
          { schedule } = useSchedule(),
          { doctors } = useDoctorContext(),
          profileContext = useContext(ProfileContext),
          profile = profileContext?.profile,
          [slots, setSlots] = useState(
            schedule.availableSlots.map(day =>{

                return{

                    date: new Date(day.date),
                    slots: day.slots as unknown as TimeSlotType[]

                }

            })
          ),
          [doctorInfo, setDoctorInfo] = useState<DoctorType | null>(null),
          [patientInfo, setPatientInfo] = useState(profile || null),
          [slotIndex, setSlotIndex] = useState(0),
          [consultationType, setConsultationType] = useState<"online" | "in-person">("in-person"),
          [slotTime, setSlotTime] = useState(''),
          [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotType | null>(null),
          [loading, setLoading] = useState(false),
          [isBooked, setIsBooked] = useState<{ [doctorId: string]: boolean }>(() =>{

            const storedIsBooked = localStorage.getItem("isBooked")

            return storedIsBooked ? JSON.parse(storedIsBooked) : {}
            
          }),

          [appointedDoctors, setAppointedDoctors] = useState<AppointedDoctorType[]>(() =>{

              const storedAppointedDoctors = localStorage.getItem("appointedDoctors")

              return storedAppointedDoctors ? JSON.parse(storedAppointedDoctors) : []

          }),

          [appointedPatients, setAppointedPatients] = useState<AppointedPatientType[]>(() =>{

              const storedAppointedPatients = localStorage.getItem("appointedPatients")

              return storedAppointedPatients ? JSON.parse(storedAppointedPatients) : []

          }),
          [appointments, setAppointments] = useState<AppointmentType[]>(() =>{

            const storedAppointments = localStorage.getItem("appointments")

            return storedAppointments ? JSON.parse(storedAppointments) : []

          })


    useEffect(() =>{

        localStorage.setItem("appointedDoctors", JSON.stringify(appointedDoctors))

    }, [appointedDoctors])


    useEffect(() =>{

        localStorage.setItem("appointedPatients", JSON.stringify(appointedPatients))

    }, [appointedPatients])

    useEffect(() =>{

        localStorage.setItem("appointments", JSON.stringify(appointments))

    }, [appointments])


    const fetchDocInfo = () =>{

       const docInfo = doctors.find(doc => doc._id === doctorID) || null

       setDoctorInfo(docInfo as unknown as DoctorType)

    }


    const handleSetIsBooked = (doctorID: string, isBooked: boolean) =>{

        setIsBooked(prev =>{

            const updatedIsBooked = { ...prev, [doctorID]: isBooked }

            localStorage.setItem("isBooked", JSON.stringify(updatedIsBooked))

            return updatedIsBooked

        })

    }


    useEffect(() =>{

        const storedAppointedDoctors = localStorage.getItem("appointedDoctors"),
               storedAppointedPatients = localStorage.getItem("appointedPatients")

        if(storedAppointedDoctors){

            setAppointedDoctors(JSON.parse(storedAppointedDoctors))

        }

        if(storedAppointedPatients){

            setAppointedPatients(JSON.parse(storedAppointedPatients))

        }   

    }, [])


    useEffect(() =>{

       fetchDocInfo()

       setPatientInfo(profile || null)   

    }, [doctorID, profile])


    return(

        <BookingContext.Provider value={{
            doctorInfo,
            patientInfo,
            doctorID: doctorID || null,
            patientID: profile?._id || null,  
            slotIndex,
            setSlotIndex,
            consultationType,
            loading,
            setLoading,
            setConsultationType,
            slotTime,
            setSlotTime,
            selectedTimeSlot,
            setSelectedTimeSlot,
            appointedDoctors,
            setAppointedDoctors,
            appointedPatients,
            setAppointedPatients,
            appointments,
            setAppointments,
            isBooked,
            setIsBooked: handleSetIsBooked,
            slots,
            setSlots
        }}>

            {children}

        </BookingContext.Provider>

    )

}

export const useBookingContext = () =>{

    const context = useContext(BookingContext)

    if(!context) throw new Error('BookingContext must be used within a BookingProvider')

    return context

}