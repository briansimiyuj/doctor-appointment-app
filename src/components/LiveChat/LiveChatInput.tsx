import { useRef, useEffect } from "react"
import { useLiveChatContext } from "../../context/LiveChatContext"
import { FiSend } from "react-icons/fi"
import { useSendMessage } from "../../hooks/useSendMessage"

const LiveChatInput: React.FC = () =>{

    const { input, setInput } = useLiveChatContext(),
          { sendMessage } = useSendMessage(), 
          textareaRef = useRef<HTMLTextAreaElement | null>(null)

    useEffect(() =>{

        if(textareaRef.current){

            textareaRef.current.style.height = "auto"

            const maxHeight = 3 * 24

            textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, maxHeight) + "px"

        }

    }, [input])

    const submitForm = (e: React.FormEvent<HTMLFormElement>) =>{
    
       e.preventDefault()

       sendMessage()
    
    }

    return(

        <form className="relative p-2" onSubmit={submitForm}>

            <textarea
                ref={textareaRef}
                value={input}
                onChange={e => setInput(e.target.value)}
                placeholder="Type a message..."
                className="w-full resize-none overflow-y-auto rounded-full bg-white border pr-10 pl-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={1}
            />

            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-blue-600 hover:text-blue-700">

                <FiSend className="h-5 w-5"/>

            </button>

        </form>       

    )

}

export default LiveChatInput