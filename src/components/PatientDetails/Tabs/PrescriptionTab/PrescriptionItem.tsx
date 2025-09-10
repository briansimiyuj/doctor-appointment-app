import { PrescriptionType } from "../../../../assets/types/PrescriptionType"
import PrescriptionItemAction from "./PrescriptionItemAction"

interface PrescriptionItemProps{

    prescription: PrescriptionType

}

const PrescriptionItem: React.FC<PrescriptionItemProps> = ({ prescription })=>{

    const truncatedNotes = prescription.notes && prescription.notes.length > 120 ? prescription.notes.slice(0, 120) + "..." : prescription.notes || "No notes"

    return(

        <li className="border rounded-md p-4 shadow hover:shadow-md transition duration-300" key={prescription._id}>

            <h3 className="text-lg font-bold mb-1">{prescription.prescriptionName}</h3>

            <h4 className="text-base font-semibold mb-2">{prescription.medicineName}</h4>

            <p className="text-gray-700 mb-2">Dose: {prescription.dose}</p>

            <p className="text-gray-700 mb-2">Frequency: {prescription.frequency}</p>

            <p className="text-gray-700 mb-2">Duration: {prescription.duration}</p>
            
            <p className="text-gray-700 mb-2">{truncatedNotes}</p>

                <div className="text-sm text-gray-500">
                
                    <span>Doctor Name: {prescription.doctorName}</span> ·{" "}

                    <span>Created: {new Date(prescription.createdAt).toLocaleDateString()}</span>

                    {
                    
                        prescription.updatedAt &&(
                            
                            <>
                            
                                · <span>Updated: {new Date(prescription.updatedAt).toLocaleDateString()}</span>
                                
                            </>

                        )
                        
                    }

                </div>
            
            <PrescriptionItemAction prescription={prescription}/>

        </li>

    )

}

export default PrescriptionItem