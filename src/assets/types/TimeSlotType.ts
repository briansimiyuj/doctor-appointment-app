export type TimeSlotType ={

    dateTime: Date,
    time: string
    slotTime?: string
    status?: "available" | "booked" | "break" | "blocked"

}