import ProfileImage from "../components/Profile/ProfileImage"
import ProfileInfo from "../components/Profile/ProfileInfo"

const ProfilePage: React.FC = ()=>{

    return(

        <div className="max-w-lg flex flex-col gap-2 text-sm">

            <ProfileImage/>

            <ProfileInfo/>

        </div>

    )

}

export default ProfilePage