import { createContext, useEffect, useState } from "react";
import { DoctorType } from "../assets/types/DoctorType";
import { useParams } from "react-router-dom";
import { doctors } from "../assets/frontend/doctorsData";
import { TimeSlotType } from "../assets/types/TimeSlotType";
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType";
import { PatientType } from "../assets/types/PatientType";
import { patients } from "../assets/frontend/patientsData";
import { AppointedPatientType } from "../assets/types/AppointedPatientType";

interface BookingContextProps{

    doctorInfo: DoctorType | null
    patientInfo: PatientType | null
    doctorID: string | null
    patientID: string | null
    slotIndex: number
    setSlotIndex: (index: number) => void
    slotTime: string
    setSlotTime: (time: string) => void
    selectedTimeSlot: TimeSlotType | null
    setSelectedTimeSlot: (slot: TimeSlotType | null) => void
    appointedDoctors: AppointedDoctorType[]
    setAppointedDoctors: (doctors: AppointedDoctorType[] | ((prev: AppointedDoctorType[]) => AppointedDoctorType[])) => void,
    appointedPatients: AppointedPatientType[]
    setAppointedPatients: (patients: AppointedPatientType[] | ((prev: AppointedPatientType[]) => AppointedPatientType[])) => void,
    isBooked: { [doctorId: string]: boolean }
    setIsBooked: (doctorId: string, status: boolean) => void

}
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
    selectedTimeSlot: null,
    setSelectedTimeSlot: () => {},
    appointedDoctors: [],
    setAppointedDoctors: () => {},
    appointedPatients: [],
    setAppointedPatients: () => {},
    isBooked: {},
    setIsBooked: () => {}

})


export const BookingContextProvider =  ({ children }: BookingContextProviderProps) =>{

    const { doctorID, patientID } = useParams(),
          [doctorInfo, setDoctorInfo] = useState<DoctorType | null>(null),
          [patientInfo, setPatientInfo] = useState<PatientType | null>(null),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          [selectedTimeSlot, setSelectedTimeSlot] = useState<TimeSlotType | null>(null),
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

                if(storedAppointedPatients){

                    return JSON.parse(storedAppointedPatients)

                }else{

                    return patients.slice(0, 3).map((patient, index) =>({

                        patientInfo: patient,
                        appointedTime:{

                            time: index === 0 ? "10:00 AM" : index === 1 ? "11:00 AM" : "12:00 PM",

                        }

                    }))

                }

            }) 
    
    useEffect(() =>{

        localStorage.setItem("appointedDoctors", JSON.stringify(appointedDoctors))

    }, [appointedDoctors])

    
    useEffect(() =>{
    
       localStorage.setItem("appointedPatients", JSON.stringify(appointedPatients))
    
    }, [appointedPatients])


    const fetchDocInfo = () =>{
    
       const docInfo = doctors.find(doc => doc._id === doctorID) || null

       setDoctorInfo(docInfo)
    
    }


    const fetchPatientInfo = () =>{
    
       const patientInfo = patients.find(patient => patient._id === patientID) || null

       setPatientInfo(patientInfo)
    
    }


    const handleSetIsBooked = (doctorID: string, isBooked: boolean) =>{
    
        setIsBooked(prev =>{

            const updatedIsBooked = { ...prev, [doctorID]: isBooked }

            localStorage.setItem("isBooked", JSON.stringify(updatedIsBooked))

            return updatedIsBooked

        })
    
    }



    useEffect(() =>{
        
        const storedAppointedDoctors = localStorage.getItem("appointedDoctors")

        if(storedAppointedDoctors){
            
            setAppointedDoctors(JSON.parse(storedAppointedDoctors))

        }

    }, [])

    
    useEffect(() =>{
    
       fetchDocInfo()

       fetchPatientInfo()
    
    }, [doctorID, doctors, patientID, patients])


    return(

        <BookingContext.Provider value={{
            doctorInfo, 
            patientInfo,
            doctorID: doctorID || null, 
            patientID: patientID || null,
            slotIndex,
            setSlotIndex,
            slotTime,
            setSlotTime,
            selectedTimeSlot,
            setSelectedTimeSlot,
            appointedDoctors,
            setAppointedDoctors,
            appointedPatients,
            setAppointedPatients,
            isBooked,
            setIsBooked: handleSetIsBooked
        }}>
        
            {children}
        
        </BookingContext.Provider>

    )

}