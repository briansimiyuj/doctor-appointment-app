import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const ProfileImage: React.FC = () =>{
   
    const context = useContext(ProfileContext)

    if(!context) return null

    const { profileImage  } = context

    if(profileImage instanceof File) return

    return(

        <img src={profileImage?.content ? profileImage?.content : ""} alt="profile-image" className="w-full h-full rounded-full object-cover"/>
        
    )
}

export default ProfileImage