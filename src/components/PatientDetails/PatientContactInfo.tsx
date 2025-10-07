import { usePatientDetails } from "../../context/PatientDetailsContext"

const PatientContactInfo: React.FC = ()=>{

    const { patientDetails } = usePatientDetails(),
          contact = patientDetails?.patientInfo?.addressValue

    return(

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">

            <div>

                <p className="text-sm text-gray-500">Phone:</p>

                <p className="font-medium">{contact?.phone}</p>

            </div>

            <div>

                <p className="text-sm text-gray-500">Email:</p>

                <p className="font-medium">{contact?.email}</p>

            </div>

            <div>

                <p className="text-sm text-gray-500">Address:</p>

                <p className="font-medium">

                    {contact?.residence}

                    <br/>

                    {contact?.city}, {contact?.state}, {contact?.country}

                </p>

            </div>

        </div>

    )

}

export default PatientContactInfo