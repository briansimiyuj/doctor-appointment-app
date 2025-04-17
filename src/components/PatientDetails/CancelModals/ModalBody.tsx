import { useUpdatePatientDetails } from "../../../hooks/useUpdatePatientDetails"

const ModalBody: React.FC = ()=>{

    const { appointmentToCancel } = useUpdatePatientDetails(),
          appointment = appointmentToCancel

    console.log(appointment)

    return(

        <div className="mb-4">

            <p className="mb-2 text-gray-700">

                Are you sure you want to cancel the appointment on <span className="font-medium">{appointment?.date}</span> at <span className="font-medium">{appointment?.time}</span>?

            </p>


            <div className="mt-4">
            
                <label className="block text-gray-700 font-medium mb-2">Reason for Cancellation</label>

                <textarea
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                    placeholder="Enter reason for cancellation"
                    rows={4}
                />
            
            </div> 

        </div>

    )

}

export default ModalBody