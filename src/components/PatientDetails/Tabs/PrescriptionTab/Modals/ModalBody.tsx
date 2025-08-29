import { usePrescriptionContext } from "../../../../../context/PrescriptionContext"

const ModalBody: React.FC = () =>{

    const { prescriptions, updateField, addPrescription, removePrescription } = usePrescriptionContext()

    return(

        <form className="space-y-6 mt-4">

            {
            
                prescriptions.map((prescription, index) =>(
                    
                    <div key={index} className=" p-4 rounded-lg space-y-4">
                        
                        <div>

                            <label className="block mb-1 font-medium text-gray-700">Medicine Name</label>

                            <input
                                type="text" 
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Medicine Name"
                                value={prescription.medicineName}
                                onChange={e => updateField(index, "medicineName", e.target.value)}
                            />

                        </div>

                        <div>

                            <label className="block mb-1 font-medium text-gray-700">Dose</label>

                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Dose"
                                value={prescription.dose}
                                onChange={e => updateField(index, "dose", e.target.value)}
                            />

                        </div>

                        <div>
                            
                            <label className="block mb-1 font-medium text-gray-700">Frequency</label>
                            
                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Frequency"
                                value={prescription.frequency}
                                onChange={e => updateField(index, "frequency", e.target.value)}
                            />

                        </div>

                        <div>
                            
                            <label className="block mb-1 font-medium text-gray-700">Duration</label>

                            <input
                                type="text"
                                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Duration"
                                value={prescription.duration}
                                onChange={e => updateField(index, "duration", e.target.value)}
                            />

                        </div>

                        <div>

                            <label className="block mb-1 font-medium text-gray-700">Notes</label>

                            <textarea
                                rows={3}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-bg"
                                placeholder="Enter Notes"
                                value={prescription.notes}
                                onChange={e => updateField(index, "notes", e.target.value)}
                            />

                        </div>

                        {
                        
                            index > 0 &&(

                                <button
                                    type="button"
                                    className="px-3 py-2 bg-red-500 text-white dark:text-white rounded-lg"
                                    onClick={() => removePrescription(index)}
                                >Remove</button>

                            )
                            
                        }

                    </div>

                ))
                
            }

            <button
                type="button"
                className="bg-primary-btn text-white dark:text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                onClick={addPrescription}
            >Add Medicine</button>

        </form>

    )

}

export default ModalBody