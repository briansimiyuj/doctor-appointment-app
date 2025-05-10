export  interface AppointmentType{

    patient:{

        _id: string
        name: string
        image: string

    }

    doctor:{

        _id: string
        name: string
        image: string

    }

    _id: string
    date: string
    time: string
    status: string
    consultationType: "online" | "in-person"
    
}