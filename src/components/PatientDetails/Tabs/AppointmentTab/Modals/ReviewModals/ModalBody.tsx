import { FaStar } from "react-icons/fa"
import { useDoctorReviewsContext } from "../../../../../../context/DoctorReviewsContext"

const ModalBody: React.FC = () =>{
 
    const { ratings, setRatings, comment, setComment } = useDoctorReviewsContext()

    const handleStarClick = (rating: number) =>{

        setRatings(rating)

    }

    return(

        <div className="space-y-6 mt-4">
            
            <div className="space-y-2">

                <label className="block text-sm font-medium text-gray-700">Your Rating</label>

                <div className="flex gap-2">

                    {
                    
                        [1, 2, 3, 4, 5].map((star) =>(

                            <button
                                key={star}
                                type="button"
                                onClick={() => handleStarClick(star)}
                                className="transition-transform hover:scale-110 focus:outline-none"
                            >

                                <FaStar
                                    size={32}
                                    className={`${
                                        star <= ratings
                                            ? "fill-yellow-400 text-yellow-400"
                                            : "text-gray-300 dark:text-gray-600"
                                    } transition-colors`}
                                />

                            </button>

                        ))
                        
                    }

                </div>
              
                {
                
                    ratings > 0 &&(

                        <p className="text-sm text-gray-600">

                            You rated {ratings} star{ratings > 1 ? 's' : ''}

                        </p>

                    )
                    
                }

            </div>


            <div className="space-y-2">

                <label 
                    htmlFor="review-comment" 
                    className="block text-sm font-medium text-gray-700"
                >Your Review</label>

                <textarea
                    id="review-comment"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Share your experience with this doctor..."
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                />

                <p className="text-xs text-gray-500">{comment.length} characters</p>

            </div>

        </div>
        
    )

}

export default ModalBody