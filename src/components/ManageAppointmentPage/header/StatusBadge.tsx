interface StatusBadgeProps{

    status: string
    colorClass: string

}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, colorClass }) =>{

    return(

        <div className={`px-3 py-1 text-sm font-semibold text-white dark:text-white rounded-full ${colorClass}`}>{status}</div>

    )

}

export default StatusBadge
