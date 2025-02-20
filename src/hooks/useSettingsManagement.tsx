import { useSettings } from "../context/SettingsContext"

export const useSettingsManagement = () =>{

    const { consultationSettings, updateConsultationSettings, availabilitySettings, updateAvailabilitySettings, notificationSettings, updateNotificationSettings, isChanged } = useSettings()


    const handleConsultationUpdate = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>{

        const { name, value } = e.target,
                newSettings ={

                    ...consultationSettings,
                    [name]: value

                }

        console.log('Before update:', consultationSettings)
        console.log('New value:', value)
        console.log('New settings:', newSettings)

        updateConsultationSettings(newSettings)

    }


    const handleAvailabilityUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...availabilitySettings,
                    [name]: checked
                    
                }

        console.log('Before update:', availabilitySettings)
        console.log('New value:', checked)
        console.log('New settings:', newSettings)

        updateAvailabilitySettings(newSettings)

    }


    const handleNotificationUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...notificationSettings,
                    [name]: checked

                }

        console.log('Before update:', notificationSettings)
        console.log('New value:', checked)
        console.log('New settings:', newSettings)

        updateNotificationSettings(newSettings)

    }


    return{

        handleConsultationUpdate,
        handleAvailabilityUpdate,
        handleNotificationUpdate,
        isChanged

    }

}
