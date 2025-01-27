import { useContext } from "react"
import ProfileImage from "../components/Profile/ProfileImage"
import ProfileInfo from "../components/Profile/ProfileInfo"
import { ProfileContext } from "../context/ProfileContext"
import EditProfileModal from "../components/Profile/EditProfileModal"
import { LoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"

const ProfilePage: React.FC = () =>{

    const profileContext = useContext(ProfileContext),
          loginContext = useContext(LoginContext)

    if(!profileContext || !loginContext) return null

    const { isEditing, setIsEditing } = profileContext,
          { isAuthenticated } = loginContext

    return(

        <>

            {
                isAuthenticated ?(

                    <>

                        {

                            isEditing ?(

                                <EditProfileModal/>

                            ):(

                                <div className="max-w-lg flex flex-col gap-2 text-sm lg:text-base lg:m-auto">

                                    <div className="flex justify-between items-center px-8">

                                        <div className="flex items-center gap-4">

                                            <ProfileImage/>

                                        </div>


                                        <button 
                                            className="bg-primary-bg p-2 text-secondary-bg cursor-pointer rounded-md"
                                            onClick={() => setIsEditing(true)}
                                        >Edit Profile</button>

                                    </div>


                                    <ProfileInfo/>

                                </div>

                            )

                        }
                        
                    </>

                ):(

                    <NotFoundPage/>

                )

            }

        </>

    )

}

export default ProfilePage