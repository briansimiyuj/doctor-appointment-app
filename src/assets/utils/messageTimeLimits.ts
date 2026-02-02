import { MessageType } from "../types/MessageType"

export const MessageTimeLimits ={

    edit: 15 * 60 * 1000, 
    deleteForEveryone: 15 * 60 * 1000

} as const

export const getMessageAge = (message: MessageType): number =>{

    const createdAt = typeof message.createdAt === "string"  ? new Date(message.createdAt).getTime() : typeof message.createdAt === 'number' ? message.createdAt : Date.now()

    return Date.now() - createdAt

}

export const getRemainingTime = (message: MessageType, timeLimit: number): number =>{

    const age = getMessageAge(message)

    return Math.max(0, timeLimit - age)

}

export const isWithinTimeLimit = (message: MessageType, timeLimit: number): boolean =>{

    return getRemainingTime(message, timeLimit) > 0

}

export const formatRemainingTime = (milliSeconds: number): string =>{

    const totalSeconds = Math.floor(milliSeconds / 1000),
          minutes = Math.floor(totalSeconds / 60),
          seconds = totalSeconds % 60

    if(minutes > 0){

        return `${minutes}m ${seconds}s`

    }

    return `${seconds}s`

}