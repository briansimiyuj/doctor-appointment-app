import { FaMapMarker } from "react-icons/fa"
import { useNavigate } from "react-router-dom"

const ContactInfo:React.FC = () =>{

    const navigate = useNavigate()

    return(

        <div className="flex flex-col justify-center items-start gap-6">

            <h2 className="font-semibold text-lg to-gray-600">OUR OFFICE</h2>

            <div className="flex items-center gap-1">

                <FaMapMarker className="inline-block mr-2 text-red-500 text-xl"/>
                
                <p className="text-gray-500">Lumumba Drive, Roysambu, Nairobi</p>

            </div>

            <p className="text-gray-500">

                <a href="tel: +254 123 456 789">0123456789</a>

                <br />

                <a href="mailto: info@medicarehub.co.ke">info@medicarehub.co.ke</a>

            </p>


            <p className="text-gray-500">Mon-Fri: 8am-5pm <br/> Sat-Sun: 8am-2pm</p>

            <h2 className="font-semibold text-lg text-gray-600">Careers at MediCare Hub</h2>

            <p className="text-gray-500">If you are interested in joining our team, please send us your CV to careers@medicarehub.co.ke</p>

            <button
                className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500"
                onClick={() => navigate("/careers")}
            >Explore Careers</button>

        </div>

    )

}

export default ContactInfo