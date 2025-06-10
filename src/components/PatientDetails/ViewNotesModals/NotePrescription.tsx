interface NotePrescriptionProps{

    prescription?: string

}

const NotePrescription: React.FC<NotePrescriptionProps> = ({ prescription })=>{

    return(

        <>
        
            {

                prescription ?( 

                    <div className="mb-2">

                        <h4 className="font-medium">Prescription:</h4>

                        <p className="text-gray-700 whitespace-pre-line">{prescription}</p>

                    </div>

                ): null

            }
        
        </>

    )

}

export default NotePrescription