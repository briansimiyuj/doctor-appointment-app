import { useState } from "react"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { AppointmentType } from "../assets/types/AppointmentType"

export const useUpdatePatientDetails = () =>{

   const { patientAppointments, updateAppointmentStatus, patientID } = usePatientDetails(),
            latestAppointment = patientAppointments && patientAppointments.length > 0 
         ? patientAppointments[0] 
         : null,
         [showCancelModal, setShowCancelModal] = useState(false),
         [showRejectModal, setShowRejectModal] = useState(false),
         [showRescheduleModal, setShowRescheduleModal] = useState(false),
         [appointmentToCancel, setAppointmentToCancel] = useState<AppointmentType | null>(() =>{
            const savedAppointment = localStorage.getItem('CurrentAppointmentToCancel')

            return savedAppointment ? JSON.parse(savedAppointment) : null
            
         }),
         [appointmentToReject, setAppointmentToReject] = useState<AppointmentType | null>(() =>{
            const savedAppointment = localStorage.getItem('CurrentAppointmentToReject')

            return savedAppointment ? JSON.parse(savedAppointment) : null
         }),
         [appointmentToReschedule, setAppointmentToReschedule] = useState<AppointmentType | null>(null),
         [showRescheduleHistoryModal, setShowRescheduleHistoryModal] = useState(false),
         [showScheduleNewAppointmentModal, setShowScheduleNewAppointmentModal] = useState(false),
         [appointmentToSchedule, setAppointmentToSchedule] = useState<AppointmentType | null>(null),
         [newDate, setNewDate] = useState<string | null>(null),
         [newTime, setNewTime] = useState<string | null>(null)

   const handleApproveAppointment = () =>{
   
      if(latestAppointment){

         updateAppointmentStatus(latestAppointment, "approved")

      }
   
   }


   const openCancelModal = (appointment: AppointmentType) =>{

      localStorage.setItem('CurrentAppointmentToCancel', JSON.stringify(appointment))
   
      setAppointmentToCancel(appointment)
      
      setShowCancelModal(true)
   
   }

   const closeCancelModal = () =>{
   
      setAppointmentToCancel(null)
      
      setShowCancelModal(false)
   
   }


   const openRejectModal = (appointment: AppointmentType) =>{

      localStorage.setItem('CurrentAppointmentToReject', JSON.stringify(appointment))

      setAppointmentToReject(appointment)

      console.log(appointmentToReject)

      setShowRejectModal(true)

   }


   const closeRejectModal = () =>{

      localStorage.removeItem('CurrentAppointmentToReject')

      setAppointmentToReject(null)

      setShowRejectModal(false)

   }

   const handleRejectAppointment = (reason: string, alternative?: string)  =>{
   
      const appointment = appointmentToReject || (() =>{

         const savedAppointment = localStorage.getItem('CurrentAppointmentToReject')

         return savedAppointment ? JSON.parse(savedAppointment) : null

      })()
      
      if(!appointment){

         console.error('No appointment to reject')

         return

      }


      const appointmentID = `${appointment.date}-${appointment.time}`,
            rejectionReason = JSON.parse(localStorage.getItem(`rejection-reason-${patientID}`) || '{}')

      rejectionReason[appointmentID] ={

         reason,
         alternative: alternative || '',
         rejectedAt: new Date().toISOString(),
         appointmentDetails: appointmentToReject

      }

      localStorage.setItem(`rejectionReason-${patientID}`, JSON.stringify(rejectionReason))

      closeRejectModal()
   
   }


   const openRescheduleModal = (appointment: AppointmentType) =>{
   
      setAppointmentToReschedule(appointment)

      setNewDate(appointment.date)

      setNewTime(appointment.time)

      setShowRescheduleModal(true)
   
   }

   const closeRescheduleModal = () =>{
   
      setAppointmentToReschedule(null)

      setNewDate(null)

      setNewTime(null)

      setShowRescheduleModal(false)
   
   }

   const openRescheduleHistoryModal = () =>{

      setShowRescheduleHistoryModal(true)       
   
   }

   const closeRescheduleHistoryModal = () =>{

      setShowRescheduleHistoryModal(false) 
   
   }

   const openScheduleNewAppointmentModal = (appointment: AppointmentType) =>{

      setAppointmentToSchedule(appointment)

      setShowScheduleNewAppointmentModal(true)

   }

   const closeScheduleNewAppointmentModal = () =>{

      setAppointmentToSchedule(null)

      setShowScheduleNewAppointmentModal(false)

   }

   return{

      handleApproveAppointment,
      openCancelModal,
      showCancelModal,
      appointmentToCancel,
      closeCancelModal,
      handleRejectAppointment,
      setAppointmentToReject,
      showRejectModal,
      appointmentToReject,
      openRejectModal,
      closeRejectModal,
      openRescheduleModal,
      closeRescheduleModal,
      showRescheduleModal,
      appointmentToReschedule,
      newDate,
      newTime,
      setNewDate,
      setNewTime,
      showRescheduleHistoryModal,
      openRescheduleHistoryModal,
      closeRescheduleHistoryModal,
      showScheduleNewAppointmentModal,
      openScheduleNewAppointmentModal,
      closeScheduleNewAppointmentModal,
      appointmentToSchedule

   }

}