import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const CoverImage: React.FC = ()=>{

    const context = useContext(ProfileContext),
         profile = context?.profile

    return(

        <div className="mt-5">

            <h2 className="text-neutral-500 underline mt-3 mb-3">COVER IMAGE</h2>

            <img src={profile?.coverImage}alt="Cover Image" className="w-full h-30 object-cover"/>

        

        </div>

    )

}

export default CoverImage