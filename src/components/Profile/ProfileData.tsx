import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"
import CoverImage from "./CoverImage"

const ProfileData: React.FC = () => {

    const context = useContext(ProfileContext)

    if(!context) return null

    const { profile, licenseCertificateURL } = context

    return(

        <div>

            {

                profile?.type === 'doctor' ?(

                    <>
                
                        <div>
                        
                            <h2 className="text-neutral-500 underline mt-3">PROFESSIONAL DETAILS</h2>

                            <div className="grid grid-cols-[1fr_3fr] gap-3   gap-y-2.5 mt-3 text-neutral-700">

                                <h3 className="font-medium">Specialization:</h3>

                                <p className="text-gray-400">{profile.speciality}</p>
                        
                                <h3 className="font-medium">Experience:</h3>
                        
                                <p className="text-gray-400">{profile.experience}</p>

                                <h3 className="font-medium">Education:</h3>
                        
                                <p className="text-gray-400">{profile.education}</p>

                                <h3 className="font-medium">Fees:</h3>
                        
                                <p className="text-gray-400">${profile.fees}</p>

                                <h3 className="font-medium">Rating:</h3>
                        
                                <p className="text-gray-400">{profile.rating}</p>

                                <h3 className="font-medium">About:</h3>

                                <p className="text-gray-400">{profile.about}</p>

                                <h3 className="font-medium">License Certificate:</h3>

                                <a href={licenseCertificateURL ? licenseCertificateURL : ""} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">View License</a>

                            </div>

                        </div>


                        <CoverImage/>

                    </>

                ):(
                    
                    <div>

                        <h2 className="text-neutral-500 underline mt-3">MEDICAL HISTORY</h2>

                        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">

                            <p className="font-medium">{profile ? profile.medicalHistory : "No medical history available."}</p>

                        </div>

                    </div>

                )

            }

        </div>

    )

}

export default ProfileData