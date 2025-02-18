export type PatientType ={

    _id: string
    name: string
    age: number
    gender: string
    status: string
    
    contact:{
        phone: string
        email: string
    }
    
    address:{
        line1: string
        line2: string
    }

    appointment:{
        date: string
        time: string
        doctor: string
        speciality: string
    }
}