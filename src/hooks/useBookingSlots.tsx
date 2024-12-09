import { useContext, useState } from "react"
import { BookingContext } from "../context/BookingContext"


export const useBookingSlots = ()=>{

    const [doctorSlots, setDoctorSlots] = useState([]),
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

                currentTime.setHours(currentTime.getHours() > 8 ? currentTime.getHours() : 8)

                currentTime.setMinutes(currentTime.getMinutes() > 30 ? 30: 0)

            }else{

                currentTime.setHours(8)

                currentTime.setMinutes(0)

            }
            
        }
    
    }

}