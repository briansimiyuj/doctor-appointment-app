import { useContext, useEffect } from "react"
import { BookingContext } from "../../context/BookingContext"
import { assets } from "../../assets/frontend/assets"
import { CurrencyContext } from "../../context/CurrencyContext"
import { useDoctorReviewsContext } from "../../context/DoctorReviewsContext"
import { FaStar } from "react-icons/fa"

const DoctorInfo: React.FC = ()=>{

    const { doctorInfo } = useContext(BookingContext),
          { currencySymbol } = useContext(CurrencyContext),
          { reviews, getDoctorReviews, averageRating, totalReviews, ratingDistribution, loading } = useDoctorReviewsContext()

    useEffect(() =>{

        if(doctorInfo?._id){

            getDoctorReviews(doctorInfo._id)

        }

    }, [doctorInfo?._id])

    const getPatientImageSrc = (patientImage: any): string =>{

        if(!patientImage) return 'https://placehold.co/40x40'

        if(typeof patientImage === 'string') return patientImage

        if(patientImage.content) return patientImage.content

        return 'https://placehold.co/40x40'

    }

    return(

        <div className="flex-1 border-gray-400 border rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">

            <h2 className="flex items-center gap-2 text-2xl font-medium text-gray-900">
                
                {doctorInfo?.name}

                <img src={assets.verifiedIcon} alt="verified icon" className="w-5 h-5"/>
            
            </h2>

            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            
                <p>{doctorInfo?.education} - {doctorInfo?.speciality}</p>

                <button className="py-0.5 px-2 border text-xs rounded-full border-gray-400">{doctorInfo?.experience}</button>
            
            </div>

            <div className="mt-3">

                <p className="flex items-center gap-1 text-sm font-medium text-gray-900">About <img src={assets.infoIcon} alt="info_icon"/></p>

                <p className="text-sm text-gray-500 max-w-[700px] mt-1">{doctorInfo?.about}</p>

            </div>

            <div className="mt-3">

                <p className="text-gray-500 font-medium">Hospital: <span className="text-gray-600">{doctorInfo?.address.hospital}</span></p>

                <p className="text-gray-500 font-medium mt-1">Location: <span className="text-gray-600">{doctorInfo?.address.hospitalLocation}</span></p>

            </div>

            <div className="mt-4">

                <p className="text-gray-500 font-medium">Appointment Fee: <span className="text-gray-600">{currencySymbol}{doctorInfo?.fees}</span></p>

            </div>

            <div className="mt-4">

                <p className="text-gray-900 font-semibold text-lg mb-2">Patient Reviews</p>
                
                {

                    loading ?(

                        <p className="text-sm text-gray-500">Loading reviews...</p>

                    ): totalReviews > 0 ?(

                        <>
                        
                            <div className="flex items-center gap-3 mb-3">

                                <div className="flex items-center gap-1">

                                    <FaStar className="text-yellow-500" size={20}/>

                                    <span className="text-2xl font-bold text-gray-900">{averageRating}</span>

                                </div>

                                <span className="text-sm text-gray-600">({totalReviews} {totalReviews === 1 ? 'review' : 'reviews'})</span>

                            </div>

                            <div className="mb-4 space-y-1">

                                {

                                    [5, 4, 3, 2, 1].map(star =>{

                                        const count = ratingDistribution[star] || 0,
                                              percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0
                                        
                                        return(

                                            <div key={star} className="flex items-center gap-2 text-sm">

                                                <span className="w-8 text-gray-600">{star}⭐</span>

                                                <div className="flex-1 bg-gray-200 rounded-full h-2">

                                                    <div 
                                                        className="bg-yellow-500 h-2 rounded-full transition-all duration-300"
                                                        style={{ width: `${percentage}%` }}
                                                    />

                                                </div>

                                                <span className="w-8 text-gray-600 text-right">{count}</span>

                                            </div>

                                        )

                                    })

                                }

                            </div>

                            <div className="space-y-3 mt-4">

                                {

                                    reviews.map((review) =>(

                                        <div key={review._id} className="border-b border-gray-200 pb-3">

                                            <div className="flex items-start gap-3">

                                                <img 
                                                    src={getPatientImageSrc(review.patientImage)} 
                                                    alt={review.patientName} 
                                                    className="w-10 h-10 rounded-full object-cover"
                                                />

                                                <div className="flex-1">

                                                    <div className="flex items-center justify-between">

                                                        <p className="text-sm font-semibold text-gray-900">{review.patientName}</p>

                                                        <div className="flex items-center gap-1">

                                                            <FaStar className="text-yellow-500" size={14}/>

                                                            <span className="text-sm font-medium text-gray-700">{review.ratings}</span>

                                                        </div>

                                                    </div>

                                                    <p className="text-xs text-gray-500 mt-0.5">{new Date(review.createdAt).toLocaleDateString()}</p>

                                                    {

                                                        review.comment && (

                                                            <p className="text-sm text-gray-600 mt-2 leading-relaxed">{review.comment}</p>

                                                        )

                                                    }

                                                </div>

                                            </div>

                                        </div>

                                    ))

                                }

                            </div>
                        
                        </>

                    ):(

                        <p className="text-sm text-gray-500">No reviews yet. Be the first to review!</p>

                    )

                }

            </div>

        </div>

    )

}

export default DoctorInfo