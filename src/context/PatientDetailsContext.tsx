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

interface PatientDetailsProviderProps{

    children: React.ReactNode

}

export const PatientDetailsContext = createContext<PatientDetailsContextProps | undefined>(undefined)

export const PatientDetailsProvider: React.FC<PatientDetailsProviderProps> = ({ children }) =>{

const [patientDetails, setPatientDetails] = useState<AppointedPatientType | null>(null), 
      [activeTab, setActiveTab] =  useState<"medical-history" | "appointments" | "prescriptions" | "notes" | "documents">("documents"),
      { patientID = "" } = useParams<{ patientID: string }>(),
      [patientAppointments, setPatientAppointments] = useState<AppointmentType[]>(() =>{

            const savedAppointments = localStorage.getItem(`appointments-${patientID}`)

            return savedAppointments ? JSON.parse(savedAppointments) : []

      }),
      { appointments } = useContext(AppointmentsContext),
      { appointedPatients } = useContext(BookingContext),
      [notes, setNotes] = useState<Array<{

            id: string
            title: string
            content: string
            date: Date
            doctorID: string
            doctorName: string

      }>>([]),
      [documents, setDocuments] = useState<DocumentType[]>(() =>{

            const savedDocuments = localStorage.getItem(`documents-${patientID}`)

            return savedDocuments ? JSON.parse(savedDocuments) : []
            
      }
      )


      const fetchPatientAppointments = (patientID: string) =>{

            const savedAppointments = localStorage.getItem(`appointments-${patientID}`)

            if(savedAppointments){

                  setPatientAppointments(JSON.parse(savedAppointments))

                  return

            }

            if(appointments){

                  const filteredAppointments = appointments.filter(appointment => appointment.patient._id === patientID)

                  setPatientAppointments(filteredAppointments)

            }

      }


      useEffect(()=>{

            if(patientID && appointedPatients && appointedPatients.length > 0){

                  const foundPatient = appointedPatients.find(patient => patient.patientInfo._id === patientID)

                  if(foundPatient){
                        
                        setPatientDetails(foundPatient)

                        fetchPatientAppointments(patientID)

                  }

            }
            
      }, [appointments, appointedPatients, patientID])



      const addDocument = (document: DocumentType) =>{
      
            setDocuments(prevDocuments =>{
                  
                  const updatedDocuments = [...prevDocuments, document]
                  
                  localStorage.setItem(`documents-${patientID}`, JSON.stringify(updatedDocuments))
                  
                  return updatedDocuments

            })

      }


      const removeDocument = (index: string) =>{
      
         const updatedDocuments = documents.filter(document => document._id !== index)

         setDocuments(updatedDocuments)

         localStorage.setItem(`documents-${patientID}`, JSON.stringify(updatedDocuments))
      
      }



      const addNote = (note: NoteType) =>{
    
            const newNote ={
    
                id: uuid(),
                ...note
    
            }
    
            setNotes(prevNotes => [...prevNotes, newNote])
    
            localStorage.setItem(`note-${patientID}`, JSON.stringify([notes, newNote]))
        
      }

      const removeNote = (index: number) =>{
    
            const updatedNotes = [...notes]
     
            updatedNotes.splice(index, 1)
     
            setNotes(updatedNotes)
     
            localStorage.setItem(`note-${patientID}`, JSON.stringify(updatedNotes))
         
      }


      useEffect(() =>{
    
            if(patientID){
    
                  const savedNotes = localStorage.getItem(`notes-${patientID}`)
    
                  if(savedNotes){
    
                    setNotes(JSON.parse(savedNotes))
    
                  }else{  
    
                        setNotes([])
    
                  }

            }
        
      }, [patientID])


      const updateAppointmentStatus = (appointment: AppointmentType, newStatus: "pending" | "completed" | "cancelled" | "confirmed" | "approved" | "rescheduled" | "rejected" | "follow-up") =>{
      
            setPatientAppointments(prevAppointments =>{

                  const updatedAppointments = [...prevAppointments],
                        appointmentIndex = updatedAppointments.findIndex(app => app.date === appointment.date && app.time === appointment.time)

                  if(appointmentIndex !== -1){

                        updatedAppointments[appointmentIndex] = {...updatedAppointments[appointmentIndex], status: newStatus}

                        localStorage.setItem(`appointments-${patientID}`, JSON.stringify(updatedAppointments))

                        return updatedAppointments

                  }

                  return prevAppointments

            })
      
      }


      const rescheduleAppointment = (appointment: AppointmentType, newDate: Date, newTime: string, newDoctor: DoctorType, newConsultationType: "online" | "in-person") =>{
      
            setPatientAppointments(prevAppointments =>{

                  const updatedAppointments = [...prevAppointments],
                        appointmentIndex = updatedAppointments.findIndex(app => app.date === appointment.date && app.time === appointment.time)

                  if(appointmentIndex !== -1){

                        const updatedAppointment ={

                              ...updatedAppointments[appointmentIndex],
                              date: newDate.toISOString(),
                              time: newTime,
                              doctor: newDoctor,
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

      const value ={

            activeTab,
            setActiveTab,
            patientAppointments,
            setPatientAppointments,
            fetchPatientAppointments,
            notes: [],
            addNote,
            removeNote,
            addMedicalCondition: () => {},
            removeMedicalCondition: () => {},
            addAllergy: () => {},
            removeAllergy: () => {},
            addMedication: () => {},
            removeMedication: () => {},
            addSurgery: () => {},
            removeSurgery: () => {},
            documents,
            addDocument,
            removeDocument,
            updatePatientStatus: () => {},
            scheduleAppointment: () => {},
            cancelAppointment: () => {},
            rescheduleAppointment,
            patientDetails,
            setPatientDetails,
            updateAppointmentStatus,
            patientID,
            updateAppointment

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