import { useSettings } from "../context/SettingsContext"

export const useSettingsManagement = () =>{

    const { consultationSettings, updateConsultationSettings, availabilitySettings, updateAvailabilitySettings, notificationSettings, updateNotificationSettings, isChanged, setIsChanged } = useSettings()


    const handleSettingsUpdate = () =>{
    
        if(isChanged){

            localStorage.setItem("doctorSettings", JSON.stringify({ consultationSettings, availabilitySettings, notificationSettings }))

            setIsChanged(false)

            console.log("Settings updated")

        }
    
    }


    const handleConsultationUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{

        const { name, value } = e.target,
                newSettings ={

                    ...consultationSettings,
                    [name]: value

                }

        updateConsultationSettings(newSettings)

    }


    const handleAvailabilityUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...availabilitySettings,
                    [name]: checked
                    
                }

        updateAvailabilitySettings(newSettings)

    }


    const handleNotificationUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...notificationSettings,
                    [name]: checked

                }

        updateNotificationSettings(newSettings)

    }


    return{

        handleConsultationUpdate,
        handleAvailabilityUpdate,
        handleNotificationUpdate,
        isChanged,
        handleSettingsUpdate

    }

}
