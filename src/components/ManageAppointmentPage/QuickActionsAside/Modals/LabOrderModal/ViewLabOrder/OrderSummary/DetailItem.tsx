interface  DetailItemProps{

    label: string
    value: string | undefined

}

const DetailItem: React.FC<DetailItemProps> = ({ label, value })=>{

    return(

        <div className="flex justify-between border-b border-gray-100 py-2">

            <span className="text-sm font-semibold to-gray-500">{label}</span>

            <span className="text-sm font-semibold text-gray-800 break-words max-w-[60%] text-right">{value || "N/A"}</span>

        </div>

    )

}

export default DetailItem