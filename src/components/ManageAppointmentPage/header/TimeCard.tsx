interface TimeCardProps{

    icon: React.ReactNode
    label: string
    value: string | number
    valueClass?: string

}

const TimeCard: React.FC<TimeCardProps> = ({ icon, label, value, valueClass = 'text-gray-800' }) =>{

    return(

        <div className="flex flex-col items-center">

            {icon}

            <span className="text-xs text-gray-500">{label}</span>

            <span className={`font-medium ${valueClass}`}>{value}</span>

        </div>
    
    )

}

export default TimeCard
