interface BillingHeaderProps{

    appointmentID: string

}

const BillingHeader: React.FC<BillingHeaderProps> = ({ appointmentID })=>{

    return(

        <div className="mb-8">

            <h1 className="text-2xl md:text-3xl font-bold">Billing Information For</h1>

            <p>Appointment ID: {appointmentID.slice(0, 6)}</p> 

        </div>

    )

}

export default BillingHeader