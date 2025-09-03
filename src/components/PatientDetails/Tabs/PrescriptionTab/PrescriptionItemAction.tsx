import { FiEdit, FiEye, FiTrash2 } from "react-icons/fi"
import { PrescriptionType } from "../../../../assets/types/PrescriptionType"
import { useNotesTabContext } from "../../../../context/NotesTabContext"
import { useProfileContext } from "../../../../context/ProfileContext"
import { MdNotifications, MdOutlineFileDownload } from "react-icons/md"


interface PrescriptionItemActionProps{

    prescription: PrescriptionType

}

const PrescriptionItemAction: React.FC<PrescriptionItemActionProps> = ({ prescription })=>{

    const { openViewPrescriptionModal, openDeletePrescriptionModal, openEditPrescriptionModal } = useNotesTabContext(),
          { profile } = useProfileContext()

    return(

        <div className="flex flex-col mt-6 gap-2">

            <button 
                className="bg-green-600 text-secondary-bg dark:text-secondary-bg py-2 px-4 rounded-md transition-all duration-300 flex items-center gap-2 justify-center w-full sm:w-auto mt-2 sm:mt-0"
                onClick={() => openViewPrescriptionModal(prescription)}
            >

                <FiEye className="w-6 h-6"/>

                View 

            </button>

            {

                profile?.type === "doctor"?(

                    <>

                        <button 
                            className="bg-primary-btn hover:bg-blue-600 text-secondary-bg dark:text-secondary-bg py-2 px-4 rounded-md transition duration-300 flex items-center gap-2 justify-center w-full sm:w-auto"
                            onClick={() => openEditPrescriptionModal(prescription)}
                        >

                            <FiEdit className="w-6 h-6"/>

                            Edit

                        </button>

                        <button 
                            className="bg-red-500 hover:bg-red-600 text-secondary-bg dark:text-secondary-bg flex items-center gap-2 justify-center py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                            onClick={() => openDeletePrescriptionModal(prescription)}
                        >

                            <FiTrash2 className="w-6 h-6"/>

                            Delete

                        </button>

                    </>

                


                ):(

                    <>
                    
                        <button 
                            className="bg-purple-600 text-secondary-bg dark:text-secondary-bg py-2 px-4 rounded-md transition-all duration-300 flex items-center gap-2 justify-center w-full sm:w-auto mt-2 sm:mt-0"
                        >

                            <MdNotifications className="w-6 h-6"/>

                            Notify Me

                        </button>

                        <button 
                            className="bg-primary-btn hover:bg-blue-600 text-secondary-bg dark:text-secondary-bg flex items-center gap-2 justify-center py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0"
                        >
                            
                            <MdOutlineFileDownload className="w-6 h-6"/>

                            Export
                        </button>

                    
                    </>

                )

            }


        </div>

    )

}

export default PrescriptionItemAction