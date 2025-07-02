import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import NoteItem from "./NoteItem"

const NotesList: React.FC = ()=>{

    const { notes } = usePatientDetails()

    return(

        <ul className="space-y-3">

            {

                notes.map(note =>(

                    <NoteItem key={Number(note._id)} note={note}/>

                ))

            }

        </ul>

    )

}

export default NotesList