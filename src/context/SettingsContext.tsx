import { createContext, useContext, useState, useEffect } from "react"
import { AvailabilitySettings, ConsultationSettings, NotificationSettings, SettingsContextProps } from "../assets/contextProps/SettingsContextProps"
import { dummySettingsData } from "../assets/dummyData/dummySettingsData"
import { useProfileContext } from "./ProfileContext"
import { db } from "../firebaseConfig"
import { doc, getDoc, setDoc } from "firebase/firestore"

const SettingsContext = createContext<SettingsContextProps | null>(null)

export const SettingsProvider = ({ children }: { children: React.ReactNode }) =>{

    const { profile } = useProfileContext(),
        [consultationSettings, setConsultationSettings] = useState<ConsultationSettings>(dummySettingsData.consultationSettings),
        [availabilitySettings, setAvailabilitySettings] = useState<AvailabilitySettings>(dummySettingsData.availabilitySettings),
        [notificationSettings, setNotificationSettings] = useState<NotificationSettings>(dummySettingsData.notificationSettings),
        [isChanged, setIsChanged] = useState(false),
        [isLoading, setIsLoading] = useState(false)


    useEffect(() =>{

        const fetchSettingsFromFirebase = async() =>{

            if(!profile?._id) return

            setIsLoading(true)

            try{

                const settingsRef = doc(db, "userSettings", profile._id),
                      settingsDoc = await getDoc(settingsRef)

                if(settingsDoc.exists()){

                    const data = settingsDoc.data()

                    if(profile.type === "doctor"){

                        if(data.consultationSettings){
                            
                            setConsultationSettings(data.consultationSettings)
                            
                        }

                        if(data.availabilitySettings){
                            
                            setAvailabilitySettings(data.availabilitySettings)
                            
                        }

                    }

                    if(data.notificationSettings){
                        
                        setNotificationSettings(data.notificationSettings)
                        
                    }

                }else{

                    console.log("No settings found, using defaults")

                }

            }catch(error){

                console.error("Error fetching settings from Firebase:", error)

            }finally{

                setIsLoading(false)

            }

        }

        fetchSettingsFromFirebase()

    }, [profile?._id, profile?.type])


    const updateConsultationSettings = (settings: ConsultationSettings) =>{

        setConsultationSettings(settings)

    }
    
    const updateAvailabilitySettings = (settings: AvailabilitySettings) =>{

        setAvailabilitySettings(settings)
        
    }

    const updateNotificationSettings = (settings: NotificationSettings) =>{

        setNotificationSettings(settings)

    }

    const handlePrescriptionReminderToggle = async(prescriptionID: string) =>{

        if(!profile?._id) return

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

        try{

            const settingsRef = doc(db, "userSettings", profile._id)

            await setDoc(settingsRef, {

                notificationSettings: newNotificationSettings,
                userType: "patient",
                updatedAt: new Date().toISOString(),
                updatedBy: profile._id

            }, { merge: true })

        }catch(error){

            console.error("Error updating prescription reminder:", error)

        }
        
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
        handlePrescriptionReminderToggle,
        isLoading

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