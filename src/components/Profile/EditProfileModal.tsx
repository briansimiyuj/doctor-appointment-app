import { useContext } from "react"
import { assets } from "../../assets/frontend/assets"
import { ProfileContext } from "../../context/ProfileContext"
import EditForm from "./EditForm"

const EditProfileModal: React.FC = ()=>{

    const context = useContext(ProfileContext)

    if(!context) return null

    const { setIsEditing } = context

    return(

        <>

            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

        
            <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white w-[90%] sm:w-[70%] md:w-[70%] lg:w-[60%] max-w-2xl rounded-lg p-6 shadow-lg shadow-gray-400 z-50">

                <div className="relative flex justify-center mb-12">

                    <img 
                        src={assets.crossIcon} 
                        alt="cross icon" 
                        className="absolute top-0 right-2 cursor-pointer w-10"
                        onClick={()=>setIsEditing(false)}
                    />

                </div>


            <EditForm/>

        </div>

        </>

    )

}

export default EditProfileModal