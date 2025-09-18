export type DocumentType ={

    _id: string
    name: string
    type: string
    uploadDate: Date
    uploadedBy: string
    uploadedByID?: string
    appointmentID?: string | undefined
    size: number
    content?: string
    file?: File
    
}