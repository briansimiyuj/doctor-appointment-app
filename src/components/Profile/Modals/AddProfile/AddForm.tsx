import { useContext, useRef } from "react"
import { assets } from "../../../../assets/frontend/assets"
import { LoginContext } from "../../../../context/LoginContext"
import AddFormInput from "./AddFormInput"

const AddForm: React.FC = ()=>{

    const fileInputRef = useRef<HTMLInputElement>(null),
          loginContext = useContext(LoginContext)

    if(!loginContext) return null

    const { userType } = loginContext

    return(

        <form className="flex flex-col gap-8 items-center justify-center w-full max-w-3xl mx-auto p-6">

            <div className="w-full flex flex-col items-center gap-4">

                <div className="relative group rounded-lg overflow-hidden cursor-pointer">

                    <img 
                        src={assets.uploadIcon}
                        alt="upload icon" 
                        className="w-full h-12 sm:h-24 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-gray-400 dark:bg-gray-600"
                    />

                    <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                        <span className="text-white text-sm">Upload Photo</span>

                    </div>

                </div>

                <input
                    type="file"
                    hidden
                    accept="image/*"
                    ref={fileInputRef}
                />

            </div>

            {

                userType === "doctor" &&(

                    <div className="w-full">

                        <h2 className="text-neutral-500 font-semibold text-lg mb-4">Cover Image</h2>

                        <div className="relative group rounded-lg overflow-hidden cursor-pointer">

                            <img 
                                src={assets.uploadIcon}
                                alt="upload icon" 
                                className="w-full h-12 sm:h-24 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105 bg-gray-400 dark:bg-gray-600"
                            />

                            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                                <span className="text-white text-sm">Upload Cover</span>

                            </div>    
                            
                        </div>  

                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            ref={fileInputRef}
                        />                

                    </div>

                )

            }

            <AddFormInput/>

            <button
                type="submit"
                className={`bg-primary-bg text-secondary-bg hover:bg-opacity-90 cursor-pointer' : 'bg-gray-400 text-gray-200 cursor-not-allowed'} px-10 py-3 rounded-lg font-medium transition-colors duration-300 w-full max-w-md mt-4`}
            >Add Profile</button>

        </form>

    )

}

export default AddForm