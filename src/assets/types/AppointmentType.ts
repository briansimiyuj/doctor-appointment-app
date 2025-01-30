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

    date: string;
    time: string;
    status: string
    
}