interface NoteContentProps{

    notes: string

}

const NoteContent: React.FC<NoteContentProps> = ({ notes })=>{

    return(

        <div className="mb-2">

            <h4 className="font-medium">Notes:</h4>

            <p className="text-gray-700 whitespace-pre-line">{notes}</p>

        </div>

    )

}

export default NoteContent