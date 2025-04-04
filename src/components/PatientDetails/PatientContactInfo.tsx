import { usePatientDetails } from "../../context/PatientDetailsContext"

const PatientContactInfo: React.FC = ()=>{

    const { patientDetails } = usePatientDetails(),
          patient = patientDetails?.patientInfo

    return(

        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">

            <div>

                <p className="text-sm text-gray-500">Phone:</p>

                <p className="font-medium">{patient?.contact.phone}</p>

            </div>

            <div>

                <p className="text-sm text-gray-500">Email:</p>

                <p className="font-medium">{patient?.contact.email}</p>

            </div>

            <div>

                <p className="text-sm text-gray-500">Address:</p>

                <p className="font-medium">

                    {patient?.address?.line1}

                    {patient?.address?.line2 ? `, ${patient?.address?.line2}` : ""}

                </p>

            </div>

        </div>

    )

}

export default PatientContactInfo