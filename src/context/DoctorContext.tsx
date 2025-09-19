import { createContext, useContext, useEffect, useState } from "react"
import { DoctorContextProps } from "../assets/contextProps/DoctorContextProps"
import { DoctorType } from "../assets/types/DoctorType"
import { doctorsList } from "../assets/frontend/doctorsData"

interface DoctorContextProviderProps{

    children: React.ReactNode

}

export const DoctorContext = createContext<DoctorContextProps | undefined>(undefined)

export const DoctorContextProvider:React.FC<DoctorContextProviderProps> = ({ children })=>{

    const [doctors, setDoctors] = useState<DoctorType[]>([])

    useEffect(() =>{
    
        const storedDoctors = localStorage.getItem("doctors")

        if(storedDoctors){

            try{

                const parsedDoctors = JSON.parse(storedDoctors) as DoctorType[]

                if(Array.isArray(parsedDoctors)){

                    setDoctors(parsedDoctors)

                }else{
                    
                    console.warn("Invalid doctors data in local storage")

                    localStorage.setItem("doctors", JSON.stringify([]))

                    setDoctors([])

                }

            }catch(error){
                
                console.error("Error parsing doctors data from local storage", error)

                localStorage.setItem("doctors", JSON.stringify([]))

                setDoctors([])

            }
            
        }else{

            setDoctors(doctorsList)

        }
     
    }, [])

    useEffect(() =>{
    
        if(doctors.length > 0){

            localStorage.setItem("doctors", JSON.stringify(doctors))

        }
    
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