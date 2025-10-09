interface ScheduleHistoryMetadataProps{

    performedBy?:{

        type: "doctor" | "patient" | "system"
        name?: string
        _id?: string

    }

    reason?: string | null
    alternative?: string | null
    notes?: string | null

}

const ScheduleHistoryMetadata: React.FC<ScheduleHistoryMetadataProps> = ({ performedBy, reason, alternative, notes })=>{

    return(

        <div className="space-y-2">

            {

                performedBy &&(

                    <div className="text-sm">

                        <span className="font-medium text-gray-700">Performed By:</span>

                        <span className="ml-1">

                            { performedBy.name } ({ performedBy.type })

                        </span>

                    </div>

                )

            }

            {

                reason &&(

                    <div className="text-sm">

                        <span className="font-medium text-gray-700">Reason:</span>

                        <span className="text-gray-600 ml-1">

                            { reason }

                        </span>

                    </div>

                )

            }

            {

                alternative &&(

                    <div className="text-sm">

                        <span className="font-medium text-gray-700">Alternative:</span>

                        <span className="ml-1 text-gray-600">

                            { alternative }

                        </span>

                    </div>

                )

            }

            {

                notes &&(

                    <div className="text-sm">

                        <span className="font-medium text-gray-700">Notes:</span>

                        <span className="ml-1 text-gray-600">

                            { notes }

                        </span>

                    </div>

                )

            }

        </div>

    )

}

export default ScheduleHistoryMetadata