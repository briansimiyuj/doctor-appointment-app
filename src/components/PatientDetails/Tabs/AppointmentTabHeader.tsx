import TabActionButton from "./TabActionButton"

const AppointmentTabHeader: React.FC = ()=>{

    return(

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 border-b pb-4">

            <h3 className="text-lg font-semibold">

                <span className="border-b-2 border-primary-bg pb-1">Appointments</span>

            </h3>

            <TabActionButton/>

        </div>

    )

}

export default AppointmentTabHeader