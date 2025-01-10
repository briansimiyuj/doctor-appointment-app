import { useContext, useEffect, useState } from "react"
import { BookingContext } from "../context/BookingContext"
import { TimeSlotType } from "../assets/TimeSlotType"


export const useBookingSlots = ()=>{

    const [doctorSlots, setDoctorSlots] = useState<TimeSlotType[][]>([]),
          [slotTime, setSlotTime] = useState(''),
          { doctorInfo, slotIndex, setSlotIndex } = useContext(BookingContext),
          days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


    const getAvailableSlots = async(): Promise<void> =>{

        let today = new Date(),
            allSlots: TimeSlotType[][] = []

        for(let i =0; i < days.length; i++){

            let currentTime = new Date(today),
                endTime = new Date(today)

            currentTime.setDate(today.getDate() + i)

            endTime.setDate(today.getDate() + i)

            endTime.setHours(21, 0, 0, 0)


            if(i === 0){

                if(currentTime.getHours() < 8){

                    currentTime.setHours(8, 0, 0, 0)

                }else{
                    
                    let minutes = currentTime.getMinutes(),
                        nextSlotMinutes = minutes < 30 ? 30 : 0,
                        nextSlotHours = minutes >= 30 ? currentTime.getHours() + 1 : currentTime.getHours()

                    currentTime.setHours(nextSlotHours, nextSlotMinutes, 0, 0)

                }

            }else{                

                currentTime.setHours(8, 0, 0, 0)

            }


            const timeSlots: TimeSlotType[] = []

            while(currentTime < endTime){

                let formattedTime = currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })

                timeSlots.push({
                    
                    dateTime: new Date(currentTime),
                    time: formattedTime

                })

                currentTime.setMinutes(currentTime.getMinutes() + 30)

            }

            allSlots.push(timeSlots)
            
        }

        setDoctorSlots(allSlots)
    
    }


    const handleSlotIndexChange = (index: number) =>{
        
       setSlotIndex(index)

       setSlotTime('')

       getAvailableSlots()
    
    }

     
    useEffect(() =>{

        getAvailableSlots()

    }, [doctorInfo])


    return { doctorSlots, slotIndex, setSlotIndex: handleSlotIndexChange, slotTime, setSlotTime, days }

}