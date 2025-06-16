import React from 'react'
import { useAddNotes } from '../../../../../../../context/AddNotesContext'

const PrescriptionInput: React.FC = () =>{

    const { prescription, setPrescription } = useAddNotes()

    return(

        <>

            <label className="block text-sm font-medium text-gray-700 mb-2">Prescription</label>

            <textarea
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                placeholder="Enter prescription details..."
                value={prescription}
                onChange={e => setPrescription(e.target.value)}
            />

        </>

    )

}

export default PrescriptionInput