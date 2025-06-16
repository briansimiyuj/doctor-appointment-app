import { useEffect, useState } from "react"
import { usePatientDetails } from "../../../../../../../context/PatientDetailsContext"
import { RejectionData } from "../../../../../../../assets/types/RejectionData"

const ReasonAlt: React.FC = ()=>{

    const { patientDetails } = usePatientDetails(),
          [rejectionData, setRejectionData] = useState<Record<string, RejectionData> | null>(null)  

    useEffect(() =>{
    
        if(patientDetails?.patientInfo?._id){

            const patientID = patientDetails.patientInfo._id,
                  storedReason = localStorage.getItem(`rejectionReason-${patientID}`)

            if(storedReason){

                try{

                    const parsedReason = JSON.parse(storedReason)

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

    return(

        <div className="mt-4">
        
            <h4 className="text-sm font-medium text-gray-700 mb-2">Reason</h4>

            <p className="text-sm text-gray-500">{reeason}</p>

            {

                alternative &&(

                    <div className="mt-2">

                        <h5 className="text-sm font-medium text-gray-700 mb-2">Alternative Suggestion</h5>

                        <p className="text-sm text-gray-500">{alternative}</p>

                    </div>

                )

            }
        
        </div>

    )

}

export default ReasonAlt