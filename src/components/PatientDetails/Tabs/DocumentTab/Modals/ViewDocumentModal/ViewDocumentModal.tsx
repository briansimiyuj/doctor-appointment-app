import { useDocumentsTab } from "../../../../../../context/DocumentsTabContext"
import ModalHeader from "../../../AppointmentTab/Modals/ModalHeader"
import ModalBody from "./ModalBody"
import ModalFooter from "./ModalFooter"

const ViewDocumentModal: React.FC = ()=>{

    const { closeViewModal, selectedDocument } = useDocumentsTab()

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">


            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-4 overflow-y-auto max-h-[90vh]">

                <ModalHeader title="View Document" onClose={closeViewModal}/>

                {
                
                    selectedDocument &&(

                        <>

                            <ModalBody document={selectedDocument}/>

                            <ModalFooter document={selectedDocument} onClose={closeViewModal}/>

                        </>
                        
                    )
                    
                }

            </div>

        </div>

    )

}

export default ViewDocumentModal