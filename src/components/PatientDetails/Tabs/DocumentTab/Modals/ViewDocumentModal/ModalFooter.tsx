import { DocumentType } from "../../../../../../assets/types/DocumentType"
import { FiMaximize2 } from "react-icons/fi"
import { useDocumentFullView } from "../../../../../../hooks/useDocumentFullView"

interface ModalFooterProps{

    document: DocumentType
    onClose: () => void

}

const ModalFooter: React.FC<ModalFooterProps> = ({ document, onClose })=>{

    const { openDocumentFullView } = useDocumentFullView()

    const handleOpenFullView = () =>{

        openDocumentFullView(document)

        onClose()

    }

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-between items-center gap-3 mt-6 pt-4 border-t">

            <button
                className="bg-gray-300 hover:bg-gray-400 dark:bg-gray-600 hover:dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 hover:text-gray-300 font-semibold py-2 px-4 rounded-md transition-all duration-300 w-full sm:w-auto mt-2 sm:mt-0 cursor-pointer flex items-center gap-2 justify-center"
                onClick={onClose}
            >Close</button>

            <button
                className="px-4 py-2 bg-primary-btn hover:bg-primary-bg-darker text-white rounded-md transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
                onClick={handleOpenFullView}
            >

                <FiMaximize2 className="w-4 h-4"/>

                Open in Full View

            </button>

        </div>

    )

}

export default ModalFooter