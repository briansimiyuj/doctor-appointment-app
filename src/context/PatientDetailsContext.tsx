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
      [activeTab, setActiveTab] =  useState<"medical-history" | "appointments" | "prescriptions" | "notes" | "documents">("notes"),
      { patientID = "" } = useParams<{ patientID: string }>(),
      [patientAppointments, setPatientAppointments] = useState<AppointmentType[]>(() =>{

            const savedAppointments = localStorage.getItem(`appointments-${patientID}`)

            return savedAppointments ? JSON.parse(savedAppointments) : []

      }),
      { appointments } = useContext(AppointmentsContext),
      { appointedPatients } = useContext(BookingContext),
      [notes, setNotes] = useState<NoteType[]>(() =>{

            const savedNotes = localStorage.getItem(`notes-${patientID}`)

            return savedNotes ? JSON.parse(savedNotes) : []

      }),
      [documents, setDocuments] = useState<DocumentType[]>(() =>{

            const savedDocuments = localStorage.getItem(`documents-${patientID}`)

            return savedDocuments ? JSON.parse(savedDocuments) : []
            
      }),
      [medicalConditions, setMedicalConditions] = useState<string[]>(() =>{

            const savedMedicalConditions = localStorage.getItem(`medical-conditions-${patientID}`)

            return savedMedicalConditions ? JSON.parse(savedMedicalConditions) : []

      }),
      [allergies, setAllergies] = useState<string[]>(() =>{

            const savedAllergies = localStorage.getItem(`allergies-${patientID}`)

            return savedAllergies ? JSON.parse(savedAllergies) : []

      }),
      [medications, setMedications] = useState<string[]>(() =>{
            
            const savedMedications = localStorage.getItem(`medications-${patientID}`)

            return savedMedications ? JSON.parse(savedMedications) : []

      }),
      [surgeries, setSurgeries] = useState<string[]>(() =>{

            const savedSurgeries = localStorage.getItem(`surgeries-${patientID}`)

            return savedSurgeries ? JSON.parse(savedSurgeries) : []

      })


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



      const addNote = (note: Omit<NoteType, "_id">) =>{
    
            const newNote ={
    
                _id: uuid(),
                ...note,
                date: new Date()
    
            }
    
            const updatedNotes = [newNote, ...notes]

            setNotes(updatedNotes)
    
            localStorage.setItem(`notes-${patientID}`, JSON.stringify(updatedNotes))
        
      }

      const removeNote = (id: string) =>{
    
            const updatedNotes = notes.filter(note => note._id !== id)
     
            setNotes(updatedNotes)
     
            localStorage.setItem(`notes-${patientID}`, JSON.stringify(updatedNotes))
         
      }

      const updateNote = (updatedNote: NoteType) =>{
      
         const updatedNotes = notes.map(note => note._id === updatedNote._id ? {...note, ...updatedNote } : note)
    
         setNotes(updatedNotes)
    
         localStorage.setItem(`notes-${patientID}`, JSON.stringify(updatedNotes))
      
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

      const addMedicalCondition = (condition: string) =>{
      
         const updatedConditions = [condition, ...medicalConditions]

         localStorage.setItem(`medicalConditions-${patientID}`, JSON.stringify(updatedConditions))

         setMedicalConditions(updatedConditions)
      
      }

      const removeMedicalCondition = (index: number) =>{

            const updatedConditions = medicalConditions.filter((_, i) => i !== index)

            localStorage.setItem(`medicalConditions-${patientID}`, JSON.stringify(updatedConditions))

            setMedicalConditions(updatedConditions)
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

      const updateMedicalConditions = (index: number, condition: string) =>{

            const updatedMedicalConditions = [...medicalConditions]

            updatedMedicalConditions[index] = condition
            
            setMedicalConditions(updatedMedicalConditions)

            localStorage.setItem(`medicalConditions-${patientID}`, JSON.stringify(updatedMedicalConditions))
      
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
            scheduleAppointment: () => {},
            cancelAppointment: () => {},
            rescheduleAppointment,
            patientDetails,
            setPatientDetails,
            updateAppointmentStatus,
            patientID,
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