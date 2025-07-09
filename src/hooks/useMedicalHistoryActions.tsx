import { MedicalHistoryType } from "../assets/types/MedicalHistoryType"
import { useMedicalHistoryTabContext } from "../context/MedicalHistoryTabContext"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useMedicalHistoryActions = () =>{

    const { addMedicalCondition, removeMedicalCondition, updateMedicalConditions, addAllergy, removeAllergy, updateAllergies, addMedication, removeMedication, updateMedications, addSurgery, removeSurgery, updateSurgeries, medicalConditions, allergies, medications, surgeries } = usePatientDetails(),
          { closeModal } = useMedicalHistoryTabContext()

    const addFunction = (section: MedicalHistoryType, value: string) =>{

        const trimmedValue = value.trim()
    
        switch(section){

            case "medicalConditions":
                
                if(medicalConditions.includes(trimmedValue)){

                    alert(`You already have ${trimmedValue} in your medical conditions list.`)

                    return

                }
                         
                addMedicalCondition(trimmedValue)

                break

            case "allergies":

                if(allergies.includes(trimmedValue)){
                    
                   alert(`You already have ${trimmedValue} in your allergies list.`)

                   return
                    
                }   

                addAllergy(trimmedValue)

                break

            case "medications":
                
                if(medications.includes(trimmedValue)){

                    alert(`You already have ${trimmedValue} in your medications list.`)

                    return

                }

                addMedication(trimmedValue) 

                break

            case "surgeries":   
            
                if(surgeries.includes(trimmedValue)){

                    alert(`You already have ${trimmedValue} in your surgeries list.`)

                    return

                }

                addSurgery(trimmedValue)

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

        const trimmedValue = newValue.trim()
        let currentValue = ''
    
        switch(section){

            case "medicalConditions":
                currentValue = medicalConditions[index]
                updateMedicalConditions(index, trimmedValue)
                break

            case "allergies":
                currentValue = allergies[index]
                updateAllergies(index, trimmedValue)
                break

            case "medications":
                currentValue = medications[index]
                updateMedications(index, trimmedValue)
                break

            case "surgeries":   
                currentValue = surgeries[index]
                updateSurgeries(index, trimmedValue)
                break

            default:
                break

        }

        if(currentValue === trimmedValue){

            alert('No changes were made')

        }

        closeModal()
    
    }

    return{

        addFunction,
        removeFunction,
        updateFunction
    
    }

}
