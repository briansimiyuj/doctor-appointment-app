import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const CoverImage: React.FC = ()=>{

    const context = useContext(ProfileContext),
         profile = context?.profile

    if(!profile) return null

    if(profile?.type === "patient") return
    
    const { coverImage } = profile

    if(coverImage instanceof File) return 

    return(

        <div className="mt-5">

            <h2 className="text-neutral-500 underline mt-3 mb-3">COVER IMAGE</h2>

            <img src={coverImage? coverImage.content : ""}alt="Cover Image" className="w-full h-30 object-cover"/>

        </div>

    )

}

export default CoverImage