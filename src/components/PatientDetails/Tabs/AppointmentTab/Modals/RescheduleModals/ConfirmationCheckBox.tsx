import { useRescheduleModal } from "../../../../../../context/RescheduleModalContext"

const ConfirmationCheckBox: React.FC = ()=>{

    const { isConfirmed, setIsConfirmed } = useRescheduleModal()

    return(

        <div className="mb-6">

            <label htmlFor="checkbox" className="flex items-center">

                <input
                    className="form-checkbox h-5 w-5 text-primary-bg rounded cursor-pointer"
                    type="checkbox"
                    checked={isConfirmed}
                    onChange={e => setIsConfirmed(e.target.checked)}
                />

                <span className="ml-2 text-gray-700">I understand that rescheduling this appointment may affect the patient's care plan.</span>

            </label>

            {

                !isConfirmed &&(

                    <p className="text-red-500 text-sm mt-1">Please confirm rescheduling</p>

                )
                
            }

        </div>

    )

}

export default ConfirmationCheckBox