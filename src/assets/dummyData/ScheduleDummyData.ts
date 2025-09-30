import { TimeSlotType } from "../types/TimeSlotType"


const today = new Date()

const generateFutureDates = () =>{

    const dates = []
    
    for(let i = 0; i < 7; i++){

        const date = new Date(today)

        date.setDate(today.getDate() + i)

        dates.push(date)    

    }

    return dates

}

const futureDates = generateFutureDates()

export const dummySlots: TimeSlotType[][] = [

    // Monday
    [
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 9, 0), time: "09:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 9, 30), time: "09:30", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 10, 0), time: "10:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 10, 30), time: "10:30", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 11, 0), time: "11:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 11, 30), time: "11:30", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 12, 0), time: "12:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 12, 30), time: "12:30", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 13, 0), time: "13:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 14, 0), time: "14:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 14, 30), time: "14:30", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 15, 0), time: "15:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 15, 30), time: "15:30", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 16, 0), time: "16:00", status: "available" },
        { dateTime: new Date(futureDates[0].getFullYear(), futureDates[0].getMonth(), futureDates[0].getDate(), 16, 30), time: "16:30", status: "available" }
    ],

    // Tuesday
    [
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 9, 0), time: "09:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 9, 30), time: "09:30", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 10, 0), time: "10:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 10, 30), time: "10:30", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 11, 0), time: "11:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 11, 30), time: "11:30", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 12, 0), time: "12:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 12, 30), time: "12:30", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 13, 0), time: "13:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 14, 0), time: "14:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 14, 30), time: "14:30", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 15, 0), time: "15:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 15, 30), time: "15:30", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 16, 0), time: "16:00", status: "available" },
        { dateTime: new Date(futureDates[1].getFullYear(), futureDates[1].getMonth(), futureDates[1].getDate(), 16, 30), time: "16:30", status: "available" }
    ],

    // Wednesday
    [
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 9, 0), time: "09:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 9, 30), time: "09:30", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 10, 0), time: "10:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 10, 30), time: "10:30", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 11, 0), time: "11:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 11, 30), time: "11:30", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 12, 0), time: "12:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 12, 30), time: "12:30", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 13, 0), time: "13:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 14, 0), time: "14:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 14, 30), time: "14:30", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 15, 0), time: "15:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 15, 30), time: "15:30", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 16, 0), time: "16:00", status: "available" },
        { dateTime: new Date(futureDates[2].getFullYear(), futureDates[2].getMonth(), futureDates[2].getDate(), 16, 30), time: "16:30", status: "available" }
    ],

    // Thursday
    [
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 9, 0), time: "09:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 9, 30), time: "09:30", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 10, 0), time: "10:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 10, 30), time: "10:30", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 11, 0), time: "11:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 11, 30), time: "11:30", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 12, 0), time: "12:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 12, 30), time: "12:30", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 13, 0), time: "13:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 14, 0), time: "14:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 14, 30), time: "14:30", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 15, 0), time: "15:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 15, 30), time: "15:30", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 16, 0), time: "16:00", status: "available" },
        { dateTime: new Date(futureDates[3].getFullYear(), futureDates[3].getMonth(), futureDates[3].getDate(), 16, 30), time: "16:30", status: "available" }
    ],

    // Friday
    [
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 9, 0), time: "09:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 9, 30), time: "09:30", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 10, 0), time: "10:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 10, 30), time: "10:30", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 11, 0), time: "11:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 11, 30), time: "11:30", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 12, 0), time: "12:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 12, 30), time: "12:30", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 13, 0), time: "13:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 14, 0), time: "14:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 14, 30), time: "14:30", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 15, 0), time: "15:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 15, 30), time: "15:30", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 16, 0), time: "16:00", status: "available" },
        { dateTime: new Date(futureDates[4].getFullYear(), futureDates[4].getMonth(), futureDates[4].getDate(), 16, 30), time: "16:30", status: "available" }
    ],

    // Saturday
    [
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 9, 0), time: "09:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 9, 30), time: "09:30", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 10, 0), time: "10:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 10, 30), time: "10:30", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 11, 0), time: "11:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 11, 30), time: "11:30", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 12, 0), time: "12:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 12, 30), time: "12:30", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 13, 0), time: "13:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 14, 0), time: "14:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 14, 30), time: "14:30", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 15, 0), time: "15:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 15, 30), time: "15:30", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 16, 0), time: "16:00", status: "available" },
        { dateTime: new Date(futureDates[5].getFullYear(), futureDates[5].getMonth(), futureDates[5].getDate(), 16, 30), time: "16:30", status: "available" }
    ],

    // Sunday
    [
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 9, 0), time: "09:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 9, 30), time: "09:30", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 10, 0), time: "10:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 10, 30), time: "10:30", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 11, 0), time: "11:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 11, 30), time: "11:30", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 12, 0), time: "12:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 12, 30), time: "12:30", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 13, 0), time: "13:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 14, 0), time: "14:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 14, 30), time: "14:30", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 15, 0), time: "15:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 15, 30), time: "15:30", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 16, 0), time: "16:00", status: "available" },
        { dateTime: new Date(futureDates[6].getFullYear(), futureDates[6].getMonth(), futureDates[6].getDate(), 16, 30), time: "16:30", status: "available" }
    ]
]


const dummyBlockedDates: string[] =[

    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 10).toISOString().split('T')[0],
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 11).toISOString().split('T')[0],
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 12).toISOString().split('T')[0],
    new Date(today.getFullYear(), today.getMonth(), today.getDate() + 13).toISOString().split('T')[0]

]

const dummyBreakTime ={

    start: "12:30",
    end: "14:00"

}

const defaultWorkingHours ={

    start: "09:00",
    end: "17:00"

}

const defaultPreferences ={

    slotDuration: 30,
    maxPatientsPerDay: 10,
    autoConfirmation: true

}

const transformSlots = (slots: TimeSlotType[][]): { date: string; slots: string[] }[] =>{

    return slots.map(daySlots =>{

        const date = daySlots[0].dateTime.toISOString().split('T')[0],
              slots = daySlots.map(slot => `${slot.time} - ${slot.status}`)

        return { date, slots }
    
    })
    
}

export const dummySchedule = {

    workingHours: defaultWorkingHours,
    preferences: defaultPreferences,
    availableSlots: transformSlots(dummySlots),
    blockedDates: dummyBlockedDates,
    breakTime: dummyBreakTime,

}