import { useContext, useState } from "react"
import { BookingContext } from "../context/BookingContext"


export const useBookingSlots = ()=>{

    const [doctorSlots, setDoctorSlots] = useState([]),
          [slotIndex, setSlotIndex] = useState(0),
          [slotTime, setSlotTime] = useState(''),
          { doctorInfo } = useContext(BookingContext),
          days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

}