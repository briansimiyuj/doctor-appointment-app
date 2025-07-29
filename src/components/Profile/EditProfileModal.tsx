import { useContext } from "react"
import { assets } from "../../assets/frontend/assets"
import { ProfileContext } from "../../context/ProfileContext"
import EditForm from "./EditForm"
import { DocumentsTabContextProvider } from "../../context/DocumentsTabContext"

const EditProfileModal: React.FC = ()=>{

    const context = useContext(ProfileContext)

    if(!context) return null

    const { setIsEditing } = context

    return(

        <>

            <div className="fixed inset-0 bg-black bg-opacity-50 z-40"></div>

    
            <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white w-[90%] sm:w-[70%] md:w-[70%] lg:w-[60%] max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg p-6 shadow-lg shadow-gray-400 z-50">

                <div className="sticky top-0 flex justify-center mb-12 pt-2">

                    <img 
                        src={assets.crossIcon} 
                        alt="cross icon" 
                        className="absolute top-0 right-0 cursor-pointer w-10"
                        onClick={() => setIsEditing(false)}
                    />

                </div>


                <DocumentsTabContextProvider>

                    <EditForm/>

                </DocumentsTabContextProvider>

            </div>

        </>

    )

}

export default EditProfileModal