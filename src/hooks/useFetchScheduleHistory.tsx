import { useContext, useEffect, useState } from "react"
import { HistoryResult } from "../assets/types/HistoryResult"
import { ScheduleHistoryItem } from "../assets/types/ScheduleHistoryItem"
import { usePatientDetails } from "../context/PatientDetailsContext"
import { useToast } from "./useToast"
import { LoginContext } from "../context/LoginContext"
import { collection, getDocs, orderBy, query, where } from "firebase/firestore"
import { db } from "../firebaseConfig"

export const useFetchScheduleHistory = (): HistoryResult =>{

    const { patientDetails } = usePatientDetails(),
          { showToast } = useToast(),
          [history, setHistory] = useState<ScheduleHistoryItem[]>([]),
          [loading, setLoading] = useState(false),
          [error, setError] = useState<Error | null>(null),
          [refreshTrigger, setRefreshTrigger] = useState(0),
          loginContext = useContext(LoginContext)

    if(!loginContext) throw new Error('useFetchScheduleHistory must be used within a LoginContext')

    const { userID, userType } = loginContext,
          isPatient = userType === "patient",
          patientID = isPatient ? userID : patientDetails?.patientInfo._id

    const fetchHistory = async() =>{
    
        if(!patientID){

            setLoading(false)

            return

        }

        setLoading(true)

        setError(null)

        let allHistory: ScheduleHistoryItem[] = []

        try{

            const appointmentRef = collection(db, "appointments"),
                  patientAppointmentsQuery = query(appointmentRef, where("patient.patientInfo._id", "==", patientID), orderBy("date", "desc")),
                  appointmentSnapshots = await getDocs(patientAppointmentsQuery)     

            const historyPromises = appointmentSnapshots.docs.map(async (appointmentDoc) => {

                const appointmentID = appointmentDoc.id, historySubcollectionRef = collection(db, "appointments", appointmentID, "history"), historySnapshots = await getDocs(historySubcollectionRef)

                return historySnapshots.docs.map(historyDoc =>({

                    _id: historyDoc.id,
                    ...historyDoc.data()
                        
                }) as unknown as ScheduleHistoryItem)

            })

            const historyArrays: ScheduleHistoryItem[][] = await Promise.all(historyPromises)

            allHistory = historyArrays.flat()

            allHistory.sort((a, b) =>{

                return new Date(b.timeStamp).getTime() - new Date(a.timeStamp).getTime()

            })

            setHistory(allHistory)

            
        }catch(err){

            console.error('Error fetching schedule history: ', err)

            setError(err as Error)

            showToast("Error fetching schedule history", "error")
            
        }finally{

            setLoading(false)

        }
    
    }

    useEffect(() =>{
    
       fetchHistory()
    
    }, [patientID, refreshTrigger])

    const refetchHistory = () =>{
    
       setRefreshTrigger(prev => prev + 1)
    
    }

    return { history, loading, error, refetchHistory }

}
