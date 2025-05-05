import { useMemo, useRef } from "react"
import { useSchedule } from "../context/ScheduleContext"
import { DummyTimeSlots } from "../assets/dummyData/DummyTimeSlots"

export const useAvailableTimeSlots = (selectedDate: Date | null) =>{

    const { schedule } = useSchedule(),
          dummySlotsCache = useRef<Record<string, string[]>>({})

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

            const dateKey = selectedDate.toISOString().split('T')[0]

            if(dummySlotsCache.current[dateKey]) return dummySlotsCache.current[dateKey]

            const getRandomSubset = (slots: string[], probability = .7) =>{
            
                return slots.filter(() => Math.random() < probability)
            
            }

            const dummySlots =[

                ...getRandomSubset(DummyTimeSlots.morning),
                ...getRandomSubset(DummyTimeSlots.afternoon),
                ...getRandomSubset(DummyTimeSlots.evening)

            ]

            dummySlotsCache.current[dateKey] = dummySlots

            return dummySlots

        }

        return allSlots

    }, [selectedDate, schedule])


    const filteredSlots = useMemo(() =>{

        if(!selectedDate || availableSlots.length === 0) return []

        const now = new Date(),
              isToday = selectedDate.toDateString() === now.toDateString()

        if(!isToday) return availableSlots

        return availableSlots.filter(timeStr =>{

            const [hours, minutes] = timeStr.split(':').map(Number),
                  slotTime = new Date(selectedDate)

            slotTime.setHours(hours, minutes, 0, 0)

            const bufferTime = new Date()

            bufferTime.setMinutes(bufferTime.getMinutes() + 30)

            return slotTime > bufferTime

        })

    }, [selectedDate, availableSlots])


    const groupedSlots = useMemo(() =>{

        const morning = filteredSlots.filter(slot =>{

            const hour = parseInt(slot.split(':')[0])

            return hour < 12

        })

        const afternoon = filteredSlots.filter(slot =>{

            const hour = parseInt(slot.split(':')[0])

            return hour >= 12 && hour < 18

        })

        const evening = filteredSlots.filter(slot =>{

            const hour = parseInt(slot.split(':')[0])

            return hour >= 18

        })

        return { morning, afternoon, evening }

    }, [filteredSlots])


    return{

        filteredSlots,
        groupedSlots, 
        hasAvailableSlots: filteredSlots.length > 0

    }


}