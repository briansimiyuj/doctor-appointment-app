export interface ConsultationSettings{

    fee: number
    duration: number
    currency: string

}

export interface AvailabilitySettings{

    acceptNewPatients: boolean
    allowOnlineConsultations: boolean
    allowInPersonConsultations: boolean
    autoConfirmation: boolean
    maxPatientsPerDay: number

}

export interface NotificationSettings{

    emailNotifications: boolean
    smsNotifications: boolean
    appointmentReminders:{

        daysBefore: boolean
        hoursBefore: boolean
        sameDay: boolean

    }

    bookingUpdates:{

        confirmation: boolean
        cancellation: boolean
        rescheduling: boolean

    }

    paymentNotifications: boolean
    systemUpdates: boolean

}

export interface SettingsContextProps{

    consultationSettings: ConsultationSettings
    availabilitySettings: AvailabilitySettings
    notificationSettings: NotificationSettings
    updateConsultationSettings: (settings: ConsultationSettings) => void
    updateAvailabilitySettings:(settings: AvailabilitySettings) => void
    updateNotificationSettings: (settings: NotificationSettings) => void
    isChanged: boolean
    setIsChanged: (value: boolean) => void

}
