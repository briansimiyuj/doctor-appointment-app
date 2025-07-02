import { useNotesTabContext } from "../../../../../../context/NotesTabContext"

const ModalBody: React.FC = ()=>{

    const { selectedNote } = useNotesTabContext()

    return(

        <div className="space-y-4 overflow-y-auto max-h-[60vh] p-2">

            <div>

                <h4 className="text-base font-semibold mb-1">Title</h4>

                <p className="text-gray-800">{selectedNote?.title}</p>
                
            </div>

            <div>

                <h4 className="text-base font-semibold mb-1">Content</h4>

                <p className="text-gray-800 whitespace-pre-wrap">

                   {selectedNote?.content}

                </p>
        
            </div>

            <div className="text-sm text-gray-500">

                <span>By: {selectedNote?.doctorName}</span> ·{" "}

                <span>

                {selectedNote?.date ? new Date(selectedNote.date).toLocaleDateString() : ""}{" "}

                {selectedNote?.date ? new Date(selectedNote.date).toLocaleTimeString() : ""}

                </span>

            </div>

        </div>

    )

}

export default ModalBody