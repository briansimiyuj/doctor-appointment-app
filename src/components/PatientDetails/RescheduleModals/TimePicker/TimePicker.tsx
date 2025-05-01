import SelectedTimeDisplay from "./SelectedTimeDisplay"

const TimePicker: React.FC = ()=>{

    return(

        <div className="mb-4">

            <label className="block text-gray-700 text-sm font-medium mb-2">Select New Time:</label>

            <div className="bg-white p-4 rounded-lg shadow-md">

                <SelectedTimeDisplay/>

            </div>

        </div>

    )

}

export default TimePicker