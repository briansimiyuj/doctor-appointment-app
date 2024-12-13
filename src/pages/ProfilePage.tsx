import ProfileImage from "../components/Profile/ProfileImage"
import ProfileInfo from "../components/Profile/ProfileInfo"

const ProfilePage: React.FC = ()=>{

    return(

            <div className="max-w-lg flex flex-col gap-2 text-sm">

                <div className="flex justify-around items-center">

                    <ProfileImage/>

                    <button className="bg-primary-bg p-2 text-secondary-bg cursor-pointer rounded-md">Edit Profile</button>

                </div>


            <ProfileInfo/>

        </div>

    )

}

export default ProfilePage