import { createContext, useContext, useState } from "react"
import { AvailabilitySettings, ConsultationSettings, NotificationSettings, SettingsContextProps } from "../assets/contextProps/SettingsContextProps"
import { dummySettingsData } from "../assets/dummyData/dummySettingsData"
import { useProfileContext } from "./ProfileContext"
import { usePatientDetails } from "./PatientDetailsContext"

const SettingsContext = createContext<SettingsContextProps | null>(null)

export const SettingsProvider = ({ children }: { children: React.ReactNode }) =>{

    const { profile } = useProfileContext(),
         { patientID } = usePatientDetails()

    const [consultationSettings, setConsultationSettings] = useState<ConsultationSettings>(() =>{

        const savedSettings = localStorage.getItem("doctorSettings")

        return savedSettings ? JSON.parse(savedSettings).consultationSettings : dummySettingsData.consultationSettings

    })
    const [availabilitySettings, setAvailabilitySettings] = useState<AvailabilitySettings>(() =>{

        const savedSettings = localStorage.getItem("doctorSettings")

        return savedSettings ? JSON.parse(savedSettings).availabilitySettings : dummySettingsData.availabilitySettings

    })
        
    const [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(() =>{

        if(profile?.type === "doctor"){

            const savedSettings = localStorage.getItem("doctorSettings")

            return savedSettings ? JSON.parse(savedSettings).notificationSettings : dummySettingsData.notificationSettings

        }else{

            const savedSettings = localStorage.getItem(`patientSettings-${patientID}`)

            return savedSettings ? JSON.parse(savedSettings).notificationSettings : dummySettingsData.notificationSettings

        }

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

    const handlePrescriptionReminderToggle = (prescriptionID: string) =>{

        const currentReminders = notificationSettings.prescriptionReminders || {},
              newValue = !currentReminders[prescriptionID],
              
            newNotificationSettings ={

                ...notificationSettings,
                prescriptionReminders:{

                    ...currentReminders,
                    [prescriptionID]: newValue

                }

            }

        updateNotificationSettings(newNotificationSettings)

        const savedSettings = JSON.parse(localStorage.getItem(`patientSettings-${patientID}`) || '{}')

        localStorage.setItem(`patientSettings-${patientID}`, JSON.stringify({ ...savedSettings, notificationSettings: newNotificationSettings }))
        
    }

    const value: SettingsContextProps ={

        consultationSettings,
        availabilitySettings,
        notificationSettings,
        updateConsultationSettings,
        updateAvailabilitySettings,
        updateNotificationSettings,
        isChanged,
        setIsChanged,
        handlePrescriptionReminderToggle

    }
    
    return(

        <SettingsContext.Provider
            value={value}
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