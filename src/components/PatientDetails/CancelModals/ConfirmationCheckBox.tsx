import { useModalContext } from "../../../context/ModalContext"

const ConfirmationCheckBox: React.FC = ()=>{

    const { isConfirmed, setIsConfirmed } = useModalContext()

    return(

        <div className="mb-6">

            <label htmlFor="checkbox" className="flex items-center">

                <input
                    className="form-checkbox h-5 w-5 text-primary-bg rounded"
                    type="checkbox"
                    checked={isConfirmed}
                    onChange={e => setIsConfirmed(e.target.checked)}
                />

                <span className="ml-2 text-gray-700">I understand that cancelling this appointment may affect the patient's care plan.</span>

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