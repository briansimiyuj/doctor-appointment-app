import { AppointmentType } from "./AppointmentType";

export interface PendingFollowUp{

    appointment: AppointmentType
    followUpDate: string
    defaultTime: string
    consultationType: "in-person" | "online"

}