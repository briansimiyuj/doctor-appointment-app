import { createContext, useContext, useEffect, useState } from "react"
import { PatientDetailsContextProps } from "../assets/contextProps/PatientDetailsContextProps"
import { AppointedPatientType } from "../assets/types/AppointedPatientType"
import { AppointmentsContext } from "./AppointmentContext"
import { AppointmentType } from "../assets/types/AppointmentType"
import { BookingContext } from "./BookingContext"
import { useParams } from "react-router-dom"
import { DocumentType } from "../assets/types/DocumentType"
import { v4 as uuid } from "uuid"

interface PatientDetailsProviderProps{

    children: React.ReactNode

}

export const PatientDetailsContext = createContext<PatientDetailsContextProps | undefined>(undefined)

export const PatientDetailsProvider: React.FC<PatientDetailsProviderProps> = ({ children }) =>{

const [patientDetails, setPatientDetails] = useState<AppointedPatientType | null>(null), 
      [activeTab, setActiveTab] =  useState<"medical-history" | "appointments" | "prescriptions" | "notes" | "documents">("medical-history"),
      [patientAppointments, setPatientAppointments] = useState<AppointmentType[]>([]),
      { appointments } = useContext(AppointmentsContext),
      { appointedPatients } = useContext(BookingContext),
      { patientID } = useParams<{ patientID: string }>(),
      [documents, setDocuments] = useState<Array<{

            id: string
            name: string
            type: string
            uploadDate: Date
            uploadedBy: string

      }>>([])


      const fetchPatientAppointments = (patientID: string) =>{

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
      
            const newDocument ={

                  id: uuid(),
                  ...document

            }

            setDocuments(prevDocuments => [...prevDocuments, newDocument])

            localStorage.setItem(`documents-${patientID}`, JSON.stringify([...documents, newDocument]))
      
      }


      const removeDocument = (index: string) =>{
      
         const updatedDocuments = documents.filter(document => document.id !== index)

         setDocuments(updatedDocuments)

         localStorage.setItem(`documents-${patientID}`, JSON.stringify(updatedDocuments))
      
      }


      const value ={

            activeTab,
            setActiveTab,
            patientAppointments,
            setPatientAppointments,
            fetchPatientAppointments,
            notes: [],
            addNote: () => {},
            removeNote: () => {},
            addMedicalCondition: () => {},
            removeMedicalCondition: () => {},
            addAllergy: () => {},
            removeAllergy: () => {},
            addMedication: () => {},
            removeMedication: () => {},
            addSurgery: () => {},
            removeSurgery: () => {},
            documents: [],
            addDocument: () => {},
            removeDocument: () => {},
            updatePatientStatus: () => {},
            scheduleAppointment: () => {},
            cancelAppointment: () => {},
            patientDetails,
            setPatientDetails

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