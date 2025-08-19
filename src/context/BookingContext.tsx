import { createContext, useEffect, useState } from "react";
import { DoctorType } from "../assets/types/DoctorType";
import { useParams } from "react-router-dom";
import { doctors } from "../assets/frontend/doctorsData";
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType";
import { PatientType } from "../assets/types/PatientType";
import { patients } from "../assets/frontend/patientsData";
import { AppointedPatientType } from "../assets/types/AppointedPatientType";
import { BookingContextProps } from "../assets/contextProps/BookingContextProps";
import { TimeSlotType } from "../assets/types/TimeSlotType";
import { useSchedule } from "./ScheduleContext";


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
    setIsBooked: () => {},
    slots: [],
    setSlots: () => {},

})


export const BookingContextProvider =  ({ children }: BookingContextProviderProps) =>{

    const { doctorID, patientID } = useParams(),
          { schedule } = useSchedule(),
          [slots, setSlots] = useState(
            schedule.availableSlots.map(day =>{

                return{
 
                    date: new Date(day.date),
                    slots: day.slots as unknown as TimeSlotType[]

                }

            })
          ),
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
                        medicalHistory:{

                            diseases: ["diabetes", "hypertension", "asthma"],
                            allergies: ["penicillin", "latex"],
                            medications: ["aspirin", "ibuprofen"]

                        },

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

       setDoctorInfo(docInfo as unknown as DoctorType)
    
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
            setIsBooked: handleSetIsBooked,
            slots,
            setSlots
        }}>
        
            {children}
        
        </BookingContext.Provider>

    )

}