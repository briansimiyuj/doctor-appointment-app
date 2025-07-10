interface SectionHeaderProps{

    average: number,
    total: number,

}

const SectionHeader: React.FC<SectionHeaderProps> = ({ average, total }) => {

    return(

        <div className="mb-4">

            <h2 className="text-xl font-semibold mb-2">Patient Reviews & Ratings</h2>
   
            <div className="flex items-center">

                <div className="text-3xl font-bold mr-2">{average} ⭐</div>

                <div className="text-gray-500">{total} reviews</div>

            </div>

        </div>

    )

}

export default SectionHeader