import { useProfileContext } from "../../context/ProfileContext"
import { useTypingIndicator } from "../../hooks/useTypingIndicator"

const TypingIndicator: React.FC = ()=>{

    const { typingUserType, otherUserTyping } = useTypingIndicator(),
          { profile } = useProfileContext()

    if(!otherUserTyping) return null

    const userName = typingUserType === "doctor" ? 'Dr. ' + profile?.name : profile?.name

    return(

        <div className="px-4 py-2 mb-2">

            <div className="inline-flex items-center gap-2 bg-gray-100 dark:bg-gray-700 rounded-full px-4 py-2">

                <div className="flex space-x-1">

                    <div 
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
                        style={{ animationDelay: '0ms' }}
                    />

                    <div 
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
                        style={{ animationDelay: '150ms' }}
                    />

                    <div 
                        className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
                        style={{ animationDelay: '300ms' }}
                    />

                </div>

                <span className="text-sm text-gray-600 dark:text-gray-300">{userName} is typing...</span>

            </div>

        </div>

    )

}

export default TypingIndicator