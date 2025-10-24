import { createContext, useContext, useState } from "react"
import { DoctorReviewsContextProps } from "../assets/contextProps/DoctorReviewsContextProps"
import { ReviewType } from "../assets/types/ReviewType"

interface DoctorReviewsContextProviderProps{

    children: React.ReactNode

}

export const DoctorReviewsContext=createContext<DoctorReviewsContextProps | undefined>(undefined)

export const DoctorReviewsContextProvider:React.FC<DoctorReviewsContextProviderProps> = ({ children })=>{

    const [ratings, setRatings] = useState(0),
          [comment, setComment] = useState(''),
          [isSubmitting, setIsSubmitting] = useState(false),
          [loading, setLoading] = useState(false),
          [reviews, setReviews] = useState<ReviewType[]>([])

    const addReview = (review: ReviewType) =>{
    
        setReviews(prev => [...prev, review])
    
    }
    
    const deleteReview = (reviewID: string) =>{
    
       setReviews(prev => prev.filter(review => review._id !== reviewID))
    
    }
    
    const updateReview = (reviewID: string, updatedReview: Partial<ReviewType>) =>{
    
        setReviews(prev => prev.map(review => 
           review._id === reviewID ? { ...review, ...updatedReview } : review
       ))
    
    }
    
    const getDoctorReviews = (_doctorID: string): ReviewType[] =>{
    
       // TODO: Implement get doctor reviews logic
       return []
    
    }
    
    const subscribeToDoctorReviews = (_doctorID: string) =>{
    
       // TODO: Implement subscribe to doctor reviews logic
    
    }
    
    const formatTimestamp = (timestamp: string): string =>{
    
       // TODO: Implement timestamp formatting
       return timestamp
    
    }
    
    const resetForm = () =>{
    
       setRatings(0)
       setComment('')
    
    }

    const averageRating = 0,
          totalReviews = 0,
          ratingDistribution: { [key: number]: number } = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }

    const contextValue: DoctorReviewsContextProps ={

        ratings,
        setRatings,
        comment,
        setComment,
        isSubmitting,
        setIsSubmitting,
        reviews,
        setReviews,
        addReview,
        deleteReview,
        updateReview,
        getDoctorReviews,
        subscribeToDoctorReviews,
        averageRating,
        totalReviews,
        ratingDistribution,
        formatTimestamp,
        loading,
        setLoading,
        resetForm

    }

    return(

        <DoctorReviewsContext.Provider value={contextValue}>

            {children}

        </DoctorReviewsContext.Provider>

    )

}

export const useDoctorReviewsContext = () =>{

    const context = useContext(DoctorReviewsContext)

    if(!context) throw new Error('useDoctorReviewsContext must be used within DoctorReviewsContextProvider')

    return context

}