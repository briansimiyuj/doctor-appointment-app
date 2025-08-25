import { useContext } from "react"
import { useModalContext } from "../../../../../../context/ModalContext"
import { ProfileContext } from "../../../../../../context/ProfileContext"

const ConfirmationCheckBox: React.FC = ()=>{

    const { isConfirmed, setIsConfirmed } = useModalContext(),
          profileContext = useContext(ProfileContext)

    if(!profileContext) return null

    const { profile } = profileContext

    return(

        <div className="mb-6">

            <label htmlFor="checkbox" className="flex items-center">

                <input
                    className="form-checkbox h-5 w-5 text-primary-bg rounded"
                    type="checkbox"
                    checked={isConfirmed}
                    onChange={e => setIsConfirmed(e.target.checked)}
                />

                {

                    profile?.type === "doctor" ?(

                        <span className="ml-2 text-gray-700">I understand that cancelling this appointment may affect the patient's care plan.</span>

                    ):(

                        <span className="ml-2 text-gray-700">Are you sure you want to cancel this appointment?</span>

                    )

                }


            </label>


            {

                !isConfirmed &&(

                    <p className="text-red-500 text-sm mt-1">Please confirm cancellation</p>

                )

            }

        </div>

    )

}

export default ConfirmationCheckBox