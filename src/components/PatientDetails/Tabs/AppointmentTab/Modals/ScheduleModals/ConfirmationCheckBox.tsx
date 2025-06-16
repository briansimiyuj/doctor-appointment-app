import { useScheduleAppointmentContext } from "../../../../../../context/ScheduleAppointmentContext"

const ConfirmationCheckBox: React.FC = ()=>{

    const { isConfirmed, setIsConfirmed } = useScheduleAppointmentContext()

    return(

        <div className="mb-6">

            <label htmlFor="checkbox" className="flex items-center">

                <input
                    className="form-checkbox h-5 w-5 text-primary-bg rounded"
                    type="checkbox"
                    checked={isConfirmed}
                    onChange={e => setIsConfirmed(e.target.checked)}
                />

                <span className="ml-2 text-gray-700">I confirm that I am scheduling this appointment.</span>

            </label>


            {

                !isConfirmed &&(

                    <p className="text-red-500 text-sm mt-1">Please confirm scheduling</p>

                )

            }

        </div>

    )

}

export default ConfirmationCheckBox