import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import { useUpdatePatientDetails } from "../../../../hooks/useUpdatePatientDetails"
import { FaClock, FaTimes, FaVideo, FaComments, FaStickyNote, FaHistory, FaRedo, FaStar } from "react-icons/fa"

const PatientTabActionButton: React.FC = () =>{

  const { patientAppointments } = usePatientDetails(),
        { openCancelModal, openRescheduleModal, openViewNotesModal, openManageModal, openScheduleHistoryModal } = useUpdatePatientDetails() as any,
        latestAppointment = patientAppointments && patientAppointments.length > 0 ? patientAppointments[0] : null
 
  const renderActionButton = () =>{

    if (!latestAppointment) return null

    switch(latestAppointment.status){

      case "pending":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md cursor-not-allowed w-full sm:w-auto"
              disabled
            ><FaClock /> Awaiting Doctor Approval</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-all duration-300 w-full sm:w-auto"
              onClick={() => openCancelModal(latestAppointment)}
            ><FaTimes /> Cancel Appointment</button>

          </div>

        )

      case "approved":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
          
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openCancelModal(latestAppointment)}
            ><FaTimes /> Cancel Appointment</button>
            
            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openManageModal(latestAppointment)}
            ><FaComments /> Join Live Chat</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openManageModal(latestAppointment)}
            ><FaVideo /> Join Video Call</button>

          </div>

        )

      case "completed":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openViewNotesModal(latestAppointment)}
            ><FaStickyNote /> View Doctor Notes</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
            ><FaStar /> Rate & Review</button>
            
          </div>

        )

      case "cancelled":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={openScheduleHistoryModal}
            ><FaHistory /> Schedule History</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openViewNotesModal(latestAppointment)}
            ><FaStickyNote /> View Doctor Notes</button>

          </div>

        )

      case "rejected":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={openScheduleHistoryModal}
            ><FaHistory /> Schedule History</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openViewNotesModal(latestAppointment)}
            ><FaTimes /> View Rejection Reasons</button>

          </div>

        )

      case "rescheduled":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={openScheduleHistoryModal}
            ><FaRedo /> Reschedule History</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openViewNotesModal(latestAppointment)}
            ><FaStickyNote /> View Doctor Notes</button>

          </div>  

        )

      case "follow-up":

        return(

          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
              onClick={() => openRescheduleModal(latestAppointment)}
            ><FaRedo /> Reschedule Follow-up</button>

            <button
              className="flex items-center justify-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto"
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
    
    </>

  )

}

export default PatientTabActionButton
