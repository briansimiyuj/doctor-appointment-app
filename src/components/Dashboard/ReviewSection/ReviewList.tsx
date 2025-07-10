import { ReviewType } from "../../../assets/types/ReviewType"
import ReviewItem from "./ReviewItem"

interface ReviewListProps{

    reviews: ReviewType[]

}

const ReviewList: React.FC<ReviewListProps> = ({ reviews })=>{

    return(

        <div className="space-y-4 max-h-72 overflow-y-auto">

            {

                reviews.map(review =>(

                    <ReviewItem key={review._id} review={review}/>

                ))

            }

        </div>


    )

}

export default ReviewList