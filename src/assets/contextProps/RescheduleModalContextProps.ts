import { AppointmentType } from "../types/AppointmentType";
import { DoctorType } from "../types/DoctorType";

export interface RescheduleModalContextProps{

    appointment: AppointmentType | null
    newDate: string | null
    setNewDate: (date: string) => void
    newTime: string | null
    setNewTime: (time: string) => void
    handleRescheduleConfirm: () => void
    onClose: () => void
    isValid: boolean
    selectedDoctor: DoctorType | null
    setSelectedDoctor: (doctor: DoctorType) => void
    availableDoctors: DoctorType[]
    filterDoctorsBySpeciality: (speciality: string) => void
    resetDoctorFilter: () => void

}