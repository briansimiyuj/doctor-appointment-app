import { FaStar, FaEdit, FaTrash } from "react-icons/fa"
import { useUpdatePatientDetails } from "../../../../../../../hooks/useUpdatePatientDetails"
import { useDoctorReviewsContext } from "../../../../../../../context/DoctorReviewsContext"
import { ReviewType } from "../../../../../../../assets/types/ReviewType"
import { useProfileContext } from "../../../../../../../context/ProfileContext"

const renderStars = (rating: number) =>{

    const fullStars = Math.floor(rating),
          stars = []

    for(let i = 0; i < 5; i++){

        stars.push(

            <FaStar
                key={i}
                className={i < fullStars ? 'text-yellow-500' : 'text-gray-300'}
            />

        )

    }

    return <div className="flex space-x-0.5">{stars}</div>

}

const ModalBody: React.FC = () =>{

    const { appointmentToViewReviews } = useUpdatePatientDetails(),
          { reviews, deleteReview } = useDoctorReviewsContext(),
          { profile } = useProfileContext(),
          imageSrc = appointmentToViewReviews?.patient.patientInfo.profileImage.content,
          patientName = appointmentToViewReviews?.patient.patientInfo.name || "Patient",
          isPatientView = profile?.type === "patient"

    if(!appointmentToViewReviews){

        return <p className="text-center text-gray-500">Error: No appointment selected for review view.</p>

    }

    const targetReview: ReviewType | undefined = reviews.find(

        (review) => review.appointmentID === appointmentToViewReviews._id

    )

    if(!targetReview){

        return(

            <div className="p-4 text-center">

                <p className="text-lg font-semibold text-red-500">Review Not Found</p>

                <p className="text-sm text-gray-600">The review for this appointment could not be loaded.</p>

            </div>
           
        )

    }

    const handleEdit = () =>{

        console.log('Edit review:', targetReview._id)

    }

    const handleDelete = () =>{

        if(window.confirm('Are you sure you want to delete this review?')){

            deleteReview(targetReview._id)

        }

    }

    return(

        <div className="p-4 space-y-4">

            <h2 className="text-xl font-bold text-gray-800 border-b pb-2">
                {isPatientView ? `Your Review for Dr. ${appointmentToViewReviews.doctor.doctorInfo.name}` : `Review from ${patientName}`}
            </h2>
           
            <div className="flex items-center space-x-3">

                <img src={imageSrc} className="w-12 h-12 rounded-full" alt={patientName}/>

                <div className="flex-1">

                    <p className="font-medium text-gray-700">{patientName}</p>

                    <div className="text-sm text-gray-500">

                        Appointment Date: {new Date(appointmentToViewReviews.date).toLocaleDateString()}
                       
                    </div>

                </div>


            </div>

            <div className="bg-gray-50 p-3 rounded-lg border">

                <div className="flex items-center justify-between mb-2">

                    <span className="text-lg font-semibold text-gray-800">Rating:</span>

                    {renderStars(targetReview.ratings)}

                </div>
               
                <div className="space-y-1">

                    <p className="text-sm font-semibold text-gray-700">Reviews:</p>

                    <p className="text-gray-600 italic leading-relaxed">{targetReview.comment || "No comment provided."}</p>

                </div>

            </div>

            {
                
                isPatientView && (

                    <div className="flex space-x-2 justify-end">

                        <button
                            type="button"
                            onClick={handleEdit}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Edit Review"
                        >
                            <FaEdit size={18}/>
                        </button>

                        <button
                            type="button"
                            onClick={handleDelete}
                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Delete Review"
                        >
                            <FaTrash size={18}/>
                        </button>

                    </div>

                )
            
            }

        </div>
       
    )

}

export default ModalBody