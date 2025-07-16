import { createContext, useState, useEffect } from "react"
import appointmentsData from "../assets/frontend/AppointmentData.json"
import { patients } from "../assets/frontend/patientsData"
import { AppointmentType } from "../assets/types/AppointmentType"
import { AppointmentsContextProps } from "../assets/contextProps/AppointmentsContextProps"
import { AppointedPatientType } from "../assets/types/AppointedPatientType"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"
import { doctors } from "../assets/frontend/doctorsData"

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

            const patient = patients.find(p => p.name === appointment.patient),
                  doctor = doctors.find(d => d.name === appointment.doctor)

            if(!patient || !doctor) return null

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
                    status: "booked",

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

            const consultationType: "online" | "in-person" = appointment.consultationType?.toLowerCase() === "in-person" ? "in-person" : "online"
            
            return { ...appointment, patient: appointedPatient, doctor: appointedDoctor, consultationType }


        }).filter(appointment => appointment !== null)

        setAppointments(enrichedAppointments as AppointmentType[])

        const now = new Date(),
             upcoming = enrichedAppointments.filter(appointment =>{

                const isFutureDate = new Date(appointment.date) > now,
                      isActiveStatus = ["pending", "confirmed", "approved", "rescheduled", "follow-up"].includes(appointment.status)

                return isFutureDate && isActiveStatus

             }),


             past = enrichedAppointments.filter(appointment =>{

                const isPastDate = new Date(appointment.date) < now,
                      isDoneStatus = ["cancelled",  "rejected", "completed"].includes(appointment.status)

                return isPastDate && isDoneStatus

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
