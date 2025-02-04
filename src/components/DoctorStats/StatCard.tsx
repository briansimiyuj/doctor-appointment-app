interface StatCardProps{

    title: string
    value: number

}

const StatCard: React.FC<StatCardProps> = ({ title, value }) =>{

    return(

        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm">

            <h3 className="text-gray-500 text-sm">{title}</h3>

            <p className="text-3xl font-bold text-primary-bg mt-2">{value}</p>

        </div>

    )

}

export default StatCard