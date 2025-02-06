import { createContext, useContext, useState } from "react"
import { DoctorStatsContextProps } from "../assets/contextProps/DoctorStatsContextProps"
import { assets } from "../assets/frontend/assets"

export const DoctorStatsContext = createContext<DoctorStatsContextProps | null>(null)

export const DoctorStatsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) =>{

    const [stats] = useState({
 
        totalPatients: 150,
        todayAppointments: 10,
        completedAppointments: 120,
        cancelledAppointments: 5,

    }),

    
    [ratings] = useState({

        average: 4.5,
        total: 100,
        distribution:{

            5: 50,
            4: 30,
            3: 15,
            2: 3,
            1: 2

        }

    }),


    [reviews] = useState([{
        
        _id: 'rev123',
        patientID: 'pat123',
        patientName: 'John Doe',
        patientImage: assets?.appointmentImage,
        ratings: 5,
        comment: 'Dr. Smith is very knowledgeable and caring. She took the time to explain my condition and treatment options in detail.',
        createdAt: '2024-02-15',

    }]),

    [performance] = useState({

        responseRate: 90,
        appointmentCompletionRate: 95,
        appointmentCancellationRate: 5,
        patientSatisfactionRate: 98,
        averageWaitingTime: 10 // in minutes

    }),
    
    value = { stats, ratings, reviews, performance }


    return(

        <DoctorStatsContext.Provider value={value}>

            {children}

        </DoctorStatsContext.Provider>

    )

}



export const useDoctorStats = () =>{

   const context = useContext(DoctorStatsContext)

    if (!context) throw new Error('useDoctorStats must be used within DoctorStatsContextProvider')

    return context

}