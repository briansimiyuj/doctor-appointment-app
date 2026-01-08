export const formatTimeDifference = (diffMs: number): string =>{

    if(diffMs = 0) return 'Now'
     
    if(diffMs < 0) return 'Passed'

    const totalSeconds = Math.floor(diffMs / 1000)

    if(totalSeconds < 60){

        return `In ${totalSeconds}s`

    }

    const minutes = Math.floor(totalSeconds / 60),
          seconds = totalSeconds % 60

    if(minutes < 60){

        return `In ${minutes}:${seconds.toString().padStart(2, '0')}`

    }

    const hours = Math.floor(minutes / 60),
          remainingMinutes = minutes % 60

    return `In ${hours}h ${remainingMinutes}m`

}

export const formatDisplayTime = (dateString: string): string =>{

    if(!dateString) return 'Time not specified'

    try{

        const date = new Date(dateString)

        if(isNaN(date.getTime())) throw new Error('Invalid time')

        return date.toLocaleString("en-US", {

            hour: "numeric",
            minute: "numeric",
            hour12: true,

        })

    }catch(error){

        console.error('Error formatting display time:', error)

        return 'Time error'

    }

}

export const formatDisplayDate = (dateString: string): string =>{

    if(!dateString) return 'Date not specified'

    try{

        const date = new Date(dateString)

        if(isNaN(date.getTime())) throw new Error('Invalid date')

        return date.toLocaleDateString("en-US", {

            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",

        })

    }catch(error){

        console.error('Error formatting display date:', error)

        return dateString

    }

}

export const getAppointmentEndTime = (startTime: string, durationMinutes: number = 30): string =>{

    if(!startTime) return ''

    try{

        const startDate = new Date(startTime)

        if(isNaN(startDate.getTime())) return ''

        const endDate = new Date(startDate.getTime() + durationMinutes * 60000)

        return endDate.toLocaleTimeString("en-US", {

            hour: "numeric",
            minute: "numeric",
            hour12: true,

        })

    }catch(error){
        
        console.error('Error getting appointment end time:', error)

        return ''
    }

}

export const getAppointmentTimeMs = (dateString: string): number =>{

    if(!dateString) return 0

    try{

        const date = new Date(dateString)

        return isNaN(date.getTime()) ? 0 : date.getTime()

    }catch(error){

        console.error('Error getting appointment time:', error)

        return 0

    }

}


export const timeStatusConfig ={

    "early":{

        color: 'text-green-600 dark:text-green-400',
        bgColor: 'bg-green-50 dark:bg-green-900/30',
        text: 'Early'

    },

    "on-time":{

        color: 'text-yellow-600 dark:text-yellow-400',
        bgColor: 'bg-yellow-50 dark:bg-yellow-900/30',
        text: 'On Time'

    },

    "late":{

        color: 'text-red-600 dark:text-red-400',
        bgColor: 'bg-red-50 dark:bg-red-900/30',
        text: 'Late'

    }

}