import { useRef, useEffect } from "react"
import { useLiveChatContext } from "../../context/LiveChatContext"
import { FiSend } from "react-icons/fi"

const LiveChatInput: React.FC = () =>{

    const { input, setInput } = useLiveChatContext(),
          textareaRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() =>{

        if(textareaRef.current){

            textareaRef.current.style.height = "auto"

            const maxHeight = 3 * 24

            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, maxHeight) + "px"

        }

    }, [input])

    return(

        <div className="relative p-2">

            <textarea
                ref={textareaRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full resize-none overflow-y-auto rounded-full bg-white border pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={1}
            />

            <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700"
            >

                <FiSend className="h-5 w-5"/>

            </button>

        </div>       

    )

}

export default LiveChatInput