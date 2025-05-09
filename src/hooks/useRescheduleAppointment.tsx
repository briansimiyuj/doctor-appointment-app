import { AppointmentType } from "../assets/types/AppointmentType"
import { DoctorType } from "../assets/types/DoctorType"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useRescheduleAppointment = () =>{

    const { updateAppointmentStatus } = usePatientDetails()

    const rescheduleAppointment =(
        appointment: AppointmentType,
        newDate: string,
        newTime: string,
        selectedDoctor: DoctorType
    ) =>{
    
        if(!appointment || !newDate || !newTime || !selectedDoctor) return false

        const updatedAppointment ={

            ...appointment,
            date: newDate,
            time: newTime,
            doctor:{

                _id: selectedDoctor._id,
                name: selectedDoctor.name,
                image: selectedDoctor.image

            },

            status: "rescheduled"

        }

        updateAppointmentStatus(appointment, "rescheduled")
        
        const rescheduleDetails ={

            originalAppointment:{

                date: appointment.date,
                time: appointment.time,
                doctorID: appointment.doctor._id,
                doctorName: appointment.doctor.name

            }, 
            
            newAppointment:{

                date: newDate,
                time: newTime,
                doctorID: selectedDoctor._id,
                doctorName: selectedDoctor.name

            },

            timeStamp: new Date().toISOString()

        }

        const rescheduleHistory = JSON.parse(localStorage.getItem("rescheduleHistory") || "[]")

        rescheduleHistory.push(rescheduleDetails)

        localStorage.setItem("rescheduleHistory", JSON.stringify(rescheduleHistory))

        console.log('Appointment rescheduled:', updatedAppointment)

        return true

    }

    return{ rescheduleAppointment }

}