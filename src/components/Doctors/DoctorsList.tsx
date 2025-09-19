import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DoctorType } from "../../assets/types/DoctorType"
import DoctorCard from "./DoctorCard"
import { useDoctorContext } from "../../context/DoctorContext"

const DoctorsList: React.FC = ()=>{

    const { specialityParam } = useParams(),
          { doctors } = useDoctorContext(),
          [filterDoctors, setFilterDoctors] = useState<Array<DoctorType>>([])

    console.log(doctors)

    const applyFilter = () =>{
    
        if(specialityParam){

            setFilterDoctors(doctors.filter(doctor => doctor.speciality === specialityParam))

        }else{

            setFilterDoctors(doctors)
        
        }
    
    }


    useEffect(() =>{
    
       applyFilter()
    
    }, [doctors, specialityParam])

    return(

        <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6">

            {

                filterDoctors.map((doctor, index) =>(

                    <DoctorCard 
                        key={index} 
                        doctor={{
                            ...doctor,
                            isAvailable: index % 2 === 0 ? true : false
                        }}
                    />

                ))

            }

        </div>

    )

}

export default DoctorsList