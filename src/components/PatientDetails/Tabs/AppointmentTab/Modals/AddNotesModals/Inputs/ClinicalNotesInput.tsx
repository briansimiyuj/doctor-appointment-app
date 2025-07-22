import { useAddNotes } from "../../../../../../../context/AddNotesContext"

const ClinicalNotesInput: React.FC = ()=>{

    const { notes, setNotes } = useAddNotes()

    return(

        <>
        
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">Clinical Notes</label>

            <textarea
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                placeholder="Enter clinical notes and observations..."
                value={notes} 
                onChange={e => setNotes(e.target.value)}
            />

            {

                notes.trim() === '' &&(

                    <p className="text-red-500 text-sm mt-1">Clinical notes are required</p>

                )

            }
        
        </>

    )

}

export default ClinicalNotesInput