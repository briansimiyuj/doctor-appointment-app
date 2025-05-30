import { useContext } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"
import { DoctorType } from "../assets/types/DoctorType"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useScheduleHistory } from "./useScheduleHistory"
import { LoginContext } from "../context/LoginContext"

export const useRescheduleAppointment = () =>{

    const { updateAppointment } = usePatientDetails(),
          { addScheduleHistoryEntry } = useScheduleHistory(),
          loginContext = useContext(LoginContext),
          userType = loginContext?.userType || "patient"

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

        const patientID = appointment.patient._id || 'defaultPatientID',
              storedAppointments = (localStorage.getItem(`appointments-${patientID}`) || "[]"),
              updatedAppointments = JSON.parse(storedAppointments).map((app: AppointmentType) => app._id === appointment._id ? updatedAppointment : app)

        localStorage.setItem(`appointments-${patientID}`, JSON.stringify(updatedAppointments))
        
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

        const performedBy ={

            type: userType,
            name: userType === "doctor" ? appointment.doctor.name : appointment.patient.name,
            _id: userType === "doctor" ? appointment.doctor._id : appointment.patient._id

        }   

        addScheduleHistoryEntry(

            updatedAppointment,
            "rescheduled",
            `Rescheduled appointment by ${userType}`,
            undefined,
            performedBy,
            `Rescheduled from ${rescheduleDetails.originalAppointment.date} at ${rescheduleDetails.originalAppointment.time} with ${rescheduleDetails.originalAppointment.doctorName} to ${rescheduleDetails.newAppointment.date} at ${rescheduleDetails.newAppointment.time} with ${rescheduleDetails.newAppointment.doctorName}`,

        )

        return true

    }

    return{ rescheduleAppointment }

}