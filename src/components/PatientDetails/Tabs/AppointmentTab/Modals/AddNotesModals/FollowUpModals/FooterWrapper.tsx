import { useDateTime } from "../../../../../../../context/DateTimeContext"
import { useScheduleAppointmentContext } from "../../../../../../../context/ScheduleAppointmentContext"

interface FooterProps{

    onCancel: () => void
    onSave: (date: string, time: string, consultationType: "in-person" | "online") => void
    initialDate: string
    initialTime: string
    initialConsultationType: "in-person" | "online"

}

interface FooterButtonProps{
    
    onCancel: () => void
    onSave: (date: string, time: string, consultationType: "in-person" | "online") => void
    disabled?: boolean

}

const FooterWrapper: React.FC<FooterProps> = ({ onCancel, onSave, initialDate, initialTime, initialConsultationType }) =>{

    const { date, time } = useDateTime(),
          { consultationType } = useScheduleAppointmentContext()

    const isUnchanged = (date === initialDate && time === initialTime && consultationType === initialConsultationType)

    return(

        <Footer 
            onCancel={onCancel}
            onSave={() => onSave(date ? date : "", time ? time : "", consultationType ?? "in-person")}
            disabled={isUnchanged}
        />

    )

}

export default FooterWrapper


const Footer: React.FC<FooterButtonProps> = ({ onCancel, onSave, disabled }) => {

    const { date, time } = useDateTime(),
          { consultationType } = useScheduleAppointmentContext()

    return(

        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-3">

           <button 
                className="bg-gray-200 text-gray-600 px-4 py-2 rounded-md"
                onClick={onCancel}
            >Cancel</button>

            <button 
                className={`bg-primary-bg text-white px-4 py-2 rounded-md ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
                onClick={() => onSave(date ? date : "", time ? time : "", consultationType ?? "in-person")}
                disabled={disabled}
            >Confirm Follow-Up</button>

        </div>

    )

}