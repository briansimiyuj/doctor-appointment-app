import { useDoctorStats } from "../../../context/DoctorStatsContext"
import ReviewList from "./ReviewList"
import SectionHeader from "./SectionHeader"

const ReviewsSection: React.FC = ()=>{

    const { ratings, reviews } = useDoctorStats()

    return(

        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 mt-5">

            <SectionHeader average={ratings.average} total={ratings.total}/>

            <ReviewList reviews={reviews}/>


        </div>

    )

}

export default ReviewsSection