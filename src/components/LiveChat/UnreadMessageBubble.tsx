import { useLiveChatContext } from "../../context/LiveChatContext"

const UnreadMessageBubble: React.FC = ()=>{

    const { unreadCount } = useLiveChatContext()

    if(unreadCount <= 0) return null

    return(

        <div className="absolute -top-2 -right-2 z-10">
            
            <div className="relative">

                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">

                    <span className="text-xs font-bold text-white">{unreadCount > 99 ? '99+' : unreadCount}</span>

                </div>

                <div className="absolute inset-0 w-5 h-5 border-2 border-red-400 rounded-full animate-ping opacity-75"></div>

            </div>

        </div>

    )

}

export default UnreadMessageBubble