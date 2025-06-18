import { useDocumentsTab } from "../../../../context/DocumentsTabContext"
import SelectedFileCard from "./SelectedFileCard"

const SelectedFiles: React.FC = ()=>{

    const { selectedFiles } = useDocumentsTab()
    
    return(

        <div className="mt-4 text-left">

            <h4 className="font-medium mb-2 text-gray-700">Selected Files:</h4>

            <div className="space-y-2">

                {

                    selectedFiles.map((file, index)=>(

                        <SelectedFileCard
                            key={index}
                            file={file}                        
                            index={index}
                        />

                    ))

                }

            </div>

        </div>

    )

}

export default SelectedFiles