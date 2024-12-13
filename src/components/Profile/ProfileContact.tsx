import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const ProfileContact: React.FC = () =>{

    const context = useContext(ProfileContext),
         userData = context?.userData

    return(

        <div>

            <h2 className="text-neutral-500 underline mt-3">CONTACT INFORMATION</h2>

            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">

                <h3 className="font-medium">Email:</h3>

                <p className="text-blue-500">{userData?.address.email}</p>

                <h3 className="font-medium">Phone:</h3>

                <p className="text-blue-400">{userData?.address.phone}</p>

                <h3 className="font-medium">Address:</h3>

                <p className="text-gray-500">

                    {userData?.address.line1}

                    <br/>

                    {userData?.address.line2}

                </p>

            </div>

        </div>

    )

}

export default ProfileContact