import { useState } from "react"
import { AppointmentType } from "../assets/types/AppointmentType"

export const useUpdatePatientDetails = () =>{

   const [showCancelModal, setShowCancelModal] = useState(false),
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
         [showManageModal, setShowManageModal] = useState(false),
         [appointmentToManage, setAppointmentToManage] = useState<AppointmentType | null>(() =>{
            const savedAppointment = localStorage.getItem('CurrentAppointmentToManage')

            return savedAppointment ? JSON.parse(savedAppointment) : null
         }),
         [showAddNotesModal, setShowAddNotesModal] = useState(false),
         [appointmentToAddNotes, setAppointmentToAddNotes] = useState<AppointmentType | null>(() =>{
            const savedAppointment = localStorage.getItem('CurrentAppointmentToAddNotes')

            return savedAppointment ? JSON.parse(savedAppointment) : null
         }),
         [showViewNotesModal, setShowViewNotesModal] = useState(
            import.meta.env.VITE_DEV_MODE === 'true' ? true : false
         ),
         [appointmentToViewNotes, setAppointmentToViewNotes] = useState<AppointmentType | null>(() =>{
            const savedAppointment = localStorage.getItem('CurrentAppointmentToViewNotes')

            return savedAppointment ? JSON.parse(savedAppointment) : null
         }),
         [appointmentToSchedule, setAppointmentToSchedule] = useState<AppointmentType | null>(null),
         [showScheduleHistoryModal, setShowcheduleHistoryModal] = useState<boolean>(false),
         [newDate, setNewDate] = useState<string | null>(null),
         [newTime, setNewTime] = useState<string | null>(null)


   const openCancelModal = (appointment: AppointmentType) =>{

      localStorage.setItem('CurrentAppointmentToCancel', JSON.stringify(appointment))
   
      setAppointmentToCancel(appointment)
      
      setShowCancelModal(true)
   
   }

   const closeCancelModal = () =>{

      localStorage.removeItem('CurrentAppointmentToCancel')
   
      setAppointmentToCancel(null)
      
      setShowCancelModal(false)
   
   }


   const openRejectModal = (appointment: AppointmentType) =>{

      localStorage.setItem('CurrentAppointmentToReject', JSON.stringify(appointment))

      setAppointmentToReject(appointment)

      setShowRejectModal(true)

   }


   const closeRejectModal = () =>{

      localStorage.removeItem('CurrentAppointmentToReject')

      setAppointmentToReject(null)

      setShowRejectModal(false)

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

   const openScheduleHistoryModal = () =>{

      setShowcheduleHistoryModal(true)      
   
   }

   const closeScheduleHistoryModal = () =>{

      setShowcheduleHistoryModal(false) 
   
   }

   const openManageModal = (appointment: AppointmentType) =>{
   
      localStorage.setItem('CurrentAppointmentToManage', JSON.stringify(appointment))

      setAppointmentToManage(appointment)

      setShowManageModal(true)
   
   }

   const closeManageModal = () =>{

      localStorage.removeItem('CurrentAppointmentToManage')

      setAppointmentToManage(null)

      setShowManageModal(false)

   }

   const openAddNotesModal = (appointment: AppointmentType) =>{

      localStorage.setItem('CurrentAppointmentToAddNotes', JSON.stringify(appointment))

      setAppointmentToAddNotes(appointment)

      setShowAddNotesModal(true)

   }

   const closeAddNotesModal = () =>{

      localStorage.removeItem('CurrentAppointmentToAddNotes')

      setAppointmentToAddNotes(null)

      setShowAddNotesModal(false)

   }

   const openViewNotesModal = (appointment: AppointmentType) =>{

      localStorage.setItem('CurrentAppointmentToViewNotes', JSON.stringify(appointment))

      setAppointmentToViewNotes(appointment)

      setShowViewNotesModal(true)

   }

   const closeViewNotesModal = () =>{

      localStorage.removeItem('CurrentAppointmentToViewNotes')

      setAppointmentToViewNotes(null)

      setShowViewNotesModal(false)

   }

   return{

      openCancelModal,
      showCancelModal,
      appointmentToCancel,
      closeCancelModal,
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
      appointmentToSchedule,
      showScheduleHistoryModal,
      openScheduleHistoryModal,
      closeScheduleHistoryModal,
      showManageModal,
      openManageModal,
      closeManageModal,
      appointmentToManage,
      showAddNotesModal,
      openAddNotesModal,
      closeAddNotesModal,
      appointmentToAddNotes,
      showViewNotesModal,
      openViewNotesModal,
      closeViewNotesModal,
      appointmentToViewNotes

   }

}