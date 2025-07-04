import { AppointedPatientType } from "../types/AppointedPatientType"
import { AppointmentType } from "../types/AppointmentType"
import { DoctorType } from "../types/DoctorType"
import { DocumentType } from "../types/DocumentType"
import { NoteType } from "../types/NoteType"

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
    medicalConditions: string[]
    allergies: string[]
    medications: string[]
    surgeries: string[]
    updateMedicalConditions: (index: number, updatedCondition: string) => void
    updateAllergies: (index: number, updatedAllergy: string) => void
    updateMedications: (index: number, updatedMedication: string) => void
    updateSurgeries: (index: number, updatedSurgery: string) => void

    // Notes management 
    notes: NoteType[]
    addNote: (note: NoteType) => void
    removeNote: (id: string) => void
    updateNote: (updatedNote: NoteType) => void

    // Documents management
    documents: DocumentType[]

    addDocument: (document: DocumentType) => void
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
    updateAppointmentStatus: (appointment: AppointmentType, newStatus: "pending" | "confirmed" | "cancelled" | "completed" | "approved" | "rescheduled" | "rejected" | "follow-up") => void
    updateAppointment: (appointment: AppointmentType) => void

}