import LiveChat from "./LiveChat"
import StatusManagement from "./StatusManagement"
import VideoCall from "./VideoCall"

interface ModalBodyProps{

    onClose: () => void

}

const ModalBody: React.FC<ModalBodyProps> = ({ onClose }) =>{

    return(

        <div className="space-y-6">

            <LiveChat/>

            <VideoCall/>

            <StatusManagement onClose={onClose}/>

        </div>

    )

}

export default ModalBody