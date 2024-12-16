import { useContext } from "react"
import ProfileImage from "../components/Profile/ProfileImage"
import ProfileInfo from "../components/Profile/ProfileInfo"
import { ProfileContext } from "../context/ProfileContext"
import EditProfileModal from "../components/Profile/EditProfileModal"

const ProfilePage: React.FC = ()=>{

    const context = useContext(ProfileContext)

    if(!context) return null

    const { isEditing, setIsEditing } = context

    return(

        <>

            {

                isEditing ?(

                    <EditProfileModal/>

                ):(


                    <div className="max-w-lg flex flex-col gap-2 text-sm lg:text-base lg:m-auto">

                        <div className="flex justify-between items-center px-8">

                            <ProfileImage/>

                            <button 
                                className="bg-primary-bg p-2 text-secondary-bg cursor-pointer rounded-md"
                                onClick={()=>setIsEditing(true)}
                            >Edit Profile</button>

                        </div>


                        <ProfileInfo/>

                    </div>

                )

            }

        </>

    )

}

export default ProfilePage