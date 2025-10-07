interface CountBadgeProps{

    count: number

}

const CountBadge: React.FC<CountBadgeProps> = ({ count }) =>{

    return(

        <span 
            className="ml-2 px-2 py-0.5 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
        >{count}</span>

    )

}

export default CountBadge