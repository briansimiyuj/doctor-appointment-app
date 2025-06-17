import { FiPlus } from "react-icons/fi"
import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import { useDocumentsTab } from "../../../../context/DocumentsTabContext"

const DocumentsTabHeader: React.FC = ()=>{

    const { documents } = usePatientDetails(),
          { toggleUploadArea } = useDocumentsTab()

    return(

        <div className="space-y-4">

            <h3 className="text-lg font-semibold">

                <span className="border-b-2 border-primary-bg pb-1">Documents</span>

            </h3>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 border-b pb-4">

                <h4 className="text-sm font-semibold">

                    <span className="border-b-2 border-primary-bg pb-1">All Documents ({documents.length})</span>

                </h4>

                <button 
                    className="bg-primary-bg flex items-center gap-2 text-secondary-bg px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                    onClick={toggleUploadArea}
                >

                    <FiPlus className="w-4 h-4"/>

                    <span className="text-sm font-semibold">Add Document</span>

                </button>

            </div>

        </div>

    )

}

export default DocumentsTabHeader