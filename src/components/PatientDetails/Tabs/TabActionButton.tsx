import { usePatientDetails } from "../../../context/PatientDetailsContext"
import { useApproveAppointment } from "../../../hooks/useApproveAppointment"
import { useUpdatePatientDetails } from "../../../hooks/useUpdatePatientDetails"
import AddNotesModal from "../AddNotesModals/AddNotesModal"
import CancelAppointmentModal from "../CancelModals/CancelAppointmentModal"
import ManageAppointmentModal from "../ManageModals/ManageAppointmentModal"
import RejectAppointmentModal from "../RejectModal/RejectAppointmentModal"
import RescheduleAppointmentModal from "../RescheduleModals/RescheduleAppointmentModal"
import RescheduleHistoryModal from "../RescheduleModals/RescheduleHistoryModal/RescheduleHistoryModal"
import ScheduleAppointmentModal from "../ScheduleModals/ScheduleAppointmentModal"
import ScheduleHistoryModal from "../ScheduleModals/ScheduleHistoryModal/ScheduleHistoryModal"
import ViewNotesModal from "../ViewNotesModals/ViewNotesModal"

const TabActionButton: React.FC = ()=>{

    const { patientAppointments } = usePatientDetails(),
          { handleApproveAppointment } = useApproveAppointment(),
          { appointmentToCancel, openCancelModal, showCancelModal, closeCancelModal, openRejectModal, showRejectModal, closeRejectModal, openRescheduleModal, showRescheduleModal, appointmentToReschedule, closeRescheduleModal, showRescheduleHistoryModal, appointmentToReject, openRescheduleHistoryModal, closeRescheduleHistoryModal, showScheduleNewAppointmentModal, openScheduleNewAppointmentModal, closeScheduleNewAppointmentModal, appointmentToSchedule, showScheduleHistoryModal, openScheduleHistoryModal, closeScheduleHistoryModal, showManageModal, openManageModal, closeManageModal, openAddNotesModal, showAddNotesModal, closeAddNotesModal, showViewNotesModal, openViewNotesModal, closeViewNotesModal } = useUpdatePatientDetails() as any,
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
                        onClick={() => openRejectModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
 
                            </svg>

                            Reject Appointment

                        </span>

                    </button>
                
                </div>

            )

        }else if(latestAppointment.status === "approved"){

            return(

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

                    <button 
                        className="px-4 py-2 bg-primary-btn text-white rounded-md hover:bg-primary-bg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={() => openManageModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>

                            </svg>

                            Manage Appointment

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

                            Cancel Appointment

                        </span>

                    </button>

                </div>

            )

        }else if(latestAppointment.status === "completed"){

            return(

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

                    <button 
                        className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={() => openAddNotesModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>

                            </svg>

                            Add Notes

                        </span>

                    </button>

                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-greden-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={() => openViewNotesModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            
                            </svg>

                            View Notes 
                        
                        </span>    

                    </button>

                    <button
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={openScheduleHistoryModal}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                            </svg>

                            Schedule History

                        </span>
                        
                    </button>

                </div>

            )

        }else if(latestAppointment.status === "cancelled"){

            return(

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

                    <button 
                        className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={() => openScheduleNewAppointmentModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">
                        
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>

                            Schedule New Appointment

                        </span>

                    </button>

                    <button
                        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-greden-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={() => openViewNotesModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">
                            
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                            
                            </svg>

                            View Notes 
                        
                        </span>    

                    </button>
                    
                    <button
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={openScheduleHistoryModal}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                            </svg>

                            Schedule History

                        </span>
                        
                    </button>

                </div>

            )

        }else if(latestAppointment.status === "rejected"){

            return(

                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

                    <button 
                        className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={() => openRescheduleModal(latestAppointment)}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                            </svg>

                            Reschedule Appointment

                        </span>

                    </button>

                    <button
                        className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                        onClick={openScheduleHistoryModal}
                    >

                        <span className="flex items-center justify-center gap-2">

                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                            </svg>

                            Schedule History

                        </span>
                        
                    </button>
                    
                </div>

            )

        }else if(latestAppointment.status === "rescheduled"){

            return(

                <button 
                    className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                    onClick={openRescheduleHistoryModal}
                >
            
                    <span className="flex items-center justify-center gap-2">

                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>

                        </svg>

                        Reschedule History

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

            { showCancelModal && <CancelAppointmentModal appointment={appointmentToCancel} onClose={closeCancelModal}/> }

            { showRejectModal && <RejectAppointmentModal appointment={appointmentToReject} onClose={closeRejectModal}/> }

            { showRescheduleModal && <RescheduleAppointmentModal appointment={appointmentToReschedule}onClose={closeRescheduleModal}/> }

            { showRescheduleHistoryModal && <RescheduleHistoryModal onClose={closeRescheduleHistoryModal}/> }    

            { showScheduleNewAppointmentModal && <ScheduleAppointmentModal onClose={closeScheduleNewAppointmentModal} appointment={appointmentToSchedule}/> }

            { showScheduleHistoryModal && <ScheduleHistoryModal onClose={closeScheduleHistoryModal}/> }

            { showManageModal && <ManageAppointmentModal onClose={closeManageModal}/> }

            { showAddNotesModal && <AddNotesModal onClose={closeAddNotesModal}/> }

            { showViewNotesModal && <ViewNotesModal onClose={closeViewNotesModal}/> }
        
        </>

    )

}
export default TabActionButton