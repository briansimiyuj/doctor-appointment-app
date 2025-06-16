interface NotesListProps{
    
    index: number
    createdAt: string

}

const NoteHeader: React.FC<NotesListProps> = ({ index, createdAt })=>{

    return(

        <div className="flex items-center justify-between mb-1">

            <h3 className="font-semibold">

                {`Note ${index + 1}`}

            </h3>

            {

                createdAt &&(

                    <span className="text-gray-500 text-sm">

                        {`${new Date(createdAt).toLocaleDateString()} ${new Date(createdAt).toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}`}

                    </span>

                )

            }

        </div>

    )

}

export default NoteHeader