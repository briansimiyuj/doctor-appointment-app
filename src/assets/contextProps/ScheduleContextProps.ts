import { TimeSlotType } from "../types/TimeSlotType"

export interface ScheduleContextProps {

    schedule: {

        workingHours: { 
            start: string
            end: string 
        }

        preferences: {
            slotDuration: number
            maxPatientsPerDay: number
            autoConfirmation: boolean
        }

        availableSlots: { 
            date: string
            slots: string[] 
        }[]

        blockedDates: string[]

        breakTime: { 
            start: string
            end: string 
        }

    }

    setSchedule: (schedule: {

        workingHours: { 
            start: string
            end: string 
        }

        preferences: {
            slotDuration: number
            maxPatientsPerDay: number
            autoConfirmation: boolean
        }

        availableSlots: { 
            date: string
            slots: string[] 
        }[]

        blockedDates: string[]

        breakTime: { 
            start: string
            end: string 
        }

    }) => void

    slotIndex: number
    setSlotIndex: (index: number) => void
    slotTime: string
    setSlotTime: (time: string) => void
    selectedTimeSlot: TimeSlotType | null
    setSelectedTimeSlot: (slot: TimeSlotType | null) => void

}