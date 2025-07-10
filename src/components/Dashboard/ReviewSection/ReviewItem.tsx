import { ReviewType } from "../../../assets/types/ReviewType"

interface ReviewItemProps{

    review: ReviewType

}

const ReviewItem: React.FC<ReviewItemProps> = ({ review })=>{

    return(

        <div className="block">

            <div className="flex justify-between w-full">

                <img
                    src={review.patientImage}
                    alt={`${review.patientName} Image`}
                    className="w-10 h-10 rounded-full mr-2"
                />

                <div className="flex flex-col w-1/4">

                    <div className="font-semibold">{review.patientName}</div>
        
                    <div className="text-sm text-gray-500">{review.createdAt}</div>
                
                </div>

                <p className="text-gray-700 ml-5">{review.comment}</p>

            </div>

            <div className="text-yellow-500 mt-5">

                {"⭐️".repeat(review.ratings)}
            
            </div>
            

        </div>

    )

}

export default ReviewItem