import { useContext } from "react"
import { BookingContext } from "../../context/BookingContext"
import { assets } from "../../assets/frontend/assets"
import { CurrencyContext } from "../../context/CurrencyContext"

const DoctorInfo: React.FC = ()=>{

    const { doctorInfo } = useContext(BookingContext),
          { currencySymbol } = useContext(CurrencyContext)

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

                <p className="text-gray-500 font-medium">Patients Reviews:</p>

                {

                    doctorInfo?.reviews.map((review, index) =>(

                        <div key={index} className="flex items-center gap-2 mt-2">

                            <img src={review.patientImage} alt={review.patientName} className="w-8 h-8 rounded-full"/>
                            
                            <div>
                            
                                <p className="text-sm font-medium">{review.patientName}</p>
                                <p className="text-sm text-gray-500">{review.comment}</p>

                            </div>

                            <span className="ml-auto text-sm text-yellow-500">⭐ {review.ratings}</span>
                            
                        </div>


                    ))

                }

            </div>

        </div>

    )

}

export default DoctorInfo