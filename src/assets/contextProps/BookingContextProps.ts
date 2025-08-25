import { AppointedDoctorType } from "../types/AppointedDoctorType"
import { AppointedPatientType } from "../types/AppointedPatientType"
import { AppointmentType } from "../types/AppointmentType"
import { DoctorType } from "../types/DoctorType"
import { TimeSlotType } from "../types/TimeSlotType"

export interface BookingContextProps{

    doctorInfo: DoctorType | null
    patientInfo: any
    doctorID: string | null
    patientID: string | null
    slotIndex: number
    setSlotIndex: (index: number) => void
    slotTime: string
    setSlotTime: (time: string) => void
    selectedTimeSlot: TimeSlotType | null
    setSelectedTimeSlot: (slot: TimeSlotType | null) => void
    consultationType: "online" | "in-person"
    setConsultationType: (type: "online" | "in-person") => void
    appointments: AppointmentType[]
    setAppointments: (appointments: AppointmentType[] | ((prev: AppointmentType[]) => AppointmentType[])) => void
    appointedDoctors: AppointedDoctorType[]
    setAppointedDoctors: (doctors: AppointedDoctorType[] | ((prev: AppointedDoctorType[]) => AppointedDoctorType[])) => void,
    appointedPatients: AppointedPatientType[]
    setAppointedPatients: (patients: AppointedPatientType[] | ((prev: AppointedPatientType[]) => AppointedPatientType[])) => void,
    isBooked: { [doctorId: string]: boolean }
    setIsBooked: (doctorId: string, status: boolean) => void

    slots:{

        date: Date
        slots: TimeSlotType[]

    }[]

    setSlots:(

        slots: { date: Date, slots: TimeSlotType[] }[] | ((prev: { date: Date; slots: TimeSlotType[] }[]) => { date: Date; slots: TimeSlotType[] }[])
        
    ) => void

}