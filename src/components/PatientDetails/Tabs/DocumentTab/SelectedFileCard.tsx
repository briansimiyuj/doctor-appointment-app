import { FiFile, FiX } from "react-icons/fi"
import { DocumentType } from "../../../../assets/types/DocumentType"
import { useFileSelection } from "../../../../hooks/useFileSelection"

interface SelectedFileCardProps{

    file: DocumentType
    index: number

}

const SelectedFileCard: React.FC<SelectedFileCardProps> = ({ file, index })=>{

    const { removeFile } = useFileSelection()

    return(

        <div className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg shadow-sm">

            <div className="flex items-center gap-3">

                <FiFile className="w-5 h-5 text-gray-500"/>
          
                <div className="min-w-0">

                    <div>
                    
                        <p className="text-xs sm:text-sm font-medium text-gray-800 break-words max-w-[100px] sm:max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-xl">{file.name}</p>

                        <p className="text-xs text-gray-500">

                            {file.type} • {(file.size / 1024 / 1024).toFixed(2)} MB

                        </p>

                    </div>
                    
                </div>

            </div>

            <button
                className="p-1 text-gray-400 hover:text-red-500 transition-colors"
                title="Remove file"
                onClick={() => removeFile(index)}
            >

                <FiX className="w-4 h-4"/>

            </button>


        </div>

    )

}

export default SelectedFileCard