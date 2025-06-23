import { usePatientDetails } from "../../../../context/PatientDetailsContext"
import DocumentCard from "./DocumentCard"

const DocumentsList: React.FC = ()=>{

   const { documents } = usePatientDetails() 

    return(

        <div className="space-y-3">

            {

                documents.map(document =>(

                    <DocumentCard key={Number(document._id)} document={document}/>

                ))

            }

        </div>

    )

}

export default DocumentsList