import { useNavigate } from "react-router-dom"

const LeftBannerSide: React.FC = ()=>{

    const navigate = useNavigate()

    return(

        <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">

            <div className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold banner-text">

                <h3>Book Appointment</h3>

                <h2 className="mt-4">With 100+ Trusted Doctors</h2>

            </div>

            <button 
                className="bg-white text-sm sm:text-base text-gray-600 px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all"
                onClick={() => navigate("/login")}
            >Create Account</button>
            
        </div>

    )

}

export default LeftBannerSide