import { MessageType } from "../types/MessageType"

export interface LiveChatContextProps{

    messages: MessageType[]
    setMessages: (messages: MessageType[]) => void
    input: string
    setInput: (input: string) => void
    messageMenuModal: boolean
    setMessageMenuModal: (messageMenuModal: boolean) => void
    openMessageMenu: (message: MessageType) => void
    closeMessageMenu: () => void
    selectedMessage: MessageType | null
    setSelectedMessage: (message: MessageType | null) => void
    handleHoverMessage: (message: MessageType | null) => void
    hoveredMessage: MessageType | null
    loading: boolean
    error: string | null

}