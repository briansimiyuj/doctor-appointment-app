interface NoteDiagnosisProps{

    diagnosis?: string

}

const NoteDiagnosis: React.FC<NoteDiagnosisProps> = ({ diagnosis })=>{

    return(

        <>
        
            {


                diagnosis ?(

                    <div className="mb-2">

                        <h4 className="font-medium">Diagnosis:</h4>

                        <p className="text-gray-700 whitespace-pre-line">{diagnosis}</p>

                    </div>

                ) : null

            }
        
        </>

    )

}

export default NoteDiagnosis