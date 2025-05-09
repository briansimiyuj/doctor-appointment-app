import { AppointmentType } from "../types/AppointmentType";
import { DoctorType } from "../types/DoctorType";

export interface RescheduleModalContextProps{

    appointment: AppointmentType | null
    newDate: string | null
    setNewDate: (date: string) => void
    newTime: string | null
    setNewTime: (time: string) => void
    handleRescheduleConfirm: () => void
    isConfirmed: boolean
    setIsConfirmed: (isConfirmed: boolean) => void
    consultationType: "in-person" | "online" | null
    setConsultationType: (type: "in-person" | "online") => void
    onClose: () => void
    isValid: boolean
    selectedDoctor: DoctorType | null
    setSelectedDoctor: (doctor: DoctorType) => void
    availableDoctors: DoctorType[]
    filterDoctorsBySpeciality: (speciality: string) => void
    resetDoctorFilter: () => void

}