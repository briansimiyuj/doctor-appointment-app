import { useMedicalHistoryTabContext } from "../../../../../context/MedicalHistoryTabContext"

const ModalBody: React.FC = ()=>{

    const { editingValue, targetSection, setEditingValue, mode } = useMedicalHistoryTabContext()

    const getLabel = () =>{
        
        switch (targetSection){
            
            case 'medicalConditions': return 'Medical Condition'
            case 'allergies': return 'Allergy'
            case 'medications': return 'Medication'
            case 'surgeries': return 'Surgery'
            default: return 'Item'

        }

    }


    return(

        <div className="space-y-4 p-4">

            {

                mode === "delete" ?(

                    <p className="text-sm text-gray-500">Are you sure you want to delete this <span className="font-semibold">{editingValue}</span> { getLabel()}?</p>

                ):(

                    <>
                    
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
                            placeholder={`Enter ${getLabel()}`}
                            value={editingValue}
                            onChange={e => {setEditingValue(e.target.value)}}
                        />
                    
                    
                    </>

                )

            }


        </div>

    )

}

export default ModalBody