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
import { updateAppointmentStatusInFirebase } from "../firebase/firebaseApi"
import { useToast } from "../hooks/useToast"
import { collection, query, getDocs, orderBy, onSnapshot } from "firebase/firestore"
import { db } from "../firebaseConfig"

interface PatientDetailsProviderProps{
    
  children: React.ReactNode

}

export const PatientDetailsContext = createContext<PatientDetailsContextProps | undefined>(undefined)

export const PatientDetailsProvider: React.FC<PatientDetailsProviderProps> = ({ children }) =>{

      const [patientDetails, setPatientDetails] = useState<AppointedPatientType | null>(null), 
            { profile } = useProfileContext(),
            [activeTab, setActiveTab] =  useState<"medical-history" | "appointments" | "prescriptions" | "notes" | "documents">("notes"),
            { appointmentID = "" } = useParams<{ appointmentID: string }>(),
            { patientID = "" } = useParams<{ patientID: string }>(),
            { appointments } = useContext(AppointmentsContext),
            { appointedPatients } = useContext(BookingContext),
            { showToast } = useToast(),
            [patientAppointments, setPatientAppointments] = useState<AppointmentType[]>([]),
            [notes, setNotes] = useState<NoteType[]>([]),
            [documents, setDocuments] = useState<DocumentType[]>([]),
            [medicalConditions, setMedicalConditions] = useState<string[]>([]),
            [allergies, setAllergies] = useState<string[]>([]),
            [medications, setMedications] = useState<string[]>([]),
            [surgeries, setSurgeries] = useState<string[]>([]),
            [prescriptions, setPrescriptions] = useState<PrescriptionType[]>([]),
            [loading, setLoading] = useState<boolean>(false)      

      useEffect(() => {
      
            if(appointmentID && appointments && appointments.length > 0){

                  const foundAppointment = appointments.find(app => app._id === appointmentID)

                  if(profile?.type === "doctor"){

                        if(foundAppointment){

                              const patientID = foundAppointment.patient.patientInfo?._id

                              setPatientDetails(foundAppointment.patient)

                              setPatientAppointments([foundAppointment])

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

                        if(foundAppointment) setPatientAppointments([foundAppointment])

                  }

            }

      }, [appointments, appointedPatients, appointmentID])

      useEffect(() =>{

            const fetchPrescriptions = async() =>{

                  if(!appointmentID) return

                  try{

                        setLoading(true)

                        const prescriptionsRef = collection(db, "appointments", appointmentID, "prescriptions"),
                              prescriptionsQuery = query(prescriptionsRef, orderBy("createdAt", "desc")),
                              querySnapshot = await getDocs(prescriptionsQuery),
                              fetchedPrescriptions: PrescriptionType[] = []

                        querySnapshot.forEach((doc) =>{

                              fetchedPrescriptions.push({

                                    ...doc.data() as PrescriptionType,
                                    _id: doc.id

                              })

                        })

                        setPrescriptions(fetchedPrescriptions)

                  }catch(err){

                        console.error("Error fetching prescriptions:", err)

                        showToast("Failed to load prescriptions", "error")

                  }finally{

                        setLoading(false)

                  }

            }

            if(!appointmentID) return

            setLoading(true)

            const notesRef = collection(db, "appointments", appointmentID, "generalNotes"),
                  notesQuery = query(notesRef, orderBy("date", "desc"))
                  
            const unsubscribeNotes = onSnapshot(notesQuery, (querySnapshot) =>{

                  const fetchedNotes: any[] = []

                  querySnapshot.forEach(doc =>{

                        fetchedNotes.push({

                              ...doc.data() as NoteType,
                              _id: doc.id
                              
                        })
                  })

                  setNotes(fetchedNotes)

                  setLoading(false)
                    
            }, (err) => {
                
                console.error("Error fetching general notes:", err)

                showToast("Failed to load general notes", "error")
                
                setLoading(false)

            })
            
            fetchPrescriptions()

            return () => unsubscribeNotes()

      }, [appointmentID])

      const fetchPatientAppointments = (patientID: string) =>{

            if(appointments){

                  const filteredAppointments = appointments.filter(appointment => appointment.patient.patientInfo._id === patientID)

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

            const newNote = { _id: uuid(), ...note, date: new Date() },
                  updatedNotes = [newNote, ...notes]

            setNotes(updatedNotes)

      }

      const removeNote = (id: string) =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo?._id,
                  updatedNotes = notes.filter(note => note._id !== id)

            setNotes(updatedNotes)

            localStorage.setItem(`notes-${patientID}`, JSON.stringify(updatedNotes))

      }

      const updateNote = (updatedNote: NoteType) =>{

            if(!patientDetails) return

            const updatedNotes = notes.map(note => note._id === updatedNote._id ? {...note, ...updatedNote } : note)

            setNotes(updatedNotes)


      }

      const updateAppointmentStatus = async(appointment: AppointmentType, newStatus: "pending" | "completed" | "cancelled" | "confirmed" | "approved" | "rescheduled" | "rejected" | "follow-up") =>{

            if(!patientDetails) return

            const appointmentIndex = patientAppointments.findIndex(appt => appt._id === appointment._id)

            if(appointmentIndex === -1) return

            const originalAppointments: AppointmentType[] = [...patientAppointments]
            
            setPatientAppointments(prevAppointments =>{

                  const updatedAppointments = [...prevAppointments]

                  updatedAppointments[appointmentIndex] = {...appointment, status: newStatus}

                  return updatedAppointments

            })

            try{

                  await updateAppointmentStatusInFirebase(newStatus, appointment._id)

                  showToast("Appointment status updated successfully", "success")

            }catch(err){

                  console.error("Error updating appointment status in Firebase: ", err)

                  setPatientAppointments(originalAppointments)

                  showToast("Error updating appointment status", "error")

            }

      }

      const updateAppointmentDataAndStatus = async(
            appointment: AppointmentType,
            newStatus: "cancelled" | "rejected",
            reason: string,
            alternative: string | null = null
      ) =>{
      
            if(!patientDetails) return

            const appointmentIndex = patientAppointments.findIndex(a => a._id === appointment._id)

            if(appointmentIndex === -1) return

            const originalAppointments: AppointmentType[] = [...patientAppointments]

            setPatientAppointments(prevAppointments =>{

                  const updatedAppointments = [...prevAppointments],
                        reasonFields = newStatus === "cancelled" ?  
                              { cancellationReason: reason, cancellationAlternative: alternative } :
                              { rejectionReason: reason, rejectionAlternative: alternative }

                  updatedAppointments[appointmentIndex] ={

                        ...appointment,
                        status: newStatus,
                        ...reasonFields
                        
                  }

                  localStorage.setItem(`appointments-${patientID}`, JSON.stringify(updatedAppointments))

                  return updatedAppointments
                  
            })

            try{

                  await updateAppointmentStatusInFirebase(newStatus, appointment._id, reason, alternative) 

                  showToast("Appointment status updated successfully", "success")

            }catch(err){

                  console.error("Error updating appointment status: ", err)

                  setPatientAppointments(originalAppointments)

                  showToast("Error updating appointment status", "error")

            }
      
      }

      const rescheduleAppointment = (appointment: AppointmentType, newDate: Date, newTime: string, newDoctor: DoctorType, newConsultationType: "online" | "in-person") =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo?._id
            
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

            const patientID = patientDetails.patientInfo?._id,
                 updatedConditions = [condition, ...medicalConditions]

            setMedicalConditions(updatedConditions)

            localStorage.setItem(`medicalConditions-${patientID}`, JSON.stringify(updatedConditions))

      }

      const removeMedicalCondition = (index: number) =>{

            if(!patientDetails) return

            const patientID = patientDetails.patientInfo?._id,
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
            loading,
            setLoading,
            addDocument,
            removeDocument,
            rescheduleAppointment,
            patientDetails,
            setPatientDetails,
            updateAppointmentStatus,
            updateAppointmentDataAndStatus,
            prescriptions,
            addPrescription,
            removePrescription,
            updatePrescription,
            patientID: patientDetails?.patientInfo?._id || "",
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