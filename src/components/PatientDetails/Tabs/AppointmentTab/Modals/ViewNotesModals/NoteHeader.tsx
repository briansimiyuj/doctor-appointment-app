import { useAddNotes } from "../../../../../../context/AddNotesContext"

interface NotesListProps{
    
    index: number
    createdAt: string

}

const NoteHeader: React.FC<NotesListProps> = ({ index, createdAt })=>{

    const { formatFirebaseTimestamp } =  useAddNotes()

    return(

        <div className="flex items-center justify-between mb-1">

            <h3 className="font-semibold">

                {`Note ${index + 1}`}

            </h3>

            {

                createdAt &&(

                    <span className="text-gray-500 text-sm">

                        {`${formatFirebaseTimestamp(createdAt)}`}

                    </span>

                )

            }

        </div>

    )

}

export default NoteHeader