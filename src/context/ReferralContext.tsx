import { createContext, useContext, useState } from "react"
import { ReferralContextProps } from "../assets/contextProps/ReferralContextProps"
import { ReferralUrgency, SpecialityType } from "../assets/types/ReferralType"

interface ReferralContextProviderProps{

    children: React.ReactNode

}

export const ReferralContext = createContext<ReferralContextProps | undefined>(undefined)

export const ReferralContextProvider:React.FC<ReferralContextProviderProps> = ({ children })=>{

    const [recipientName, setRecipientName] = useState(''),
          [recipientEmail, setRecipientEmail] = useState(''),
          [recipientPhone, setRecipientPhone] = useState(''),
          [recipientHospital, setRecipientHospital] = useState(''),
          [recipientHospitalLocation, setRecipientHospitalLocation] = useState(''),
          [speciality, setSpeciality] = useState<SpecialityType>(null),
          [clinicalReason, setClinicalReason] = useState(''),
          [urgency, setUrgency] = useState<ReferralUrgency>(null),
          [loading, setLoading] = useState(false)

    const contextValue: ReferralContextProps ={

        recipientName,
        setRecipientName,
        recipientEmail,
        setRecipientEmail,
        recipientPhone,
        setRecipientPhone,
        recipientHospital,
        setRecipientHospital,
        recipientHospitalLocation,
        setRecipientHospitalLocation,
        speciality,
        setSpeciality,
        clinicalReason,
        setClinicalReason,
        urgency,
        setUrgency,
        loading,
        setLoading

    }

    return(

        <ReferralContext.Provider value={contextValue}>

            {children}

        </ReferralContext.Provider>

    )

}

export const useReferralContext = () =>{

    const context = useContext(ReferralContext)

    if(!context) throw new Error('useReferralContext must be used within ReferralContextProvider')

    return context

}