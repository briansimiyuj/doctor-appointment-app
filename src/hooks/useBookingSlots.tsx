import { useContext, useEffect, useState, useMemo } from "react"
import { BookingContext } from "../context/BookingContext"
import { TimeSlotType } from "../assets/types/TimeSlotType"
import { AppointedDoctorType } from "../assets/types/AppointedDoctorType"
import { DoctorSlotType } from "../assets/types/DoctorSlotType"
import { AppointmentType } from "../assets/types/AppointmentType"
import { v4 as uuid } from "uuid"
import { useUpdatePatientDetails } from "./useUpdatePatientDetails"
import { useToast } from "./useToast"
import { arrayUnion, doc, setDoc } from "firebase/firestore"
import { db } from "../firebaseConfig"
import { AppointedPatientType } from "../assets/types/AppointedPatientType"
import { useScheduleHistory } from "./useScheduleHistory"
import { LoginContext } from "../context/LoginContext"

export const useBookingSlots = ()=>{

    const [selectedSlot, setSelectedSlot] = useState<TimeSlotType | null>(null),
          { doctorInfo, patientInfo, consultationType, slotIndex, setSlotIndex, selectedTimeSlot, setSelectedTimeSlot, appointedDoctors, setAppointedDoctors, setAppointedPatients, isBooked, setIsBooked, appointments, setAppointments, slots, setLoading } = useContext(BookingContext),
          { closeCancelModal } = useUpdatePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          { showToast } = useToast(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "patient",
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


    const handleSubmitBooking = async() =>{
    
       setLoading(true)

        if(!patientInfo || !doctorInfo || !selectedSlot || !consultationType){

            showToast("Please select a doctor, time slot and consultation type", "error")

            setLoading(false)

            return

        }

        if(isBooked[doctorInfo._id]){

            showToast("You have already booked an appointment with this doctor", "error")

            setLoading(false)

            return

        }

        try{

            const appointmentID = uuid()

            const newAppointment: AppointmentType ={

                _id: appointmentID,
                date: selectedSlot.dateTime.toISOString(),
                time: selectedSlot.time,
                status: "pending",
                isReviewed: false,
                consultationType,
                doctor:{
                    doctorInfo,
                    appointmentTime: selectedSlot
                },
                patient:{
                    patientInfo,
                    appointedTime: selectedSlot
                }

            }

            setAppointments((prev: AppointmentType[]) =>{

                const updatedAppointments = [...prev, newAppointment]

                return updatedAppointments

            })

            setAppointedDoctors((prev: AppointedDoctorType[]) =>{

                const updatedAppointedDoctors = [...prev, newAppointment.doctor]

                return updatedAppointedDoctors

            })

            setAppointedPatients((prev: AppointedPatientType[]) =>{

                const updatedAppointedPatients = [...prev, newAppointment.patient]

                return updatedAppointedPatients
            })

            const dateTimeID = `${selectedSlot.dateTime.toISOString()}-${selectedSlot.time}`,
                  appointmentDocRef = doc(db, "appointments", newAppointment._id),
                  isBookedDocRef = doc(db, "bookedDoctors", `${newAppointment.doctor.doctorInfo._id}_${dateTimeID}`),
                  doctorDocRef = doc(db, "doctors", newAppointment.doctor.doctorInfo._id),
                  patientDocRef = doc(db, "patients", newAppointment.patient.patientInfo._id)

            await setDoc(appointmentDocRef, newAppointment)

            await setDoc(isBookedDocRef, { 
                isBooked: true,
                appointmentID,
                doctorID: newAppointment.doctor.doctorInfo._id,
                patientID: newAppointment.patient.patientInfo._id,
                dateTime: selectedSlot.dateTime.toISOString(),
                time: selectedSlot.time
            })

            await setDoc(doctorDocRef, {

                appointments: arrayUnion({
                    appointmentID,
                    date: newAppointment.date,
                    time: newAppointment.time,
                    patientID: newAppointment.patient.patientInfo._id,
                    patientName: newAppointment.patient.patientInfo.name,
                })

            }, { merge: true })

            await setDoc(patientDocRef, {

                appointments: arrayUnion({
                    appointmentID,
                    date: newAppointment.date,
                    time: newAppointment.time,
                    doctorID: newAppointment.doctor.doctorInfo._id,
                    doctorName: newAppointment.doctor.doctorInfo.name,
                })

            }, { merge: true })

            setIsBooked(doctorInfo._id, true)

            showToast("Appointment booked successfully!", "success")

            setSelectedSlot(null)

        }catch(err){

            console.error('Error booking appointment:', err)

            showToast("An error occured while booking appointment", "error")

        }finally{

            setLoading(false)

        }
    
    }

    const cancelAppointment = async(appointmentID: string) =>{

        setLoading(true)

        const appointmentCancel = appointments.find((a: AppointmentType) => a._id === appointmentID),
              savedAppointment = localStorage.getItem('CurrentAppointmentToCancel'),
              appointmentToCancel = appointmentCancel ? appointmentCancel : (savedAppointment ? JSON.parse(savedAppointment) : null),
              performedBy ={
                  type: userType,
                  name: appointmentToCancel?.patient.patientInfo.name,
                  _id: appointmentToCancel?.patient.patientInfo._id
                }
        

        if(!appointmentToCancel){

            showToast("Appointment not found", "error")

            setLoading(false)

            closeCancelModal() 

            return

        }

        try{
            

            const appointmentDocRef = doc(db, "appointments", appointmentID)

            await setDoc(appointmentDocRef, {

                ...appointmentToCancel,
                status: "cancelled"

            })

            
            const dateTimeID = `${appointmentToCancel.date}-${appointmentToCancel.time}`,
                isBookedDocRef = doc(db, "bookedDoctors", `${appointmentToCancel.doctor.doctorInfo._id}_${dateTimeID}`)

            await setDoc(isBookedDocRef, {

                isBooked: false,
                appointmentID,
                doctorID: appointmentToCancel.doctor.doctorInfo._id,
                patientID: appointmentToCancel.patient.patientInfo._id,
                dateTime: appointmentToCancel.date,
                time: appointmentToCancel.time

            })

            setIsBooked(appointmentToCancel.doctor.doctorInfo._id, false)

            addScheduleHistoryEntry(

                appointmentToCancel,
                "cancelled",
                null,
                null,
                performedBy,

            )

            if(selectedSlot?.time === appointmentToCancel?.doctor.appointmentTime.time){

                setSelectedSlot(null)
                
            }

            showToast("Appointment cancelled successfully", "success")

        }catch(error){

            console.error("Error cancelling appointment:", error)

            showToast("Failed to cancel appointment", "error")

        }finally{

            setLoading(false)

            closeCancelModal() // FIXME: The modal is not closing

        }

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