import { createContext, useContext, useState } from "react"
import { AvailabilitySettings, ConsultationSettings, NotificationSettings, SettingsContextProps } from "../assets/contextProps/SettingsContextProps"
import { dummySettingsData } from "../assets/dummySettingsData"
import { LoginContext } from "./LoginContext"

const SettingsContext = createContext<SettingsContextProps | null>(null)

export const SettingsProvider = ({ children }: { children: React.ReactNode }) =>{

    const loginContext = useContext(LoginContext)

    if(!loginContext) throw new Error('Login context not found')

    const { userType } = loginContext

    const [consultationSettings, setConsultationSettings] = useState<ConsultationSettings>(() =>{

        const savedSettings = localStorage.getItem("doctorSettings")

        return savedSettings ? JSON.parse(savedSettings).consultationSettings : dummySettingsData.consultationSettings

    })
    const [availabilitySettings, setAvailabilitySettings] = useState<AvailabilitySettings>(() =>{

        const savedSettings = localStorage.getItem("doctorSettings")

        return savedSettings ? JSON.parse(savedSettings).availabilitySettings : dummySettingsData.availabilitySettings

    })
    const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(() =>{

        const savedSettings = localStorage.getItem("doctorSettings"),
              baseSettings = savedSettings ? JSON.parse(savedSettings).notificationSettings : dummySettingsData.notificationSettings

        if(userType === "doctor") return baseSettings

        const { ...patientSettings } = baseSettings

        return patientSettings

    }),
          [isChanged, setIsChanged] = useState(false)


    const updateConsultationSettings = (settings: ConsultationSettings) =>{

        setConsultationSettings(settings)

    }
    
    const updateAvailabilitySettings = (settings: AvailabilitySettings) =>{

        setAvailabilitySettings(settings)
        
    }

    const updateNotificationSettings = (settings: NotificationSettings) =>{

        setNotificationSettings(settings)

    }


    
    return(

        <SettingsContext.Provider
            value={{
                consultationSettings,
                availabilitySettings,
                notificationSettings,
                updateConsultationSettings,
                updateAvailabilitySettings,
                updateNotificationSettings,
                isChanged,
                setIsChanged
            }}
        >
          
            {children}

        </SettingsContext.Provider>

    )

}


export const useSettings = () =>{

    const context = useContext(SettingsContext)

    if(!context) throw new Error('Settings context not found')

    return context

}