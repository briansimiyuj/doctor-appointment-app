import { useContext } from "react"
import { useModalContext } from "../../../../../../context/ModalContext"
import { ProfileContext } from "../../../../../../context/ProfileContext"
import AlternativeInput from "./AlternativeInput"
import ConfirmationCheckBox from "./ConfirmationCheckBox"
import ReasonInput from "./ReasonInput"

const ModalBody: React.FC = ()=>{

    const { appointment } = useModalContext(),
          profileContext = useContext(ProfileContext)

    if(!profileContext) return null

    const { profile } = profileContext

    console.log(profile?.type)
 
    return(

        <div className="mb-4">

            <p className="mb-2 text-gray-700">

                Are you sure you want to cancel the appointment on <span className="font-medium">{appointment?.date.toString().split("T")[0]}</span> at <span className="font-medium">{appointment?.time}</span>?

            </p>

            {

                profile?.type === "doctor" &&(

                    <>
                    
                        <ReasonInput/>
            
                        <AlternativeInput/>
                    
                    </>
                    
                )
                    
            }


            <ConfirmationCheckBox/>

        </div>

    )

}

export default ModalBody