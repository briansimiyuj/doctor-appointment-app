import { createContext, useContext, useEffect, useState } from "react"
import { PatientDetailsContextProps } from "../assets/contextProps/PatientDetailsContextProps"
import { AppointedPatientType } from "../assets/types/AppointedPatientType"
import { AppointmentsContext } from "./AppointmentContext"
import { AppointmentType } from "../assets/types/AppointmentType"
import { BookingContext } from "./BookingContext"
import { useParams } from "react-router-dom"
import { DocumentType } from "../assets/types/DocumentType"
import { v4 as uuid } from "uuid"
import { NoteType } from "../assets/types/NoteType"
import { DoctorType } from "../assets/types/DoctorType"
import { useProfileContext } from "./ProfileContext"
import { PrescriptionType } from "../assets/types/PrescriptionType"
import dummyPrescriptions from "../assets/dummyData/dummyPrescriptions.json"
import dummyNotes from "../assets/dummyData/dummyNotes.json"

interface PatientDetailsProviderProps{
    
  children: React.ReactNode

}

export const PatientDetailsContext = createContext<PatientDetailsContextProps | undefined>(undefined)

export const PatientDetailsProvider: React.FC<PatientDetailsProviderProps> = ({ children }) =>{

      const [patientDetails, setPatientDetails] = useState<AppointedPatientType | null>(null), 
            { profile } = useProfileContext(),
            [activeTab, setActiveTab] =  useState<"medical-history" | "appointments" | "prescriptions" | "notes" | "documents">("documents"),
            { appointmentID = "" } = useParams<{ appointmentID: string }>(),
            { patientID = "" } = useParams<{ patientID: string }>(),
            { appointments } = useContext(AppointmentsContext),
            { appointedPatients } = useContext(BookingContext),
            [patientAppointments, setPatientAppointments] = useState<AppointmentType[]>([]),
            [notes, setNotes] = useState<NoteType[]>(dummyNotes),
            [documents, setDocuments] = useState<DocumentType[]>([]),
            [medicalConditions, setMedicalConditions] = useState<string[]>([]),
            [allergies, setAllergies] = useState<string[]>([]),
            [medications, setMedications] = useState<string[]>([]),
            [surgeries, setSurgeries] = useState<string[]>([]),
            [prescriptions, setPrescriptions] = useState<PrescriptionType[]>(dummyPrescriptions)

      useEffect(() => {
      
            if(appointmentID && appointments && appointments.length > 0){

                  const foundAppointment = appointments.find(app => app._id === appointmentID)

                  if(profile?.type === "doctor"){

                        if(foundAppointment){

                              const patientID = foundAppointment.patient.patientInfo._id

                              setPatientDetails(foundAppointment.patient)

                              const savedAppointments = localStorage.getItem(`appointments-${patientID}`)
                              setPatientAppointments(savedAppointments ? JSON.parse(savedAppointments) : [foundAppointment])

                              const savedNotes = localStorage.getItem(`notes-${patientID}`)
                              setNotes(savedNotes ? JSON.parse(savedNotes) : [])

                              const savedMedicalConditions = localStorage.getItem(`medicalConditions-${patientID}`)
                              setMedicalConditions(savedMedicalConditions ? JSON.parse(savedMedicalConditions) : [])

                              const savedAllergies = localStorage.getItem(`allergies-${patientID}`)
                              setAllergies(savedAllergies ? JSON.parse(savedAllergies) : [])

                              const savedMedications = localStorage.getItem(`medications-${patientID}`)
                              setMedications(savedMedications ? JSON.parse(savedMedications) : [])

                              const savedSurgeries = localStorage.getItem(`surgeries-${patientID}`)
                              setSurgeries(savedSurgeries ? JSON.parse(savedSurgeries) : [])

                        }

                  }else if(profile?.type === "patient"){

                        const savedAppointments = localStorage.getItem("appointments")

                        setPatientAppointments(savedAppointments ? JSON.parse(savedAppointments) : [])

                  }

            }

      }, [appointments, appointedPatients, appointmentID])

      useEffect(() =>{
      
            if(patientDetails){

                  const patientID = patientDetails.patientInfo._id,
                        savedDocuments = JSON.parse(localStorage.getItem(`documents-${patientID}`) || "[]")

                  setDocuments(savedDocuments)

            }else{
                  
                  const savedDocuments = JSON.parse(localStorage.getItem("documents") || "[]")

                  setDocuments(savedDocuments)

            }
      
      }, [appointmentID, patientDetails])

      const fetchPatientAppointments = (patientID: string) =>{

            const savedAppointments = localStorage.getItem(`appointments-${patientID}`)

            if(savedAppointments){

                  setPatientAppointments(JSON.parse(savedAppointments))

                  return

            }

            if(appointments){

                  const filteredAppointments = appointments.filter(appointment => appointment.patient.patientInfo?._id === patientID)

                  setPatientAppointments(filteredAppointments)

            }

      }


      const addDocument = (document: DocumentType | DocumentType[]) =>{
            
            setDocuments(prev =>{

                  const newDocuments = Array.isArray(document) ? document : [document]

                  if(patientDetails){

                        const patientID = patientDetails.patientInfo?._id

                        localStorage.setItem(`documents-${patientID}`, JSON.stringify([...prev, ...newDocuments]))

                  }else{
                        
                        localStorage.setItem("documents", JSON.stringify([...prev, ...newDocuments]))

                  }

                  return [...prev, ...newDocuments]

            })

      }

      const removeDocument = (index: string) =>{
            
            const filteredDocuments = documents.filter(document => document._id !== index)

            setDocuments(filteredDocuments)

            if(patientDetails){
                  
                  const patientID = patientDetails.patientInfo?._id

                  localStorage.setItem(`documents-${patientID}`, JSON.stringify(filteredDocuments))

            }else{

                  localStorage.setItem("documents", JSON.stringify(filteredDocuments))
                  
            }
      
      }

      const addNote = (note: Omit<NoteType, "_id">) =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo._id,
                  newNote = { _id: uuid(), ...note, date: new Date() },
                  updatedNotes = [newNote, ...notes]

            setNotes(updatedNotes)

            localStorage.setItem(`notes-${patientID}`, JSON.stringify(updatedNotes))

      }

      const removeNote = (id: string) =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo._id,
                  updatedNotes = notes.filter(note => note._id !== id)

            setNotes(updatedNotes)

            localStorage.setItem(`notes-${patientID}`, JSON.stringify(updatedNotes))

      }

      const updateNote = (updatedNote: NoteType) =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo._id,
                  updatedNotes = notes.map(note => note._id === updatedNote._id ? {...note, ...updatedNote } : note)

            setNotes(updatedNotes)

            localStorage.setItem(`notes-${patientID}`, JSON.stringify(updatedNotes))

      }

      const updateAppointmentStatus = (appointment: AppointmentType, newStatus: "pending" | "completed" | "cancelled" | "confirmed" | "approved" | "rescheduled" | "rejected" | "follow-up") =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo._id
            
            setPatientAppointments(prevAppointments =>{

                  const updatedAppointments = [...prevAppointments],
                        appointmentIndex = updatedAppointments.findIndex(app => app._id === appointment._id)

                  if(appointmentIndex !== -1){

                        updatedAppointments[appointmentIndex] = {...updatedAppointments[appointmentIndex], status: newStatus}

                        localStorage.setItem(`appointments-${patientID}`, JSON.stringify(updatedAppointments))

                        return updatedAppointments

                  }

                  return prevAppointments

            })

      }

      const rescheduleAppointment = (appointment: AppointmentType, newDate: Date, newTime: string, newDoctor: DoctorType, newConsultationType: "online" | "in-person") =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo._id
            
            setPatientAppointments(prevAppointments =>{

                  const updatedAppointments = [...prevAppointments],
                        appointmentIndex = updatedAppointments.findIndex(app => app._id === appointment._id)

                  if(appointmentIndex !== -1){

                        const updatedAppointment ={

                              ...updatedAppointments[appointmentIndex],
                              date: newDate.toISOString(),
                              time: newTime,
                              doctor:{
                                    
                                    doctorInfo: newDoctor,
                                    appointmentTime:{ dateTime: newDate, time: newTime }

                              },
                              status: "rescheduled",
                              consultationType: newConsultationType

                        }

                        updatedAppointments[appointmentIndex] = updatedAppointment  

                        localStorage.setItem(`appointments-${patientID}`, JSON.stringify(updatedAppointments))

                        return updatedAppointments

                  }

                  return prevAppointments

            })

      }

      const updateAppointment = (appointment: AppointmentType) =>{

            setPatientAppointments(prevAppointments =>{
            
                  return prevAppointments.map(app => app._id === appointment._id ? appointment : app)

            })

      }

      const addMedicalCondition = (condition: string) =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo._id,
                 updatedConditions = [condition, ...medicalConditions]

            setMedicalConditions(updatedConditions)

            localStorage.setItem(`medicalConditions-${patientID}`, JSON.stringify(updatedConditions))

      }

      const removeMedicalCondition = (index: number) =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo._id,
                 updatedConditions = medicalConditions.filter((_, i) => i !== index)

            setMedicalConditions(updatedConditions)

            localStorage.setItem(`medicalConditions-${patientID}`, JSON.stringify(updatedConditions))

      }

      const addSurgery = (surgery: string) =>{
      
            const updatedSurgeries = [surgery, ...surgeries]

            setSurgeries(updatedSurgeries)

            localStorage.setItem(`surgeries-${patientID}`, JSON.stringify(updatedSurgeries))
      
      }

      const removeSurgery = (index: number) =>{
            
            const updatedSurgeries = surgeries.filter((_, i) => i !== index)

            setSurgeries(updatedSurgeries)

            localStorage.setItem(`surgeries-${patientID}`, JSON.stringify(updatedSurgeries))

      }

      const addMedication = (medication: string) =>{

            const updatedMedications = [medication, ...medications]

            setMedications(updatedMedications)

            localStorage.setItem(`medications-${patientID}`, JSON.stringify(updatedMedications))

      }

      const removeMedication = (index: number) =>{

            const updatedMedications = medications.filter((_, i) => i !== index)

            setMedications(updatedMedications)

            localStorage.setItem(`medications-${patientID}`, JSON.stringify(updatedMedications))

      }

      const updateMedicalConditions = (index: number, condition: string) =>{

            const updatedMedicalConditions = [...medicalConditions]

            updatedMedicalConditions[index] = condition
            
            setMedicalConditions(updatedMedicalConditions)

            localStorage.setItem(`medicalConditions-${patientID}`, JSON.stringify(updatedMedicalConditions))
      
      }

      const addAllergy = (allergy: string) =>{

            const updatedAllergies = [allergy, ...allergies]

            setAllergies(updatedAllergies)

            localStorage.setItem(`allergies-${patientID}`, JSON.stringify(updatedAllergies))
            
      }

      const removeAllergy = (index: number) =>{

            const updatedAllergies = allergies.filter((_, i) => i !== index)

            setAllergies(updatedAllergies)

            localStorage.setItem(`allergies-${patientID}`, JSON.stringify(updatedAllergies))

      }

      const updateAllergies = (index: number, allergy: string) =>{
            
            const updatedAllergies = [...allergies]

            updatedAllergies[index] = allergy

            setAllergies(updatedAllergies)

            localStorage.setItem(`allergies-${patientID}`, JSON.stringify(updatedAllergies))

      }

      const updateMedications = (index: number, medication: string) =>{

            const updatedMedications = [...medications]

            updatedMedications[index] = medication

            setMedications(updatedMedications)

            localStorage.setItem(`medications-${patientID}`, JSON.stringify(updatedMedications))

      }

      const updateSurgeries = (index: number, surgery: string) =>{

            const updatedSurgeries = [...surgeries]

            updatedSurgeries[index] = surgery

            setSurgeries(updatedSurgeries)

            localStorage.setItem(`surgeries-${patientID}`, JSON.stringify(updatedSurgeries))
            
      }

      const addPrescription = (prescription: PrescriptionType | PrescriptionType[]) =>{

            setPrescriptions(prev =>{

                  const items = Array.isArray(prescription) ? prescription : [prescription],
                        updatedPrescriptions = [...prev, ...items]

                  localStorage.setItem("prescriptions", JSON.stringify(updatedPrescriptions))

                  return updatedPrescriptions

            })

      }


      const removePrescription = (ID: string) =>{

            const updatedPrescriptions = prescriptions.filter(prescription => prescription._id !== ID)

            setPrescriptions(updatedPrescriptions)

            localStorage.setItem("prescriptions", JSON.stringify(updatedPrescriptions))
      
      }

      const updatePrescription = (id: string, prescription: PrescriptionType) =>{

            const updatedPrescriptions = prescriptions.map(p => p._id === id ? prescription : p)

            setPrescriptions(updatedPrescriptions)

            localStorage.setItem("prescriptions", JSON.stringify(updatedPrescriptions))

      }

      const value: PatientDetailsContextProps ={

            activeTab,
            setActiveTab,
            patientAppointments,
            setPatientAppointments,
            fetchPatientAppointments,
            notes,
            addNote,
            removeNote,
            updateNote,
            addMedicalCondition,
            removeMedicalCondition,
            addAllergy,
            removeAllergy,
            addMedication,
            removeMedication,
            addSurgery,
            removeSurgery,
            documents,
            addDocument,
            removeDocument,
            rescheduleAppointment,
            patientDetails,
            setPatientDetails,
            updateAppointmentStatus,
            prescriptions,
            addPrescription,
            removePrescription,
            updatePrescription,
            patientID: patientDetails?.patientInfo._id || "",
            updateAppointment,
            medicalConditions,
            allergies,
            medications,
            surgeries,
            updateMedicalConditions,
            updateAllergies,
            updateMedications,
            updateSurgeries
      }

      return(

            <PatientDetailsContext.Provider value={value}>

                  {children}

            </PatientDetailsContext.Provider>

      )

}

export const usePatientDetails = () =>{

      const context = useContext(PatientDetailsContext)

      if(!context) throw new Error('usePatientDetails must be used within PatientDetailsContextProvider')

      return context

}