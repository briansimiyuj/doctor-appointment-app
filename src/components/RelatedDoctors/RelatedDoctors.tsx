    import { useContext, useEffect, useState } from "react"
import { DoctorType } from "../../assets/DoctorType"
import { BookingContext } from "../../context/BookingContext"
import { doctors } from "../../assets/frontend/assets"

const RelatedDoctors: React.FC = ()=>{

    const { doctorID, doctorInfo } = useContext(BookingContext),
          [relatedDoctors, setRelatedDoctors] = useState<DoctorType[]>([]) 

    
    useEffect(() =>{
    
        if(doctors.length > 0 && doctorInfo){

            const doctorsWithSameSpeciality = doctors.filter(doctor => doctor.speciality === doctorInfo.speciality && doctor._id !== doctorID)

            setRelatedDoctors(doctorsWithSameSpeciality)

        }
    
    }, [doctorID, doctorInfo?.speciality, doctors])


    console.log(relatedDoctors)

    return(

        <h1>RelatedDoctors</h1>

    )

}

export default RelatedDoctors