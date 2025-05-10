import { AppointmentType } from "../assets/types/AppointmentType"
import { DoctorType } from "../assets/types/DoctorType"
import { usePatientDetails } from "../context/PatientDetailsContext"

export const useRescheduleAppointment = () =>{

    const { updateAppointment } = usePatientDetails()

    const rescheduleAppointment =(
        appointment: AppointmentType,
        newDate: string,
        newTime: string,
        consultationType: "in-person" | "online",
        selectedDoctor: DoctorType
    ) =>{
    
        if(!appointment || !newDate || !newTime || !selectedDoctor) return false

        const updatedAppointment ={

            ...appointment,
            date: newDate,
            time: newTime,
            consultationType: consultationType,
            doctor:{

                _id: selectedDoctor._id,
                name: selectedDoctor.name,
                image: selectedDoctor.image

            },

            status: "rescheduled"

        }

        updateAppointment(updatedAppointment)
        
        const rescheduleDetails ={

            originalAppointment:{

                date: appointment.date,
                time: appointment.time,
                doctorID: appointment.doctor._id,
                doctorName: appointment.doctor.name,
                consultationType: appointment.consultationType

            }, 
            
            newAppointment:{

                date: newDate,
                time: newTime,
                doctorID: selectedDoctor._id,
                doctorName: selectedDoctor.name,
                consultationType: consultationType

            },

            timeStamp: new Date().toISOString()

        }

        const rescheduleHistory = JSON.parse(localStorage.getItem("rescheduleHistory") || "[]")

        rescheduleHistory.push(rescheduleDetails)

        localStorage.setItem("rescheduleHistory", JSON.stringify(rescheduleHistory))

        return true

    }

    return{ rescheduleAppointment }

}