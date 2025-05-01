import { useMemo } from "react"
import { useSchedule } from "../context/ScheduleContext"
import { DummyTimeSlots } from "../assets/dummyData/DummyTimeSlots"

export const useAvailableTimeSlots = (selectedDate: Date | null) =>{

    const { schedule } = useSchedule()

    const availableSlots = useMemo(() =>{

        if(!selectedDate) return []

        const allSlots = schedule.availableSlots.flatMap(day =>{

            const date = new Date(day.date)

            if(date.toDateString() === selectedDate.toDateString()){

                return day.slots
                     .filter(slot => slot.split('-')[1] === "available")
                     .map(slot => slot.split('-')[0])
                
            }

            return []

        })

        if(allSlots.length === 0){

            const getRandomSubset = (slots: string[], probability = .7) =>{
            
                return slots.filter(() => Math.random() < probability)
            
            }

            return[

                ...getRandomSubset(DummyTimeSlots.morning),
                ...getRandomSubset(DummyTimeSlots.afternoon),
                ...getRandomSubset(DummyTimeSlots.evening)

            ]

        }

        return allSlots

    }, [selectedDate, schedule])


    const groupedSlots = useMemo(() =>{

        const morning = availableSlots.filter(slot =>{

            const hour = parseInt(slot.split(':')[0])

            return hour < 12

        })

        const afternoon = availableSlots.filter(slot =>{

            const hour = parseInt(slot.split(':')[0])

            return hour >= 12   

        })

        const evening = availableSlots.filter(slot =>{

            const hour = parseInt(slot.split(':')[0])

            return hour >= 18

        })

        return { morning, afternoon, evening }

    }, [availableSlots])

    return{

        availableSlots,
        groupedSlots, 
        hasAvailableSlots: availableSlots.length > 0

    }


}