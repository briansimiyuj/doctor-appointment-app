import { createContext, useContext, useState } from "react"
import { AddNotesContextProps } from "../assets/contextProps/AddNotesContextProps"
import { AppointmentNoteType } from "../assets/types/AppointmentNoteType"

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
            [appointmentNotes, setAppointmentNotes] = useState<AppointmentNoteType[]>(() =>{

              const savedNotes = localStorage.getItem("appointmentNotes")

              return savedNotes ? JSON.parse(savedNotes) : []

            })

    const addAppointmentNotes = (note: AppointmentNoteType) =>{

        const updatedNotes = [...appointmentNotes, note]

        setAppointmentNotes(updatedNotes)

        localStorage.setItem("appointmentNotes", JSON.stringify(updatedNotes))

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
        resetForm

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