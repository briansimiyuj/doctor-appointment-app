import { ReviewType } from "../../../assets/types/ReviewType"

interface ReviewItemProps{

    review: ReviewType

}

const ReviewItem: React.FC<ReviewItemProps> = ({ review })=>{

    if(review.patientImage instanceof File) return null

    return(

        <div className="block">

            <div className="flex justify-between w-full flex-col p-1">

                <div className="flex items-center">

                    <img
                        src={review.patientImage?.content}
                        alt={`${review.patientName} Image`}
                        className="w-10 h-10 rounded-full mr-2"
                    />
                    
                    <div className="flex sm:gap-5 w-full flex-col sm:flex-row">
                       
                        <p className="font-semibocld">{review.patientName}</p>
                        
                        <p className="text-sm text-gray-500">{review.createdAt}</p>        
                    
                    </div>

                </div> 

                <div className="text-yellow-500 mt-5">

                    {"⭐️".repeat(review.ratings)}
                
                </div>
                <p className="text-gray-700 mt-5">{review.comment}</p>

            </div>

            

        </div>

    )

}

export default ReviewItem