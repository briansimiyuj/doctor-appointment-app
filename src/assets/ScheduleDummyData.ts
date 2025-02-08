import { TimeSlotType } from "./types/TimeSlotType"

export const dummySlots: TimeSlotType[][] = [

    // Monday

    [

        { dateTime: new Date("2025-04-01 08:00"), time: "09:00", status: "available" },
        { dateTime: new Date("2025-04-01 09:30"), time: "09:30", status: "booked" },
        { dateTime: new Date("2025-04-01 11:00"), time: "11:00", status: "available" },
        { dateTime: new Date("2025-04-01 12:30"), time: "12:30", status: "break" },
        { dateTime: new Date("2025-04-01 14:00"), time: "14:00", status: "available" },
        { dateTime: new Date("2025-04-01 15:30"), time: "15:30", status: "booked" },
        { dateTime: new Date("2025-04-01 17:00"), time: "17:00", status: "available" },
        { dateTime: new Date("2025-04-01 18:30"), time: "18:30", status: "blocked" },
        { dateTime: new Date("2025-04-01 20:00"), time: "20:00", status: "blocked" }

    ],

    // Tuesday

    [

        { dateTime: new Date("2025-04-02 08:00"), time: "09:00", status: "booked" },
        { dateTime: new Date("2025-04-02 09:30"), time: "09:30", status: "available" },
        { dateTime: new Date("2025-04-02 11:00"), time: "11:00", status: "booked" },
        { dateTime: new Date("2025-04-02 12:30"), time: "12:30", status: "break" },
        { dateTime: new Date("2025-04-02 14:00"), time: "14:00", status: "booked" },
        { dateTime: new Date("2025-04-02 15:30"), time: "15:30", status: "available" },
        { dateTime: new Date("2025-04-02 17:00"), time: "17:00", status: "booked" },
        { dateTime: new Date("2025-04-02 18:30"), time: "18:30", status: "blocked" },
        { dateTime: new Date("2025-04-02 20:00"), time: "20:00", status: "blocked" }


    ],

    // Wednesday

    [

        { dateTime: new Date("2025-04-03 08:00"), time: "09:00", status: "available" },
        { dateTime: new Date("2025-04-03 09:30"), time: "09:30", status: "booked" },
        { dateTime: new Date("2025-04-03 11:00"), time: "11:00", status: "available" },
        { dateTime: new Date("2025-04-03 12:30"), time: "12:30", status: "break" },
        { dateTime: new Date("2025-04-03 14:00"), time: "14:00", status: "available" },
        { dateTime: new Date("2025-04-03 15:30"), time: "15:30", status: "booked" },
        { dateTime: new Date("2025-04-03 17:00"), time: "17:00", status: "available" },
        { dateTime: new Date("2025-04-03 18:30"), time: "18:30", status: "blocked" },
        { dateTime: new Date("2025-04-03 20:00"), time: "20:00", status: "blocked" }

    ],

    // Thursday

    [

        { dateTime: new Date("2025-04-04 08:00"), time: "09:00", status: "booked" },
        { dateTime: new Date("2025-04-04 09:30"), time: "09:30", status: "available" },
        { dateTime: new Date("2025-04-04 11:00"), time: "11:00", status: "booked" },
        { dateTime: new Date("2025-04-04 12:30"), time: "12:30", status: "break" },
        { dateTime: new Date("2025-04-04 14:00"), time: "14:00", status: "available" },
        { dateTime: new Date("2025-04-04 15:30"), time: "15:30", status: "blocked" },
        { dateTime: new Date("2025-04-04 17:00"), time: "17:00", status: "available" },
        { dateTime: new Date("2025-04-04 18:30"), time: "18:30", status: "booked" },
        { dateTime: new Date("2025-04-04 20:00"), time: "20:00", status: "blocked" }

    ],

    // Friday
    [

        { dateTime: new Date("2025-04-05 08:00"), time: "09:00", status: "available" },
        { dateTime: new Date("2025-04-05 09:30"), time: "09:30", status: "booked" },
        { dateTime: new Date("2025-04-05 11:00"), time: "11:00", status: "available" },
        { dateTime: new Date("2025-04-05 12:30"), time: "12:30", status: "break" },
        { dateTime: new Date("2025-04-05 14:00"), time: "14:00", status: "blocked" },
        { dateTime: new Date("2025-04-05 15:30"), time: "15:30", status: "available" },
        { dateTime: new Date("2025-04-05 17:00"), time: "17:00", status: "booked" },
        { dateTime: new Date("2025-04-05 18:30"), time: "18:30", status: "blocked" },
        { dateTime: new Date("2025-04-05 20:00"), time: "20:00", status: "available" }

    ],

    // Saturday
    
    [

        { dateTime: new Date("2025-04-06 08:00"), time: "09:00", status: "blocked" },
        { dateTime: new Date("2025-04-06 09:30"), time: "09:30", status: "available" },
        { dateTime: new Date("2025-04-06 11:00"), time: "11:00", status: "booked" },
        { dateTime: new Date("2025-04-06 12:30"), time: "12:30", status: "break" },
        { dateTime: new Date("2025-04-06 14:00"), time: "14:00", status: "available" },
        { dateTime: new Date("2025-04-06 15:30"), time: "15:30", status: "blocked" },
        { dateTime: new Date("2025-04-06 17:00"), time: "17:00", status: "available" },
        { dateTime: new Date("2025-04-06 18:30"), time: "18:30", status: "booked" },
        { dateTime: new Date("2025-04-06 20:00"), time: "20:00", status: "blocked" }

    ],

    // Sunday
    
    [

        { dateTime: new Date("2025-04-07 08:00"), time: "09:00", status: "available" },
        { dateTime: new Date("2025-04-07 09:30"), time: "09:30", status: "booked" },
        { dateTime: new Date("2025-04-07 11:00"), time: "11:00", status: "available" },
        { dateTime: new Date("2025-04-07 12:30"), time: "12:30", status: "break" },
        { dateTime: new Date("2025-04-07 14:00"), time: "14:00", status: "blocked" },
        { dateTime: new Date("2025-04-07 15:30"), time: "15:30", status: "available" },
        { dateTime: new Date("2025-04-07 17:00"), time: "17:00", status: "booked" },
        { dateTime: new Date("2025-04-07 18:30"), time: "18:30", status: "blocked" },
        { dateTime: new Date("2025-04-07 20:00"), time: "20:00", status: "available" }

    ]
]

const dummyBlockedDates: string[] =[

    "2025-04-08",
    "2025-04-09",
    "2025-04-10",
    "2025-04-11"

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
              slots = daySlots.map(slot => `${slot.time}-${slot.status}`)

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