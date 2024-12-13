import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const BasicInfo: React.FC = () => {

    const context = useContext(ProfileContext),
         userData = context?.userData

    return(

        <div>

            <h2 className="text-neutral-500 underline mt-3">BASIC INFORMATION</h2>

            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">

                <h3 className="font-medium">Gender:</h3>

                <p className="text-gray-400">{userData?.gender}</p>

                <h3 className="font-medium">Date of Birth:</h3>

                <p className="text-gray-400">{userData?.DOB}</p>

            </div>

        </div>

    )

}

export default BasicInfo
