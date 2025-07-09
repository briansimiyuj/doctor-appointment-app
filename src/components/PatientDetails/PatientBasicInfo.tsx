import { usePatientDetails } from "../../context/PatientDetailsContext"

const PatientBasicInfo: React.FC = ()=>{

    const { patientDetails, medicalConditions } = usePatientDetails(),
          patient = patientDetails?.patientInfo

    return(

        <div className="flex flex-col md:flex-row md:items-center justify-between">

            <div>

                <h2 className="text-2xl font-bold text-gray-800">{patient?.name}</h2>

                <p className="text-gray-600">

                    {patient?.age} years old, {patient?.gender}

                </p>

            </div>


            <div className="mt-4 md:mt-0 ml-5">

                {
                    medicalConditions?.length > 0 ?(

                        <div className="flex flex-wrap gap-2">

                            {

                                medicalConditions?.map((condition, index) =>(

                                    <div className="flex flex-wrap gap-2">

                                        <span className="bg-neutral-200 px-2 py-1 rounded-md text-sm" key={index}>{condition}</span>

                                    </div>

                                ))

                            }

                        </div>

                    ):(

                        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-800 font-medium">No medical history</span>
                    
                    )

                }

            </div>

        </div>

    )

}

export default PatientBasicInfo