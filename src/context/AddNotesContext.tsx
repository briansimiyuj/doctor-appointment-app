import { createContext, useContext, useState } from "react"
import { AddNotesContextProps } from "../assets/contextProps/AddNotesContextProps"
import { AppointmentNoteType } from "../assets/types/AppointmentNoteType"
import { collection, addDoc, getDocs, onSnapshot, Timestamp } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { useToast } from "../hooks/useToast"

interface AddNotesProviderProps{

    children: React.ReactNode

}

const AddNotesContext = createContext<AddNotesContextProps | undefined>(undefined)

export const AddNotesProvider: React.FC<AddNotesProviderProps> = ({ children }) =>{

    const [notes, setNotes] = useState<string>(''),
          [prescription, setPrescription] = useState<string>(''),
          [diagnosis, setDiagnosis] = useState<string>(''),
          [followUpDate, setFollowUpDate] = useState<string>(''),
          [isSubmitting, setIsSubmitting] = useState<boolean>(false),
          [loading, setLoading] = useState<boolean>(false),
          [appointmentNotes, setAppointmentNotes] = useState<AppointmentNoteType[]>([]),
          { showToast } = useToast()

    const fetchNotesForAppointment = async (appointmentID: string) =>{

        try{

            setLoading(true)

            const notesRef = collection(db, "appointments", appointmentID, "notes"),
                  snapshot = await getDocs(notesRef),
                  fetchedNotes = snapshot.docs.map(doc => ({
                ...doc.data(),
                _id: doc.id,
            })) as AppointmentNoteType[]

            setAppointmentNotes(fetchedNotes)
            
            return fetchedNotes

        }catch(error){

            console.error("Error fetching appointment notes:", error)

            showToast("Error fetching appointment notes", "error")

            return []

        }finally{

            setLoading(false)

        }

    }

    const subscribeToAppointmentNotes = (appointmentID: string) =>{

        try{

            const notesRef = collection(db, "appointments", appointmentID, "notes")

            const unsubscribe = onSnapshot(notesRef, (snapshot) =>{

                const updatedNotes = snapshot.docs.map(doc => ({
                    ...doc.data(),
                    _id: doc.id,
                })) as AppointmentNoteType[]

                setAppointmentNotes(updatedNotes)

            })

            return unsubscribe

        }catch(error){

            console.error("Error subscribing to appointment notes:", error)

            return () => {}

        }

    }

    const addAppointmentNotes = async (noteData: Omit<AppointmentNoteType, "_id">) =>{

        try{

            setIsSubmitting(true)

            const appointmentID = noteData.appointmentID,
                  notesRef = collection(db, "appointments", appointmentID, "notes")

            const docRef = await addDoc(notesRef, {
                ...noteData,
                createdAt: Timestamp.fromDate(new Date()),
                updatedAt: Timestamp.fromDate(new Date()),
            })

            const newNote: AppointmentNoteType ={

                ...noteData,
                _id: docRef.id,
                
            }

            setAppointmentNotes(prev => [...prev, newNote])

            showToast("Note added successfully", "success")

            return newNote

        }catch(error){

            console.error("Error adding appointment notes:", error)

            throw error

        }finally{

            setIsSubmitting(false)

        }

    }

    const getNotesForAppointment = (appointmentID: string) =>{
    
        return appointmentNotes.filter(note => note.appointmentID === appointmentID)
    
    }

    const resetForm = () =>{
    
       setNotes('')

       setPrescription('')

       setDiagnosis('')

       setFollowUpDate('')

       setIsSubmitting(false)
    
    }

    const contextValue: AddNotesContextProps ={

        notes,
        setNotes,
        prescription,
        setPrescription,
        diagnosis,
        setDiagnosis,
        followUpDate,
        setFollowUpDate,
        isSubmitting,
        setIsSubmitting,
        appointmentNotes,
        addAppointmentNotes,
        getAppointmentNotes: getNotesForAppointment,
        resetForm,
        fetchNotesForAppointment,
        subscribeToAppointmentNotes,
        loading

    }

    return(

        <AddNotesContext.Provider value={contextValue}>

            {children}

        </AddNotesContext.Provider>

    )

}

export const useAddNotes = () =>{

    const context = useContext(AddNotesContext)

    if(!context){

        throw new Error("useAddNotesContext must be used within a AddNotesProvider")

    }

    return context

}