import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { DoctorType } from "../../assets/DoctorType"
import { doctors } from "../../assets/frontend/assets"

const DoctorsList: React.FC = ()=>{

    const { specialityParam } = useParams(),
          [filterDoctors, setFilterDoctors] = useState<Array<DoctorType>>([])


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



        </div>

    )

}

export default DoctorsList