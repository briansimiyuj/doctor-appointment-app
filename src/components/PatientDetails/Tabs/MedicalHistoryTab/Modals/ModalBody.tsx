import { useMedicalHistoryTabContext } from "../../../../../context/MedicalHistoryTabContext"

const ModalBody: React.FC = ()=>{

    const { editingValue, targetSection, setEditingValue } = useMedicalHistoryTabContext()

    return(

        <div className="space-y-4 p-4">

            <label className="block text-sm font-medium text-gray-700">

                {

                    targetSection &&(

                        <>
                        
                            {targetSection === 'medicalConditions' && "Medical Condition"}
            
                            {targetSection === 'allergies' && "Allergy"}
            
                            {targetSection === 'medications' && "Medication"}
            
                            {targetSection === 'surgeries' && "Surgery"}
                        
                        
                        </>

                    )

                }:   

            </label>            

            <input
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                type="text"
                placeholder={`Enter ${targetSection
                    ?.replace(/([A-Z])/g, ' $1')
                    .replace(/^./, str => str.toUpperCase())
                }`}
                value={editingValue}
                onChange={e => {setEditingValue(e.target.value)}}
            />

        </div>

    )

}

export default ModalBody