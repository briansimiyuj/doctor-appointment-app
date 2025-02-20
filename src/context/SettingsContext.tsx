import { createContext, useContext, useState } from "react"
import { AvailabilitySettings, ConsultationSettings, NotificationSettings, SettingsContextProps } from "../assets/contextProps/SettingsContextProps"
import { dummySettingsData } from "../assets/dummySettingsData"

const SettingsContext = createContext<SettingsContextProps | null>(null)

export const SettingsProvider = ({ children }: { children: React.ReactNode }) =>{

    const [consultationSettings, setConsultationSettings] = useState<ConsultationSettings>(dummySettingsData.consultationSettings),
          [availabilitySettings, setAvailabilitySettings] = useState<AvailabilitySettings>(dummySettingsData.availabilitySettings),
          [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(dummySettingsData.notificationSettings),
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