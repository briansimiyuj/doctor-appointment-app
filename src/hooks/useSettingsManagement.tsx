import { useState } from "react"
import { useSettings } from "../context/SettingsContext"
import { db } from "../firebaseConfig"
import { doc, setDoc } from "firebase/firestore"
import { useToast } from "./useToast"
import { useProfileContext } from "../context/ProfileContext"

export const useSettingsManagement = () =>{

    const { consultationSettings, updateConsultationSettings, availabilitySettings, updateAvailabilitySettings, notificationSettings, updateNotificationSettings, isChanged, setIsChanged } = useSettings(),
          { profile } = useProfileContext(),
          { showToast } = useToast(),
          [initialSettings] = useState({ consultationSettings, availabilitySettings, notificationSettings }),
          [isSaving, setIsSaving] = useState(false)


    const handleSettingsUpdate = async() =>{
    
        if(!isChanged || !profile?._id){

            return

        }

        setIsSaving(true)

        try{

            const settingsRef = doc(db, "userSettings", profile._id),
                  isDoctor = profile.type === "doctor"

            const settingsToSave = isDoctor ?{

                consultationSettings,
                availabilitySettings,
                notificationSettings,
                userType: "doctor",
                updatedAt: new Date().toISOString(),
                updatedBy: profile._id

            }:{

                notificationSettings,
                userType: "patient",
                updatedAt: new Date().toISOString(),
                updatedBy: profile._id

            }

            await setDoc(settingsRef, settingsToSave)

            setIsChanged(false)

            showToast("Settings updated successfully", "success")

        }catch(error){

            console.error("Error updating settings:", error)

            showToast("Error updating settings", "error")

        }finally{

            setIsSaving(false)

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
                

        updateConsultationSettings(newSettings)

        checkIfChanged({ ...initialSettings, consultationSettings: newSettings })

    }


    const handleAvailabilityUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...availabilitySettings,
                    [name]: checked
                    
                }

        updateAvailabilitySettings(newSettings)

        checkIfChanged({ ...initialSettings, availabilitySettings: newSettings })

    }


    const handleNotificationUpdate = (e: React.ChangeEvent<HTMLInputElement>) =>{

        const { name, checked } = e.target,
                newSettings ={

                    ...notificationSettings,
                    [name]: checked

                }

        updateNotificationSettings(newSettings)

        checkIfChanged({ ...initialSettings, notificationSettings: newSettings })

    }


    return{

        handleConsultationUpdate,
        handleAvailabilityUpdate,
        handleNotificationUpdate,
        isChanged,
        handleSettingsUpdate,
        isSaving

    }

}