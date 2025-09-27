import { createContext, useContext, useEffect, useState } from "react"
import { DoctorContextProps } from "../assets/contextProps/DoctorContextProps"
import { DoctorType } from "../assets/types/DoctorType"
import { collection, doc, getDocs, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"

interface DoctorContextProviderProps{

    children: React.ReactNode

}

export const DoctorContext = createContext<DoctorContextProps | undefined>(undefined)

export const DoctorContextProvider:React.FC<DoctorContextProviderProps> = ({ children })=>{

    const [doctors, setDoctors] = useState<DoctorType[]>([])

    useEffect(() =>{
    
        const fetchDoctors = async () =>{

            try{

                const doctorsCollection = collection(db, "doctors"),
                    doctorsSnapshot = await getDocs(doctorsCollection),
                    doctorsList = doctorsSnapshot.docs.map(doc => doc.data() as DoctorType)

                setDoctors(doctorsList)

            }catch(error){

                console.log(error)

            }

        }

        fetchDoctors()
     
    }, [])

    useEffect(() =>{

        const saveDoctors = async () =>{

            if(doctors.length > 0){

                for (const doctor of doctors){

                    if(!doctor._id){

                        console.error("Error: Doctor without id")

                        continue

                    }

                    await setDoc(doc(db, "doctors", doctor._id), doctor)

                }

            }
        
        }

        saveDoctors()

    }, [doctors])

    const addDoctor = (doctor: DoctorType) =>{
    
       setDoctors([...doctors, doctor])
    
    }

    const updateDoctor = (id: string, updatedDoctor: DoctorType) =>{
    
       setDoctors(doctors.map((doctor) => doctor._id === id ? updatedDoctor : doctor))
    
    }

    const removeDoctor = (id: string) =>{

        setDoctors(doctors.filter((doctor) => doctor._id !== id))

    }

    const getDoctorByID = (id: string) =>{
    
       return doctors.find((doctor) => doctor._id === id)   
    
    }

    const getDoctorByName = (id: string, name: string) =>{
    
       return doctors.find((doctor) => doctor._id === id && doctor.name === name)   
    
    }

    const contextValue: DoctorContextProps ={

        doctors,
        addDoctor,
        updateDoctor,
        removeDoctor,
        getDoctorByID,
        getDoctorByName

    }

    return(

        <DoctorContext.Provider value={contextValue}>

            {children}

        </DoctorContext.Provider>

    )

}

export const useDoctorContext =()=>{

      const context = useContext(DoctorContext)

      if(!context)throw new Error('useDoctorContext must be used within DoctorContextProvider')

      return context

}