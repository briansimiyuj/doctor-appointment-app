import { useContext, useEffect, useState } from "react"
import { DoctorType } from "../../assets/types/DoctorType"
import { BookingContext } from "../../context/BookingContext"
import TopDoctorsCard from "../TopDoctors/TopDoctorsCard"
import { useDoctorContext } from "../../context/DoctorContext"

const RelatedDoctors: React.FC = ()=>{

    const { doctorID, doctorInfo } = useContext(BookingContext),
          { doctors } = useDoctorContext(),
          [relatedDoctors, setRelatedDoctors] = useState<DoctorType[]>([]) 

    
    useEffect(() =>{
    
        if(doctors.length > 0 && doctorInfo){

            const doctorsWithSameSpeciality = doctors.filter(doctor => doctor.speciality === doctorInfo.speciality && doctor._id !== doctorID)

            setRelatedDoctors(doctorsWithSameSpeciality)

        }
    
    }, [doctorID, doctorInfo?.speciality, doctors])


    return(

        <>
        
            <h1 className="text-center text-2xl font-bold my-5">Related Doctors</h1>


            <div className="flex flex-wrap justify-center gap-10">

                {

                    relatedDoctors.slice(0, 5).map((doctor, key) =>(

                        <div className="w-[250px]">

                            <TopDoctorsCard key={key} doctor={doctor}/>


                        </div>


                    ))

                }

            </div>
        
        </>

    )

}

export default RelatedDoctors