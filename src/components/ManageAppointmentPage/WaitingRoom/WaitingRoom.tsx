import AppointmentDetails from "./AppointmentDetails"
import PatientHeader from "./PatientHeader"

const WaitingRoom: React.FC = ()=>{

    return(

        <div className="space-y-4">

            <PatientHeader/>

            <AppointmentDetails/>
            
        </div>

    )

}

export default WaitingRoom