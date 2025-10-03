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
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { db } from "../firebaseConfig";


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
          [isBooked, setIsBooked] = useState<{ [doctorId: string]: boolean }>({}),
          [appointedDoctors, setAppointedDoctors] = useState<AppointedDoctorType[]>([]),
          [appointedPatients, setAppointedPatients] = useState<AppointedPatientType[]>([]),
          [appointments, setAppointments] = useState<AppointmentType[]>([])


    const fetchDocInfo = () =>{

       const docInfo = doctors.find(doc => doc._id === doctorID) || null

       setDoctorInfo(docInfo as unknown as DoctorType)

    }


    const handleSetIsBooked = (doctorID: string, status: boolean) =>{

        setIsBooked(prev =>({

            ...prev,
            [doctorID]: status

        }))

    }


    useEffect(() =>{

        if(!profile?._id) return

        const appointmentsRef = collection(db, "appointments"),
              q = query(appointmentsRef, where("patient.patientInfo._id", "==", profile._id))

        const unsubscribe = onSnapshot(q, (snapshot) =>{

            const fetchedAppointments: AppointmentType[] = []

            snapshot.forEach((doc) =>{

                fetchedAppointments.push(doc.data() as AppointmentType)

            })

            setAppointments(fetchedAppointments)

        }, (error) =>{

            console.error("Error fetching appointments:", error)

        })

        return () => unsubscribe()

    }, [profile?._id])


    useEffect(() =>{

        if(!profile?._id) return

        const appointmentsRef = collection(db, "appointments"),
              q = query(appointmentsRef, where("patient.patientInfo._id", "==", profile._id))

        const unsubscribe = onSnapshot(q, (snapshot) =>{

            const fetchedAppointedDoctors: AppointedDoctorType[] = []

            snapshot.forEach((doc) =>{

                const appointment = doc.data() as AppointmentType

                fetchedAppointedDoctors.push(appointment.doctor)

            })

            setAppointedDoctors(fetchedAppointedDoctors)

        }, (error) =>{

            console.error("Error fetching appointed doctors:", error)

        })

        return () => unsubscribe()

    }, [profile?._id])


    useEffect(() =>{

        if(!doctorID) return

        const appointmentsRef = collection(db, "appointments"),
              q = query(appointmentsRef, where("doctor.doctorInfo._id", "==", doctorID))

        const unsubscribe = onSnapshot(q, (snapshot) =>{

            const fetchedAppointedPatients: AppointedPatientType[] = []

            snapshot.forEach((doc) =>{

                const appointment = doc.data() as AppointmentType

                fetchedAppointedPatients.push(appointment.patient)

            })

            setAppointedPatients(fetchedAppointedPatients)

        }, (error) =>{

            console.error("Error fetching appointed patients:", error)

        })

        return () => unsubscribe()

    }, [doctorID])


    useEffect(() =>{

        if(!profile?._id) return

        const bookedDoctorsRef = collection(db, "bookedDoctors")

        const unsubscribe = onSnapshot(bookedDoctorsRef, (snapshot) =>{

            const bookedStatus: { [doctorId: string]: boolean } = {}

            snapshot.forEach((doc) =>{

                const data = doc.data()

                if(data.isBooked && data.patientID === profile._id && data.doctorID){

                    bookedStatus[data.doctorID] = true

                }

            })

            setIsBooked(bookedStatus)

        }, (error) =>{

            console.error("Error fetching booked status:", error)

        })

        return () => unsubscribe()

    }, [profile?._id])


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