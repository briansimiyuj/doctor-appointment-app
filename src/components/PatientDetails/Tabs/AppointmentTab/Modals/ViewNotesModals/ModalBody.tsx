import { useAddNotes } from "../../../../../../context/AddNotesContext"
import { useViewNotes } from "../../../../../../hooks/useViewNotes"
import NotesList from "./NotesList"

const ModalBody: React.FC = ()=>{

    const { hasNotes} = useViewNotes(),
          { appointmentNotes } = useAddNotes()

    return(

        <>
        
            {

                !hasNotes ?(

                    <div className="text-center text-gray-600 py-8">

                        <p>No notes available for this appointment.</p>

                    </div>

                ):(

                    <div className="space-y-4">

                        {

                            appointmentNotes.map((note, index) =>(

                                <NotesList
                                    note={note}
                                    index={index}
                                />

                            ))

                        }

                    </div>

                )

            }
        
        </>

    )

}

export default ModalBody