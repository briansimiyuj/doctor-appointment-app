import { useContext } from "react"
import { ProfileContext } from "../../../../context/ProfileContext"
import ModalHeader from "../ModalHeader"
import { DocumentsTabContextProvider } from "../../../../context/DocumentsTabContext"
import AddForm from "./AddForm"

const AddProfileModaL: React.FC = ()=>{

    const profileContext = useContext(ProfileContext)

    if(!profileContext) return null

    const { setIsEditing } = profileContext

    return(

        <div className="fixed inset-0 bg-black bg-opacity-50 z-40">

            <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-white w-[90%] sm:w-[70%] md:w-[70%] lg:w-[60%] max-w-2xl max-h-[80vh] overflow-y-auto rounded-lg p-6 shadow-lg shadow-gray-400 z-50">
            
                <ModalHeader title="Add Profile" onClose={() => setIsEditing(false)}/>

                <DocumentsTabContextProvider>

                    <AddForm/>

                </DocumentsTabContextProvider>

            </div>

        </div>

    )

}

export default AddProfileModaL