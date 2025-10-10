import { AppointmentType } from "../../../../../../assets/types/AppointmentType";
import { useAddNotes } from "../../../../../../context/AddNotesContext"
import { useAddNotesSubmit } from "../../../../../../hooks/useAddNotesSubmit"
import { useUpdatePatientDetails } from "../../../../../../hooks/useUpdatePatientDetails"

interface ModalFooterProps{

    onClose: () => void
    triggerFollowUpScheduling: (appointment: AppointmentType, followUpDate: string) => void

}

const ModalFooter: React.FC<ModalFooterProps> = ({ onClose, triggerFollowUpScheduling }) =>{

    const { isSubmitting, followUpDate } = useAddNotes(),
          { appointmentToAddNotes } = useUpdatePatientDetails(),
          { handleSubmit, canSubmit } = useAddNotesSubmit(appointmentToAddNotes)

    const disableFollowUp = !appointmentToAddNotes && !followUpDate || followUpDate.trim() === ''

    return(

        <div className="flex flex-col sm:flex-row justify-end gap-3 sm:gap-3">

            {

                !disableFollowUp &&(

                    <button
                        className={`bg-primary-btn text-white dark:text-white dark:hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0 ${disableFollowUp ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                        onClick={() =>{
                            if(appointmentToAddNotes){
                                triggerFollowUpScheduling(appointmentToAddNotes, followUpDate)
                            }
                        }}
                        disabled={disableFollowUp}
                    >Schedule Follow Up</button>


                )

            }


            <button
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:hover:bg-gray-700 text-gray-700 font-medium py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0 cursor-pointer"
                onClick={onClose}
            >Cancel</button>

            <button
                className={`bg-primary-btn text-white dark:text-white dark:hover:bg-blue-700 px-4 py-2 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0 ${!canSubmit ? "cursor-not-allowed opacity-50" : "cursor-pointer"}`}
                disabled={!canSubmit || isSubmitting}
                onClick={() => handleSubmit(onClose)}
            >{ isSubmitting ? "Saving..." : "Save" }</button>
            
        </div>

    )

}

export default ModalFooter