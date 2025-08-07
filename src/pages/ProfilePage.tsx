import { useContext } from "react"
import ProfileImage from "../components/Profile/ProfileImage"
import ProfileInfo from "../components/Profile/ProfileInfo"
import { ProfileContext } from "../context/ProfileContext"
import { LoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"
import AddProfileModaL from "../components/Profile/Modals/AddProfile/AddProfileModaL"

const ProfilePage: React.FC = () =>{

    const profileContext = useContext(ProfileContext),
          loginContext = useContext(LoginContext)

    if(!profileContext || !loginContext) return null

    const { showModal, setShowModal, setIsEditing, profile } = profileContext,
          { isAuthenticated } = loginContext

    if(!isAuthenticated) return <NotFoundPage/>

    return(

        <>

            {

                profile === null ?(

                    <div className="flex flex-col items-center justify-center gap-y-2.5 text-neutral-700 min-h-[200px]">

                        <h3 className="font-semibold text-lg lg:text-2xl text-center">No profile data available</h3>

                        <p className="text-gray-400 text-base lg:text-lg text-center">Please complete your profile information.</p>

                        <button
                            className="bg-primary-btn p-2 px-6 text-secondary-bg cursor-pointer rounded-md shadow-md hover:bg-blue-700 transition-colors duration-200 font-semibold focus:outline-none focus:ring-2 focus:ring-primary-btn focus:ring-offset-2"
                            onClick={() => setShowModal(true)}
                        >Add Profile</button>

                        { showModal && <AddProfileModaL/> }
                        
                    </div>

                ):(


                    showModal ?(

                        <AddProfileModaL/>

                    ):(

                        <div className="max-w-lg flex flex-col gap-2 text-sm lg:text-base lg:m-auto">

                            <div className="flex justify-between items-center px-8">

                                <div className="flex items-center gap-4">

                                    <ProfileImage/>

                                </div>


                                <button 
                                    className="bg-primary-btn p-2 text-secondary-bg cursor-pointer rounded-md"
                                    onClick={() =>{
                                        setShowModal(true)
                                        setIsEditing(true)
                                    }}
                                >Edit Profile</button>

                            </div>


                            <ProfileInfo/>

                        </div>

                    )

                )



            }
            
        </>

    )

}

export default ProfilePage