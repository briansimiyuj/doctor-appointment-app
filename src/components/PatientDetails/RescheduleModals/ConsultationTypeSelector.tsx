import { useRescheduleModal } from "../../../context/RescheduleModalContext"

const ConsultationTypeSelector: React.FC = ()=>{

    const { consultationType, setConsultationType } = useRescheduleModal()

    return(

        <div className="mb-6">

            <label className="block text-gray-700 text-sm font-medium mb-2">Select Consultation Type:</label>

            <div className="bg-white rounded-lg shadow p-4 pt-2 ">

                <div className="flex justify-around gap-4">

                    <label className={`flex items-center cursor-pointer gap-2 border rounded-md px-4 py-2 ${consultationType === "online" ? "bg-primary-bg text-white" : "hover:bg-gray-50"}`}>

                        <input
                            type="radio"
                            name="consultationType"
                            checked={consultationType === "online"}
                            onChange={() => setConsultationType("online")}
                            className="form-radio w-5"
                        />

                        <span className={`${consultationType === "online" ? "text-white" : "text-gray-700"}`}>Online</span>    

                    </label>

                    <label className={`flex items-center cursor-pointer gap-2 border rounded-md px-4 py-2 ${consultationType === "in-person" ? "bg-primary-bg text-white" : "hover:bg-gray-50"}`}>

                        <input
                            type="radio"
                            name="consultationType"
                            checked={consultationType === "in-person"}
                            onChange={() => setConsultationType("in-person")}
                            className="form-radio w-5"
                        />

                        <span className={`${consultationType === "in-person" ? "text-white" : "text-gray-700"}`}>In-Person</span>    

                    </label>

                </div>

            </div>

        </div>

    )

}

export default ConsultationTypeSelector