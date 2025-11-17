import { LiveChatContextProvider } from "../../../../../../context/LiveChatContext"
import LiveChat from "../../../../../LiveChat/LiveChat"
import StatusManagement from "./StatusManagement"
import VideoCall from "./VideoCall"

const ModalBody: React.FC = () =>{

    return(

        <div className="space-y-6">

            <LiveChatContextProvider>

             <LiveChat note={null}/>

            </LiveChatContextProvider>

            <VideoCall/>

            <StatusManagement/>

        </div>

    )

}

export default ModalBody