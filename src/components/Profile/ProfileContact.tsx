import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"

const ProfileContact: React.FC = () =>{

    const context = useContext(ProfileContext),
         userData = context?.profile

    return(

        <div>

            <h2 className="text-neutral-500 underline mt-3">CONTACT INFORMATION</h2>

            <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">

                <h3 className="font-medium">Email:</h3>

                <p className="text-blue-500">{userData?.addressValue?.email}</p>

                <h3 className="font-medium">Phone:</h3>

                <p className="text-blue-400">{userData?.addressValue.phone}</p>

                {

                    userData?.type === "doctor" ?(

                        <>

                            <h4 className="font-medium">Hospital:</h4>

                            <p>{userData?.hospital}</p>

                            <h4 className="font-medium">Hospital Location:</h4>

                            <p>{userData?.hospitalLocation}</p>

                        </> 
                        

                    ):(

                        <>
                        
                            <h4 className="font-medium">Residence:</h4>
                            
                            <p>{userData?.addressValue?.residence}</p>

                            <h4 className="font-medium">City:</h4>

                            <p>{userData?.addressValue?.city}</p>

                            {

                                userData?.addressValue?.state &&(

                                    <>
                                        
                                        <h4 className="font-medium">State:</h4>

                                        <p>{userData?.addressValue?.state}</p>

                                    </>

                                )

                            }

                            <h4 className="font-medium">Country:</h4>

                            <p>{userData?.addressValue?.country}</p>
                        
                        
                        </>

                    )

                }


            </div>

        </div>

    )

}

export default ProfileContact