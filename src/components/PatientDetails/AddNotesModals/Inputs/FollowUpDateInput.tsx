import { useEffect } from "react"
import { useAddNotes } from "../../../../context/AddNotesContext"
import DatePicker from "../../RescheduleModals/DatePicker/DatePicker"
import { useDatePicker } from "../../../../context/DatePickerContext"

const DatePickerWrapper: React.FC = () =>{

    const { setFollowUpDate } = useAddNotes(),
          { selectedDate } = useDatePicker()

    useEffect(() =>{

        if(selectedDate){

            setFollowUpDate(selectedDate.toISOString().split('T')[0])

        }
        
    }, [selectedDate, setFollowUpDate])
    
    return <DatePicker/>

}

const FollowUpDateInput: React.FC = () =>{

    return(

        <>
        
            <label htmlFor="followUpDate" className="block text-sm font-medium text-gray-700 mb-2">Follow-up Date</label>

            <DatePickerWrapper/>
        
        </>

    )

}

export default FollowUpDateInput