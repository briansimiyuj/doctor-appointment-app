import { TimeSlotType } from "./TimeSlotType"

export interface DoctorSlotType{

    date: Date
    day: string
    slots: TimeSlotType[]

}