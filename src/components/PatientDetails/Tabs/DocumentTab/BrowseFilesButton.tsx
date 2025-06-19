import { FiUpload } from "react-icons/fi"
import { useFileSelection } from "../../../../hooks/useFileSelection"
import { useRef } from "react"

const BrowseFilesButton: React.FC = ()=>{

    const { handleBrowseClick, handleDragOver, handleDrop, handleFileSelection } = useFileSelection(),
        fileInputRef = useRef<HTMLInputElement>(null)

    return(

        <div 
            className="text-center cursor-pointer mb-5"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
        >

            <FiUpload className="w-12 h-12 mx-auto mb-4 text-gray-400"/>

            <p className="text-gray-600 text-lg mb-2">Drag and drop files here or click to select files</p>

            <button 
                className="bg-secondary-btn text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
                onClick={e =>{

                    e.stopPropagation()
                    handleBrowseClick(fileInputRef)

                }}
            >Browse Files</button>

            <input
                type="file"
                multiple
                accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                ref={fileInputRef}
                onChange={handleFileSelection}
                className="hidden"
            />

        </div>

    )

}

export default BrowseFilesButton