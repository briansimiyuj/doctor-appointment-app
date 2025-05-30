import { AppointedPatientType } from "../types/AppointedPatientType"
import { AppointmentType } from "../types/AppointmentType"
import { DoctorType } from "../types/DoctorType"

export interface PatientDetailsContextProps{

    patientID: string
    patientDetails: AppointedPatientType | null
    setPatientDetails: (patientDetails: AppointedPatientType | null) => void

    // Active Tab management
    activeTab: "medical-history" | "appointments" | "prescriptions" | "notes" | "documents" 
    setActiveTab: (activeTab: "medical-history" | "appointments" | "prescriptions" | "notes" | "documents") => void

    // Medical History management
    addMedicalCondition: (condition: string) => void
    removeMedicalCondition: (index: number) => void
    addAllergy: (allergy: string) => void
    removeAllergy: (index: number) => void
    addMedication: (medication: string) => void
    removeMedication: (index: number) => void
    addSurgery: (surgery: string) => void
    removeSurgery: (index: number) => void

    // Notes management 
    notes: Array<{

        id: string
        title: string
        content: string
        date: Date
        doctorID: string
        doctorName: string

    }>
    addNote: (note: {  title: string, content: string, date: Date, doctorID: string, doctorName: string }) => void
    removeNote: (index: number) => void

    // Documents management
    documents: Array<{
        
        id: string
        name: string
        type: string
        uploadDate: Date
        uploadedBy: string

    }>

    addDocument: (document: { name: string, type: string, uploadDate: Date, uploadedBy: string }) => void
    removeDocument: (index: string) => void

    //Patient appointments
    patientAppointments: AppointmentType[]
    fetchPatientAppointments: (patientID: string) => void
    setPatientAppointments: (appointments: AppointmentType[] | ((prev: AppointmentType[]) => AppointmentType[])) => void

    // Appointment scheduling
    scheduleAppointment: (appointment: { date: Date, time: string,  reason: string }) => void
    cancelAppointment: (patientID: string, doctorID: string, date: Date, time: string, reason: string) => void
    rescheduleAppointment: (appointment: AppointmentType, newDate: Date, newTime: string, newDoctor: DoctorType, newConsultationType: "online" | "in-person") => void

    // Update appointment status
    updateAppointmentStatus: (appointment: AppointmentType, newStatus: "pending" | "confirmed" | "cancelled" | "completed" | "approved" | "rescheduled" | "rejected") => void
    updateAppointment: (appointment: AppointmentType) => void

}