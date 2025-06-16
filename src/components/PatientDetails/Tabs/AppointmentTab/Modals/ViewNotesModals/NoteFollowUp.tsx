interface NoteFollowUpProps{

    followUpDate?: string

}

const NoteFollowUp: React.FC<NoteFollowUpProps> = ({ followUpDate })=>{

    return(

        <>

            {

                followUpDate ?(

                    <div className="mb-2">
                        
                        <h4 className="font-medium">Follow Up Date:</h4>

                        <p className="text-gray-500">{followUpDate}</p>

                    </div>

                ):null

            }

        </>

    )

}

export default NoteFollowUp