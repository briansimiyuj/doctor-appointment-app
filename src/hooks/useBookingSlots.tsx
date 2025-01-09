import { useContext, useEffect, useState } from "react"
import { BookingContext } from "../context/BookingContext"
import { TimeSlotType } from "../assets/TimeSlotType"


export const useBookingSlots = ()=>{

    const [doctorSlots, setDoctorSlots] = useState<TimeSlotType[][]>([]),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          { doctorInfo } = useContext(BookingContext),
          days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']


    const getAvailableSlots = async(): Promise<void> =>{
    
        setDoctorSlots([])

        let today = new Date()

        for(let i =0; i < days.length; i++){

            let currentTime = new Date(today),
                endTime = new Date(today)

            currentTime.setDate(today.getDate() + i)

            endTime.setDate(today.getDate() + i)

            endTime.setHours(21, 0, 0, 0)


            if(today.getDate() === currentTime.getDate()){

                currentTime.setHours(currentTime.getHours() > 8 ? currentTime.getHours() + 1 : 8)

                currentTime.setMinutes(currentTime.getMinutes() > 30 ? 0: 30)

            }else{

                currentTime.setHours(8)

                currentTime.setMinutes(0)

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

            setDoctorSlots(prev => [...prev, timeSlots])
            
        }
    
    }


    const handleSlotIndexChange = (index: number) =>{
        
       console.log('Available slots for selected day:', doctorSlots[index]?.length)

       setSlotIndex(index)

       setSlotTime('')

       getAvailableSlots()
    
    }

     
    useEffect(() =>{

        getAvailableSlots()

    }, [doctorInfo])


    return { doctorSlots, slotIndex, setSlotIndex: handleSlotIndexChange, slotTime, setSlotTime, days }

}