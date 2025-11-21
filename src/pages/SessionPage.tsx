import SessionHeader from "../components/SessionPage/SessionHeader"
import { useLoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"

const SessionPage: React.FC = ()=>{

    const { userType } = useLoginContext()

    if(userType === "doctor") return  <NotFoundPage/>

    return(

        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">

            <SessionHeader/>
            
        </div>

    )

}

export default SessionPage

