import { useState } from "react"
import { useSettings } from "../context/SettingsContext"

export const useSettingsManagement = () =>{

    const { consultationSettings, updateConsultationSettings, availabilitySettings, updateAvailabilitySettings, notificationSettings, updateNotificationSettings, isChanged, setIsChanged } = useSettings(),
          [initialSettings] = useState({ consultationSettings, availabilitySettings, notificationSettings })


    const handleSettingsUpdate = () =>{
    
        if(isChanged){

            localStorage.setItem("doctorSettings", JSON.stringify({ consultationSettings, availabilitySettings, notificationSettings }))

            setIsChanged(false)

            console.log("Settings updated")

        }
    
    }



    const checkIfChanged = (newSettings: any) =>{
    
       const hasChanges = JSON.stringify(newSettings) !== JSON.stringify(initialSettings)

       setIsChanged(hasChanges)
    
    }


    const handleConsultationUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{

        const { name, value, type } = e.target,
              parsedValue = type === "number" ? parseFloat(value) : value,
                newSettings ={

                    ...consultationSettings,
                    [name]: parsedValue

                }
                
        console.log('New consultation settings:', newSettings.currency)

        updateConsultationSettings(newSettings)

        console.log('Consultation settings updated:', value)

        checkIfChanged({ ...initialSettings, consultationSettings: newSettings })

    }


    const handleAvailabilityUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...availabilitySettings,
                    [name]: checked
                    
                }

        updateAvailabilitySettings(newSettings)

        console.log('Availability settings updated:', checked)

        checkIfChanged({ ...initialSettings, availabilitySettings: newSettings })

    }


    const handleNotificationUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...notificationSettings,
                    [name]: checked

                }

        updateNotificationSettings(newSettings)

        console.log('Notification settings updated:', checked)

        checkIfChanged({ ...initialSettings, notificationSettings: newSettings })

    }


    return{

        handleConsultationUpdate,
        handleAvailabilityUpdate,
        handleNotificationUpdate,
        isChanged,
        handleSettingsUpdate

    }

}
