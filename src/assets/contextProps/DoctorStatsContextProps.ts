import { DocumentType } from "../types/DocumentType"

export interface DoctorStatsContextProps{

    stats:{

        totalPatients: number
        todayAppointments: number
        completedAppointments: number 
        cancelledAppointments: number
        upcomingAppointments: number
        noShowAppointments: number
        newPatientsThisMonth: number
        followUpAppointments: number
        totalRevenue: number    
        totalAppointments: number

    }

    ratings:{

        average: number
        total: number
        distribution:{

            5: number
            4: number
            3: number
            2: number
            1: number
            
        }
        
    }

    reviews:{

        _id: string
        patientID: string
        patientName: string
        patientImage: File | DocumentType | null
        ratings: number
        comment: string
        createdAt: string
        response?: string

    }[]

    performance:{
        
        responseRate: number
        appointmentCompletionRate: number
        appointmentCancellationRate: number
        patientSatisfactionRate: number
        averageWaitingTime: number // in minutes

    }

}