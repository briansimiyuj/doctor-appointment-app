export const dummySettingsData ={

    consultationSettings:{

        fee: 50,
        duration: 30,
        currency: "USD"

    },

    availabilitySettings:{

        acceptNewPatients: true,
        allowOnlineConsultations: true,
        allowInPersonConsultations: true,
        autoConfirmation: true,
        maxPatientsPerDay: 10

    },

    notificationSettings:{

        emailNotifications: true,
        smsNotifications: true,
        appointmentReminders:{

            daysBefore: true,
            hoursBefore: true,
            sameDay: true

        },

        boookingUpdates:{

            confirmation: true,
            cancellation: true,
            rescheduling: true

        },

        paymentNotifications: true,
        systemUpdates: true
        
    }
    
}