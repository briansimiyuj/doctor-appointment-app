import { ReviewType } from "../types/ReviewType"

export interface DoctorReviewsContextProps{

    ratings: number
    setRatings: (ratings: number) => void
    comment: string
    setComment: (comment: string) => void
    isSubmitting: boolean
    setIsSubmitting: (isSubmitting: boolean) => void
    reviews: ReviewType[]
    setReviews: (reviews: ReviewType[]) => void
    addReview: (review: ReviewType) => void
    deleteReview: (reviewID: string) => void
    updateReview: (reviewID: string, updatedReview: Partial<ReviewType>) => void
    getDoctorReviews: (doctorID: string) => Promise<ReviewType[]>
    subscribeToDoctorReviews: (doctorID: string) => void
    averageRating: number
    totalReviews: number
    ratingDistribution: { [key: number]: number }
    formatTimestamp: (timestamp: string) => string
    loading: boolean
    setLoading: (loading: boolean) => void
    resetForm: () => void

}