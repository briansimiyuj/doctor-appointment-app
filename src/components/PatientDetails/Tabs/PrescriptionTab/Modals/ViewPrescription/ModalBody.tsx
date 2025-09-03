import { useNotesTabContext } from "../../../../../../context/NotesTabContext"

const ViewPrescriptionModalBody: React.FC = ()=>{

    const { selectedPrescription } = useNotesTabContext()

    return(

        <div className="p-4">

            <h4 className="text-lg font-semibold mb-2">{selectedPrescription?.medicineName}</h4>

            <p className="text-gray-700 mb-2"><span className="font-semibold">Dose:</span> {selectedPrescription?.dose}</p>

            <p className="text-gray-700 mb-2"><span className="font-semibold">Frequency:</span> {selectedPrescription?.frequency}</p>

            <p className="text-gray-700 mb-2"><span className="font-semibold">Duration:</span> {selectedPrescription?.duration}</p>

            <p className="text-gray-700 mb-2"><span className="font-semibold">Notes:</span> {selectedPrescription?.notes || "No notes"}</p>

            <p className="text-gray-700 mb-2"><span className="font-semibold">Doctor Name:</span> {selectedPrescription?.doctorID}</p>

            <div className="text-sm text-gray-500">

                <p><span className="font-semibold">Date Added:</span> {selectedPrescription?.createdAt && new Date(selectedPrescription.createdAt).toLocaleDateString()}</p>

                {
                
                    selectedPrescription?.updatedAt &&(

                        <p><span className="font-semibold">Updated:</span> {new Date(selectedPrescription?.updatedAt).toLocaleDateString()}</p>

                    )
                    
                }

            </div>

        </div>

    )

}

export default ViewPrescriptionModalBody