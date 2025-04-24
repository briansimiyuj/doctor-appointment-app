const DayNames: React.FC = ()=>{

    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return(

        <div className="grid grid-cols-7 gap-1 mb-2">

            {

                dayNames.map(day =>(

                    <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-gray-500">
                    
                        {day}

                    </div>

                ))

            }

        </div>

    )

}

export default DayNames