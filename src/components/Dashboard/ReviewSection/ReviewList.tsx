import { useState } from "react"
import { ReviewType } from "../../../assets/types/ReviewType"
import ReviewItem from "./ReviewItem"

interface ReviewListProps{

    reviews: ReviewType[]

}

const ReviewList: React.FC<ReviewListProps> = ({ reviews })=>{

    const [visibleCount, setVisibleCount] = useState(3)

    const loadMoreReviews = () =>{
    
       setVisibleCount(prev => prev + 3)
    
    }

    const visibleReviews = reviews.slice(0, visibleCount)

    return(

        <div className="space-y-4 overflow-y-auto">

            {

                visibleReviews.map(review =>(

                    <ReviewItem key={review._id} review={review}/>

                ))

            }

            {

                visibleCount < reviews.length &&(

                    <button
                        className="px-4 py-2 bg-primary-btn text-white dark:text-white rounded hover:bg-blue-700 transition"
                        onClick={loadMoreReviews}
                    >Load more reviews</button>

                )

            }

        </div>


    )

}

export default ReviewList