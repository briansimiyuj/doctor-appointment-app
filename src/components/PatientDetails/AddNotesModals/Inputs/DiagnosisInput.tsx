import { useAddNotes } from "../../../../context/AddNotesContext"

const DiagnosisInput: React.FC = () =>{

    const { diagnosis, setDiagnosis } = useAddNotes()

    return(

        <>

            <label className="block text-sm font-medium text-gray-700 mb-2">Diagnosis</label>

            <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                placeholder="Enter diagnosis..."
                value={diagnosis}
                onChange={e => setDiagnosis(e.target.value)}
            />

        </>

    )

}

export default DiagnosisInput