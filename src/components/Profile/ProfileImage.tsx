import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const ProfileImage: React.FC = () =>{
   
    const context = useContext(ProfileContext)

    if(!context) return null

    const { profileImageURL } = context

    return(

        <img src={profileImageURL ? profileImageURL : ""} alt="profile-image" className="w-24 rounded-full object-cover"/>
        
    )
}

export default ProfileImage