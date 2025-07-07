import { MedicalHistoryType } from "../assets/types/MedicalHistoryType"
import { useMedicalHistoryTabContext } from "../context/MedicalHistoryTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useMedicalHistoryActions = () =>{

    const { addMedicalCondition, removeMedicalCondition, updateMedicalConditions, addAllergy, removeAllergy, updateAllergies, addMedication, removeMedication, updateMedications, addSurgery, removeSurgery, updateSurgeries } = usePatientDetails(),
          { closeModal } = useMedicalHistoryTabContext()

    const addFunction = (section: MedicalHistoryType, value: string) =>{
    
        switch(section){

            case "medicalConditions":
                addMedicalCondition(value)
                break

            case "allergies":
                addAllergy(value)
                break

            case "medications":
                addMedication(value)
                break

            case "surgeries":   
                addSurgery(value)
                break

            default:
                break

        }

        closeModal()
    
    }

    const removeFunction = (section: MedicalHistoryType, index: number) =>{

        switch(section){

            case "medicalConditions":
                removeMedicalCondition(index)
                break

            case "allergies":
                removeAllergy(index)
                break

            case "medications":
                removeMedication(index)
                break

            case "surgeries":   
                removeSurgery(index)
                break

            default:
                break

        }

        closeModal()

    }

    const updateFunction = (section: MedicalHistoryType, index: number, newValue: string) =>{
    
       switch(section){

            case "medicalConditions":
                updateMedicalConditions(index, newValue)
                break

            case "allergies":
                updateAllergies(index, newValue)
                break

            case "medications":
                updateMedications(index, newValue)
                break

            case "surgeries":   
                updateSurgeries(index, newValue)
                break

            default:
                break

        }

        closeModal()
    
    }

    return{

        addFunction,
        removeFunction,
        updateFunction
    
    }

}
