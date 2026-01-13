import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import { useUpdatePatientDetails } from "../../../../hooks/useUpdatePatientDetails"
import { FaClock, FaTimes, FaComments, FaStickyNote, FaHistory, FaRedo, FaStar, FaEye, FaStethoscope } from "react-icons/fa"
import CancelAppointmentModal from "./Modals/CancelModals/CancelAppointmentModal"
import ViewNotesModal from "./Modals/ViewNotesModals/ViewNotesModal"
import ScheduleHistoryModal from "./Modals/ScheduleModals/ScheduleHistoryModal/ScheduleHistoryModal"
import RescheduleHistoryModal from "./Modals/RescheduleModals/RescheduleHistoryModal/RescheduleHistoryModal"
import ViewReasonsModals from "./Modals/ViewReasonsModals/ViewReasonsModals"
import { useBookingSlots } from "../../../../hooks/useBookingSlots"
import ReviewModal from "./Modals/ReviewModals/ReviewModal"
import ViewReviewModal from "./Modals/ReviewModals/ViewReview/ViewReviewModal"
import { useNavigate } from "react-router-dom"

const PatientTabActionButton: React.FC = () =>{

  const { patientAppointments } = usePatientDetails(),
        { appointmentToCancel, openCancelModal, showCancelModal, closeCancelModal, openRescheduleModal, showScheduleHistoryModal, openScheduleHistoryModal, closeScheduleHistoryModal, showViewNotesModal, openViewNotesModal, closeViewNotesModal, showRescheduleHistoryModal, openRescheduleHistoryModal, closeRescheduleHistoryModal, showViewReasonsModal, openViewReasonModal, closeViewReasonModal, showReviewModal, openReviewModal, closeReviewModal, showViewReviewsModal, openViewReviewModal, closeViewReviewModal } = useUpdatePatientDetails() as any,
        { cancelAppointment } = useBookingSlots(),
        latestAppointment = patientAppointments && patientAppointments.length > 0 ? patientAppointments[0] : null,
        navigate = useNavigate()
 
  const renderActionButton = () =>{

    if (!latestAppointment) return null

    const { isReviewed = false } = latestAppointment

    switch(latestAppointment.status){

      case "pending":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white dark:text-white rounded-md cursor-not-allowed w-full sm:w-auto"
              disabled
            ><FaClock /> Awaiting Doctor Approval</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white dark:text-white rounded-md hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
              onClick={() => openCancelModal(latestAppointment)}
            ><FaTimes /> Cancel Appointment</button>

          </div>

        )

      case "approved":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white dark:text-white rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openCancelModal(latestAppointment)}
            ><FaTimes /> Cancel Appointment</button>
            
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white dark:text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => navigate(`/appointments/${latestAppointment._id}/session`)}
            ><FaStethoscope/> Join Consultation</button>

          </div>

        )

      case "completed":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white dark:text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openViewNotesModal(latestAppointment)}
            ><FaStickyNote /> View Doctor Notes</button>

            {

              isReviewed ?(

                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white dark:text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                  onClick={() => openViewReviewModal(latestAppointment)}
                ><FaEye/> View Reviews</button>

              ):(

                <button
                  className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600 text-white dark:text-white rounded-md hover:bg-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
                  onClick={() => openReviewModal(latestAppointment)}
                ><FaStar /> Rate & Review</button>

              )

            }

          </div>

        )

      case "cancelled":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white dark:text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={openScheduleHistoryModal}
            ><FaHistory /> Schedule History</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white dark:text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openViewReasonModal(latestAppointment)}
            ><FaEye/> View Cancellation Reasons</button>

          </div>

        )

      case "rejected":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white dark:text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={openScheduleHistoryModal}
            ><FaHistory /> Schedule History</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white dark:text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openViewReasonModal(latestAppointment)}
            ><FaEye /> View Rejection Reasons</button>

          </div>

        )

      case "rescheduled":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white dark:text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => {
                if(latestAppointment && latestAppointment._id){
                  localStorage.setItem('CurrentAppointmentToManage', JSON.stringify(latestAppointment))
                  navigate(`/appointments/${latestAppointment._id}/session`)
                }
              }}
            ><FaComments /> View Appointment Details</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white dark:text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={openRescheduleHistoryModal}
            ><FaRedo /> Reschedule History</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white dark:text-white rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openCancelModal(latestAppointment)}
            ><FaTimes /> Cancel Appointment</button>

          </div>  

        )

      case "follow-up":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white dark:text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openRescheduleModal(latestAppointment)}
            ><FaRedo /> Reschedule Follow-up</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white dark:text-white rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openCancelModal(latestAppointment)}
            ><FaTimes /> Cancel Follow-up</button>

          </div>

        )

      default:

        return null

    }

  }

  return(

    <>
      
      {renderActionButton()}

      { showCancelModal && <CancelAppointmentModal appointment={appointmentToCancel} onClose={closeCancelModal}/> }
      { showViewNotesModal && <ViewNotesModal onClose={closeViewNotesModal}/> }
      { showScheduleHistoryModal && <ScheduleHistoryModal onClose={closeScheduleHistoryModal}/> }
      { showRescheduleHistoryModal && <RescheduleHistoryModal onClose={closeRescheduleHistoryModal}/> }
      { showViewReasonsModal && <ViewReasonsModals onClose={closeViewReasonModal}/> }
      { showReviewModal && <ReviewModal onClose={closeReviewModal}/> }
      { showViewReviewsModal && <ViewReviewModal onClose={closeViewReviewModal}/> }
    
    </>

  )

}

export default PatientTabActionButton
