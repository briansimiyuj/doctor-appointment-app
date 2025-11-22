import { FaFileMedical, FaVial } from "react-icons/fa"
import { useManageAppointmentContext } from "../../context/ManageAppointmentContext"
import DoctorImage from "../AppointmentsDetails/DoctorImage"

const SessionStatusSidebar: React.FC = ()=>{

    const { appointment, openViewLabOrderModal, openViewReferralModal } = useManageAppointmentContext(),
         doctor = appointment?.doctor

    console.log(appointment?.hasLabOrder, appointment?.hasReferral)

    return(

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md sticky top-24 space-y-6">

            <div>

                <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4 border-gray-200 dark:border-gray-700 pb-3">Your Doctor</h2>

                <div className="flex items-center gap-3  flex-col">

                    <DoctorImage/>

                    <div>

                        <p className="font-semibold text-gray-800 dark:text-white">
                            
                            {doctor?.doctorInfo.name}

                        </p>

                        <p className="text-sm text-gray-600 dark:text-gray-400">
                        
                            {doctor?.doctorInfo.speciality}

                        </p>

                    </div>

                </div>

            </div>

            {

                (appointment?.hasLabOrder || appointment?.hasReferral) &&(

                    <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
                    
                        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Documents</h3>

                        <div className="space-y-2">


                            {

                                appointment?.hasLabOrder &&(

                                    <button
                                        onClick={openViewLabOrderModal}
                                        className="flex items-center justify-center w-full px-4 py-2 bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 font-medium rounded-lg hover:bg-amber-200 dark:hover:bg-amber-800 transition"
                                    >
                                        
                                        <FaVial className="mr-2"/> View Lab Order

                                    </button>

                                )

                            }

                            {

                                appointment?.hasReferral &&(

                                    <button
                                        onClick={openViewReferralModal}
                                        className="flex items-center justify-center w-full px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 font-medium rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition"
                                    >
                                        
                                        <FaFileMedical className="mr-2"/> View Referral

                                    </button>

                                )

                            }

                        </div>

                    </div>

                )

            }

        </div>

    )

}

export default SessionStatusSidebar