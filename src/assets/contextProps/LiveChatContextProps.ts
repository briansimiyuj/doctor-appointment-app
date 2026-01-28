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
    showDeleteMessageModal: boolean
    openDeleteMessageModal: (message: MessageType) => void
    closeDeleteMessageModal: () => void
    selectedMessage: MessageType | null
    setSelectedMessage: (message: MessageType | null) => void
    handleHoverMessage: (message: MessageType | null) => void
    hoveredMessage: MessageType | null
    loading: boolean
    error: string | null
    editText: string
    setEditText: (editText: string) => void
    showEditMessageModal: boolean
    openEditMessageModal: (message: MessageType) => void
    closeEditMessageModal: () => void
    

}