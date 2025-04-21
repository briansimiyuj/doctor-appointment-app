import { usePatientDetails } from "../../../context/PatientDetailsContext"
import { useUpdatePatientDetails } from "../../../hooks/useUpdatePatientDetails"
import CancelAppointmentModal from "../CancelModals/CancelAppointmentModal"
import RejectAppointmentModal from "../RejectModal/RejectAppointmentModal"

const TabActionButton: React.FC = ()=>{

    const { patientAppointments } = usePatientDetails(),

          { handleApproveAppointment, openCancelModal, showCancelModal, closeCancelModal, openRejectModal, showRejectModal } = useUpdatePatientDetails() as any,
         latestAppointment = patientAppointments && patientAppointments.length > 0 
        ? patientAppointments[0] 
        : null
    
    const renderActionButton = () =>{

        if(!latestAppointment) return null
        
        if(latestAppointment.status === "pending"){

            return(

                <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-2">
                
                    <button 
                    className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                    onClick={handleApproveAppointment}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>

                            </svg>

                            Approve Appointment

                        </span>

                    </button>
                
                    <button
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={openRejectModal}
                    >

                        <span className="flex items-center justify-center gap-2">


                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
 
                            </svg>

                            Reject Appointment

                        </span>

                    </button>
                
                </div>

            )

        }else if(latestAppointment.status === "confirmed"){

            return(

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

                    <button className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                    
                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                            </svg>

                            Reschedule

                        </span>

                    </button>
                    
                    <button 
                        className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={() => openCancelModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>

                            </svg>

                            Cancel

                        </span>

                    </button>

                </div>

            )

        }else if(latestAppointment.status === "completed"){

            return(

                <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">

                    <span className="flex items-center justify-center gap-2">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>

                        </svg>

                        Add Notes

                    </span>

                </button>

            )

        }else if(latestAppointment.status === "cancelled"){

            return(

                <button className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">

                    <span className="flex items-center justify-center gap-2">
                    
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                        </svg>

                        Schedule New Appointment

                    </span>

                </button>

            )

        }
        
        return(

            <button className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
            
                <span className="flex items-center justify-center gap-2">
            
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            
                    </svg>
            
                    Manage Appointment
            
                </span>

            </button>

        )
        
    }

    return(

        <>
        
            {renderActionButton()}

            { showCancelModal && <CancelAppointmentModal appointment={latestAppointment} onClose={closeCancelModal}/> }

            { showRejectModal && <RejectAppointmentModal appointment={latestAppointment}/> }
        
        </>

    )

}
export default TabActionButton