import { useEffect } from "react"
import { useAddNotes } from "../../../../context/AddNotesContext"
import { DateTimeProvider } from "../../../../context/DateTimeContext"
import { DatePickerProvider, useDatePicker } from "../../../../context/DatePickerContext"
import DatePicker from "../../RescheduleModals/DatePicker/DatePicker"

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

    const { followUpDate } = useAddNotes()

    return(

        <>
        
            <label htmlFor="followUpDate" className="block text-sm font-medium text-gray-700 mb-2">Follow-up Date</label>

            <DateTimeProvider initialDate={followUpDate}>

                <DatePickerProvider initialDate={followUpDate}>

                    <DatePickerWrapper />

                </DatePickerProvider>

            </DateTimeProvider>
        
        </>

    )

}

export default FollowUpDateInput