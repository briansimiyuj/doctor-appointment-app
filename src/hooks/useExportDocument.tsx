import jsPDF from "jspdf"
import { PrescriptionType } from "../assets/types/PrescriptionType"
import { NoteType } from "../assets/types/NoteType"

export const useExportDocument = () =>{

    const handleExportDocument = (docData: PrescriptionType | NoteType, type: "prescription" | "note") =>{

        const doc = new jsPDF()

        doc.setFontSize(18)

        if(type === "prescription" && "prescriptionName" in docData){
            
            const title = doc.splitTextToSize(docData.prescriptionName, 170)

            doc.text(title, 105, 20, { align: "center" })

        }else if(type === "note" && "title" in docData){

            const title = doc.splitTextToSize(docData.title, 170)

            doc.text(title, 105, 20, { align: "center" })

        }

        doc.setFontSize(14)

        let y = 40

        if(type === "prescription" && "medicineName" in docData){

            const prescription = docData as PrescriptionType

            doc.text(doc.splitTextToSize(`Medicine Name: ${prescription.medicineName}`, 170), 20, y)

            y += 20

            doc.text(doc.splitTextToSize(`Dose: ${prescription.dose}`, 170), 20, y)

            y += 20
            
            doc.text(doc.splitTextToSize(`Frequency: ${prescription.frequency}`, 170), 20, y)

            y += 20

            doc.text(doc.splitTextToSize(`Duration: ${prescription.duration}`, 170), 20, y)

            y += 20

            if(prescription.notes){

                doc.text(doc.splitTextToSize(`Notes: ${prescription.notes}`, 170), 20, y)

                y += 20

            }

            doc.text(doc.splitTextToSize(`Prescribed By: ${prescription.doctorName}`, 170), 20, y)
           
            y += 20

            doc.text(doc.splitTextToSize(`Prescribed On: ${new Date(prescription.createdAt).toLocaleDateString()}`, 170), 20, y)

        }else if(type === "note" && "content" in docData){

            const note = docData as NoteType

            doc.text(doc.splitTextToSize(`Content: ${note.content}`, 170), 20, y)
            
            y += 20

            doc.text(doc.splitTextToSize(`Author: ${note.doctorName}`, 170), 20, y)
            
            y += 20
            
            doc.text(doc.splitTextToSize(`Date: ${new Date(note.date).toLocaleDateString()}`, 170), 20, y)

        }

        const fileName = type === "prescription" 
            ? `${(docData as PrescriptionType).prescriptionName}.pdf`
            : `${(docData as NoteType).title}.pdf`

        doc.save(fileName)

        alert(`${type.charAt(0).toUpperCase() + type.slice(1)} exported successfully`)

    }

    return { handleExportDocument }

}
