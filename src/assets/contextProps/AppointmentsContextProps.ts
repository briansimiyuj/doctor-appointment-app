import { AppointmentType } from "../types/AppointmentType"

export interface AppointmentsContextProps{

    appointments: AppointmentType[]
    appointment: AppointmentType | null
    pastAppointments: AppointmentType[]
    upcomingAppointments: AppointmentType[]
    cancelledAppointments: AppointmentType[]
    appointmentID: string | undefined
    activeTab: "upcoming" | "past" | "cancelled"
    setActiveTab: (tab: "upcoming" | "past" | "cancelled") => void

}