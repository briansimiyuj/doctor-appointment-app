import { AppointmentType } from "../types/AppointmentType"

export interface AppointmentsContextProps{

    appointments: AppointmentType[]
    appointment: AppointmentType | null
    pastAppointments: AppointmentType[]
    upcomingAppointments: AppointmentType[]
    appointmentID: string | undefined
    activeTab: "upcoming" | "past" 
    setActiveTab: (tab: "upcoming" | "past") => void

}