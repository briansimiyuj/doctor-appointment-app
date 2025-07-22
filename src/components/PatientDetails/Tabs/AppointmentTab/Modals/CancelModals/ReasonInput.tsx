import { useModalContext } from "../../../../../../context/ModalContext"

const ReasonInput: React.FC = ()=>{

    const { reason, setReason } = useModalContext()

    return(

        <div className="mb-4">

            <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Reason for cancellation:</label>

            <textarea
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                rows={4}
                placeholder="Please provide a reason for cancellation"
                value={reason}
                onChange={e => setReason(e.target.value)}
            />


            {

                reason.trim() === '' &&(

                    <p className="text-red-500 text-sm mt-1">Reason is required</p>

                )

            }

        </div>

    )

}

export default ReasonInput