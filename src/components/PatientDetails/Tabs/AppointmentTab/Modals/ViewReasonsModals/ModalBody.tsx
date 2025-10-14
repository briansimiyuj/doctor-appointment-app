import { usePatientDetails } from "../../../../../../context/PatientDetailsContext"

const ModalBody: React.FC= ()=>{

    const { patientAppointments } = usePatientDetails(),
          latestAppointment = patientAppointments && patientAppointments.length > 0 ? patientAppointments[0] : null,
          reason = latestAppointment?.rejectionReason ?  latestAppointment.rejectionReason : latestAppointment?.cancellationReason,
          alternative = latestAppointment?.rejectionAlternative ? latestAppointment.rejectionAlternative : latestAppointment?.cancellationAlternative

    return(

        <div className="space-y-4">

            <div className="flex flex-col space-y-4">

                <div>

                    <label htmlFor="reason" className="block text-sm font-medium text-gray-700 dark:text-gray-300 my-2">Reason:</label>

                    <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-bg">

                        <p className="text-gray-800 dark:text-gray-200 text-sm">{ reason }</p>

                    </div>

                </div>

                {
                
                    alternative &&(
                        
                        <div>

                            <label htmlFor="alternative" className="block text-sm font-medium text-gray-700 dark:text-gray-300 my-2">Alternative:</label>

                            <div className="border border-gray-300 dark:border-gray-600 rounded-md p-4 bg-gray-50 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-bg">

                                <span className="text-gray-500 dark:text-gray-400 text-sm">{alternative}</span>

                            </div>

                        </div> 
                    
                )
                
                }

            </div>

        </div>

    )

}

export default ModalBody