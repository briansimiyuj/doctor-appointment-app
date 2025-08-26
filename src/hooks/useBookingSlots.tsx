import { useContext, useEffect, useState, useMemo } from "react"
import { BookingContext } from "../context/BookingContext"
import { TimeSlotType } from "../assets/types/TimeSlotType"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"
import { DoctorSlotType } from "../assets/types/DoctorSlotType"
import { AppointmentType } from "../assets/types/AppointmentType"
import { v4 as uuid } from "uuid"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"

export const useBookingSlots = ()=>{

    const [selectedSlot, setSelectedSlot] = useState<TimeSlotType | null>(null),
          { doctorInfo, patientInfo, consultationType, slotIndex, setSlotIndex, selectedTimeSlot, setSelectedTimeSlot, appointedDoctors, setAppointedDoctors, isBooked, setIsBooked, appointments, setAppointments, slots } = useContext(BookingContext),
          { closeCancelModal } = useUpdatePatientDetails(),
          days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          selectedDate = slots[slotIndex]?.date

    const handleSlotIndexChange = (index: number) =>{

        setSlotIndex(index)

        setSelectedSlot(null)

    }


    const handleTimeSlotSelection = (slot: TimeSlotType) =>{

        if(doctorInfo && isBooked[doctorInfo._id]) return

        const selected = slots[slotIndex]?.slots.find(s => s.time === slot.time)

        if(doctorInfo && selected){

            const newAppointment: AppointedDoctorType = {

                doctorInfo,
                appointmentTime: slot

            }

            setAppointedDoctors((prev: AppointedDoctorType[]) =>{

                const updatedAppointments = [...prev, newAppointment]

                localStorage.setItem("appointedDoctors", JSON.stringify(updatedAppointments))

                return updatedAppointments

            })

            setSelectedSlot(selected)

            setSelectedTimeSlot(selected)

        }

    }


    const handleSubmitBooking = () =>{
    
        if (!patientInfo || !doctorInfo || !selectedSlot || isBooked[doctorInfo._id]) return

        const newAppointment: AppointmentType ={

            _id: uuid(),
            date: selectedSlot.dateTime.toISOString(),
            time: selectedSlot.time,
            status: "pending",
            consultationType,
            doctor: {
                doctorInfo,
                appointmentTime: selectedSlot
            },
            patient: patientInfo

        }

        setAppointedDoctors((prev: AppointedDoctorType[]) =>{

            const updatedAppointments = [...prev, newAppointment.doctor]

            localStorage.setItem("appointedDoctors", JSON.stringify(updatedAppointments))

            return updatedAppointments

        })

        setAppointments(prev => [...prev, newAppointment])

        setIsBooked(doctorInfo._id, true)

        
        alert("Booking successful!")
    
    }

    const cancelAppointment = (appointmentID: string) =>{

        const storedAppointments = JSON.parse(localStorage.getItem("appointments") || "[]"),
            appointmentToCancel = storedAppointments.find((a: AppointmentType) => a._id === appointmentID)

        if(!appointmentToCancel) return

        const updatedAppointments = appointments.filter(a => a._id !== appointmentID)

        setAppointments(updatedAppointments)

        localStorage.setItem("appointments", JSON.stringify(updatedAppointments))

        setAppointedDoctors(prev =>{

            const updated = prev.filter(a => a.doctorInfo?._id !== appointmentToCancel?.doctor.doctorInfo?._id)

            localStorage.setItem("appointedDoctors", JSON.stringify(updated))
            
            return updated

        })

        if(doctorInfo){

            const updatedIsBooked = { ...isBooked, [doctorInfo._id]: false }

            localStorage.setItem("isBooked", JSON.stringify(updatedIsBooked))

            setIsBooked(doctorInfo._id, false)

        }

        if(selectedSlot?.time === appointmentToCancel?.doctor.appointmentTime.time){

            setSelectedSlot(null)
            
        }

        closeCancelModal()

        alert("Appointment cancelled")
}



    const removePastAppointments = () =>{

        const currentTime = new Date()

        const updatedAppointments = appointedDoctors.filter(appointment => new Date(appointment.appointmentTime.dateTime) > currentTime)

        if(updatedAppointments.length !== appointedDoctors.length){

            setAppointedDoctors(updatedAppointments)

            localStorage.setItem("appointedDoctors", JSON.stringify(updatedAppointments))

            const updatedIsBooked = { ...isBooked }

            appointedDoctors.forEach(appointment =>{

                if(appointment.doctorInfo){

                    updatedIsBooked[appointment.doctorInfo._id] = false

                }

            })

            localStorage.setItem("isBooked", JSON.stringify(updatedIsBooked))

        }

    }


    useEffect(()=>{

        removePastAppointments()

        const interval = setInterval(removePastAppointments, 60000)

        return () => clearInterval(interval)

    }, [appointedDoctors])


    const doctorSlots: DoctorSlotType[] = useMemo(() =>{

        if(!slots || !slots.length) return []

        const now = new Date(),
              todayDateStr = now.toDateString()

        return slots.map(slot =>{

            const dayObj = new Date(slot.date),
                  isToday = dayObj.toDateString() === todayDateStr

            return{

                ...slot,
                day: dayObj.toLocaleDateString("en-US", { weekday: "long" }),
                slots: (slot.slots as unknown as string[]).map(s => {

                    const [time, status] = s.split(" - "),
                          [hours, minutes] = time.split(":").map(Number),
                          slotDateTime = new Date(slot.date)

                    slotDateTime.setHours(hours, minutes, 0, 0)

                    return{

                        dateTime: slotDateTime,
                        time,
                        status: status as "available" | "booked" | "break" | "blocked"

                    } as TimeSlotType

                }).filter(slotObj =>{

                    if(isToday){

                        const slotWithBuffer = new Date(slotObj.dateTime.getTime() - 30 * 60 * 1000)

                        return slotWithBuffer > now

                    }

                    return true

                })

            }

        })

    }, [slots])





    useEffect(()=>{

        if(selectedTimeSlot) setSelectedSlot(selectedTimeSlot)

    }, [selectedTimeSlot])


    return{

        doctorSlots,
        slotIndex,
        setSlotIndex: handleSlotIndexChange,
        selectedSlot,
        setSelectedSlot,
        days,
        handleTimeSlotSelection,
        appointedDoctors,
        cancelAppointment,
        isBooked,
        appointments,
        doctorInfo,
        consultationType,
        selectedDate,
        handleSubmitBooking,

    }

}