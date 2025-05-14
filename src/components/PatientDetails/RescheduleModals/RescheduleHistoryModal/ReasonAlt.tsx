import { useEffect, useState } from "react"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import { RejectionData } from "../../../../assets/types/RejectionData"

const ReasonAlt: React.FC = ()=>{

    const { patientDetails } = usePatientDetails(),
          [rejectionData, setRejectionData] = useState<Record<string, RejectionData> | null>(null)  

    useEffect(() =>{
    
        if(patientDetails?.patientInfo?._id){

            const patientID = patientDetails.patientInfo._id,
                  storedReason = localStorage.getItem(`rejectionReason-${patientID}`)

            console.log('Stored rejection reason:', storedReason)

            if(storedReason){

                try{

                    const parsedReason = JSON.parse(storedReason)
                    
                    console.log('Parsed rejection reason:', parsedReason)

                    setRejectionData(parsedReason)


                }catch(error){

                    console.error('Error parsing rejection reason:', error)

                }

            }

        }
    
    }, [patientDetails])

    if(!rejectionData || Object.keys(rejectionData).length === 0) return null

    const appointmentKeys = Object.keys(rejectionData),
          latestRejection = rejectionData[appointmentKeys[0]],  
          reeason = latestRejection.reason,
          alternative = latestRejection.alternative

    console.log('Latest rejection reason:', reeason)
    console.log('Latest rejection alternative:', alternative)

    return(

        <h1>ReasonAlt</h1>

    )

}

export default ReasonAlt