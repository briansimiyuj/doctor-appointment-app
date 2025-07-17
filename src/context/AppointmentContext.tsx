import { createContext, useState, useEffect } from "react"
import appointmentsData from "../assets/frontend/AppointmentData.json"
import { patients } from "../assets/frontend/patientsData"
import { doctors } from "../assets/frontend/doctorsData"
import { AppointmentType } from "../assets/types/AppointmentType"
import { AppointmentsContextProps } from "../assets/contextProps/AppointmentsContextProps"
import { AppointedPatientType } from "../assets/types/AppointedPatientType"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"

interface AppointmentsContextProviderProps{

    children: React.ReactNode

}

export const AppointmentsContext = createContext<AppointmentsContextProps>({
    appointments: [],
    pastAppointments: [],
    upcomingAppointments: [],
    activeTab: "upcoming",
    setActiveTab: (_tab: "upcoming" | "past") => {}

})

export const AppointmentsContextProvider: React.FC<AppointmentsContextProviderProps> = ({ children }) =>{

    const [appointments, setAppointments] = useState<AppointmentType[]>([]),
          [pastAppointments, setPastAppointments] = useState<AppointmentType[]>([]),
          [upcomingAppointments, setUpcomingAppointments] = useState<AppointmentType[]>([]),
          [activeTab, setActiveTab] = useState<"upcoming" | "past">("upcoming")

    useEffect(() =>{

        const enrichedAppointments = appointmentsData.map(appointment =>{

            const patient = patients.find(patient => patient.name === appointment.patient),
                doctor = doctors.find(doctor => doctor.name === appointment.doctor)

            if(!doctor || !patient){

                console.log("doctor or patient not found")

                return appointment

            }
            

            const appointedPatient: AppointedPatientType ={

                patientInfo:{

                    _id: patient._id,
                    name: patient.name,
                    age: patient.age,
                    gender: patient.gender,
                    status: patient.status,
                    image: patient.image,
                    contact: patient.contact,
                    address: patient.address,
                    appointment: patient.appointment,
                    medicalHistory: patient.medicalHistory

                },

                appointedTime:{
                
                    dateTime: new Date(appointment.date),
                    time: appointment.time,
                    slotTime: appointment.time,
                    status: "booked"

                }
            
            }

            const appointedDoctor: AppointedDoctorType ={

                doctorInfo: doctor,
                appointmentTime:{

                    dateTime: new Date(appointment.date),
                    time: appointment.time,
                    slotTime: appointment.time,
                    status: "booked",

                }

            }

            const consultationType: "online" | "in-person" = appointment.consultationType?.toLowerCase() === "in-person" ? "in-person" : "online",
                normalizedStatus = appointment.status.toLowerCase().trim()
            
            return{
                
               _id: appointment._id,
                date: appointment.date,
                time: appointment.time,
                consultationType,
                status: normalizedStatus,
                doctor: appointedDoctor,
                patient: appointedPatient

            }
        
        }).filter((appointment): appointment is AppointmentType => appointment !== null && typeof appointment === 'object') as AppointmentType[]

        setAppointments(enrichedAppointments)

        const now = new Date(),
              today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
              today.setHours(0, 0, 0, 0)

        const upcoming = enrichedAppointments.filter(appointment =>{

            const [year, month, day] = appointment.date.split("-").map(Number),
                  appointmentDate = new Date(year, month - 1, day)
                  appointmentDate.setHours(0, 0, 0, 0)
            const isFutureDate = appointmentDate > today

            return isFutureDate
            
        })

        const past = enrichedAppointments.filter(appointment =>{

            const [year, month, day] = appointment.date.split("-").map(Number),
                appointmentDate = new Date(year, month - 1, day)
                appointmentDate.setHours(0, 0, 0, 0)
            const    isPastDate = appointmentDate < today

            return isPastDate 

        })

        setUpcomingAppointments(upcoming)

        setPastAppointments(past)

    }, [])

    const contextValue: AppointmentsContextProps ={

        appointments,
        pastAppointments,
        upcomingAppointments,
        activeTab,
        setActiveTab

    }

    
    return(

        <AppointmentsContext.Provider value={contextValue}>

            {children}
            
        </AppointmentsContext.Provider>

    )

}
