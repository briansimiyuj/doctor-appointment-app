import { LiveChatContextProvider } from "../../../../../context/LiveChatContext"
import { useNotesTabContext } from "../../../../../context/NotesTabContext"
import LiveChat from "../../../../LiveChat/LiveChat"
import ModalHeader from "../../../../Profile/Modals/ModalHeader"

const NoteCommentModal: React.FC = ()=>{

    const { selectedNote, closeModals } = useNotesTabContext()

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg w-full max-w-md h-[600px] flex flex-col">

                <ModalHeader title={`Add a comment to ${selectedNote?.title}`} onClose={closeModals}/>

                <LiveChatContextProvider>

                    <div className="flex-1 min-h-0">

                        <LiveChat note={selectedNote}/>
                        
                    </div>

                </LiveChatContextProvider>

            </div>

        </div>

    )

}

export default NoteCommentModal