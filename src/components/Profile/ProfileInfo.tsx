import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"
import ProfileContact from "./ProfileContact"
import BasicInfo from "./BasicInfo"
import ProfileData from "./ProfileData"

const ProfileInfo: React.FC = () =>{

    const context = useContext(ProfileContext),
         profile = context?.profile

    return(

        <>

            <p className="font-medium text-3xl mt-4 text-neutral-800">{profile?.name}</p>

            <hr className="bg-zinc-400 h-[1px] border-none"/>

            <ProfileContact/>

            <BasicInfo/>

            <ProfileData/>

        </>

    )
}

export default ProfileInfo
