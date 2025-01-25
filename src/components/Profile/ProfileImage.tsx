import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const ProfileImage: React.FC = () =>{
   
    const context = useContext(ProfileContext),
         profileImage = context?.profile?.image

    return(

        <img src={profileImage} alt="profile-image" className="w-24 rounded-full object-cover"/>
        
    )
}

export default ProfileImage