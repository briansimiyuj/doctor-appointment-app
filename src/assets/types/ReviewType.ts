import { DocumentType } from "./DocumentType"

export interface ReviewType{

  _id: string
  patientID: string
  patientName: string
  patientImage: File | DocumentType | null
  appointmentID: string
  doctorID: string
  ratings: number
  comment?: string
  createdAt: string

}