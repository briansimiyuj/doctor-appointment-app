const AppointmentTabHeader: React.FC = ()=>{

    return(

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 border-b pb-4">

            <h3 className="text-lg font-semibold">

                <span className="border-b-2 border-primary-bg pb-1">Appointments</span>

            </h3>

            <button className="px-4 py-2 bg-primary-bg text-white rounded-md hover:bg-primary-bg-darker transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">

                <span className="flex items-center justify-center gap-2">

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>

                    Reschedule Appointment</span>
                    
            </button>

        </div>

    )

}

export default AppointmentTabHeader