import { useContext, useEffect, useState } from "react"
import { BookingContext } from "../context/BookingContext"
import { TimeSlotType } from "../assets/types/TimeSlotType"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"


export const useBookingSlots = ()=>{

    const [doctorSlots, setDoctorSlots] = useState<TimeSlotType[][]>([]),
          { doctorInfo, slotIndex, setSlotIndex, selectedTimeSlot, setSelectedTimeSlot, slotTime, setSlotTime, appointedDoctors, setAppointedDoctors } = useContext(BookingContext),
          days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          selectedDate = doctorSlots[slotIndex]?.[0].dateTime


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


    const handleTimeSlotSelection = (slot: TimeSlotType) =>{
        
        const selectedSlot = doctorSlots[slotIndex]?.find(timeSlot => timeSlot.time === slot.time)
        
        
        if(doctorInfo){

            const newAppointment: AppointedDoctorType ={

                doctorInfo,
                appointmentTime: slot

            }


            const updatedAppointments = [...appointedDoctors, newAppointment]

            setAppointedDoctors(updatedAppointments)

            console.log('Appointed doctors:', appointedDoctors)

            localStorage.setItem("appointedDoctors", JSON.stringify(updatedAppointments))

        }

        if(selectedSlot){
            
            setSelectedTimeSlot(selectedSlot)

            setSlotTime(slot.time)
        
        }

    }


    useEffect(() =>{
    
        if(selectedTimeSlot){

            handleTimeSlotSelection(selectedTimeSlot)
            
        }
    
    }, [slotTime, selectedDate])

     
    useEffect(() =>{

        getAvailableSlots()

    }, [doctorInfo])


    useEffect(() =>{
    
        if(appointedDoctors.length > 0){

            console.log('New appointment:', appointedDoctors[appointedDoctors.length - 1])

        }
    
    }, [appointedDoctors])


    return{ 

        doctorSlots, 
        slotIndex, 
        setSlotIndex: handleSlotIndexChange, 
        slotTime, 
        setSlotTime, 
        days,
        handleTimeSlotSelection,
        selectedTimeSlot,
        appointedDoctors

    }

}