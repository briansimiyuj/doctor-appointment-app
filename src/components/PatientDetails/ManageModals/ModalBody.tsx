import LiveChat from "./LiveChat"
import StatusManagement from "./StatusManagement"
import VideoCall from "./VideoCall"

const ModalBody: React.FC = () =>{

    return(

        <div className="space-y-6">

            <LiveChat/>

            <VideoCall/>

            <StatusManagement/>

        </div>

    )

}

export default ModalBody