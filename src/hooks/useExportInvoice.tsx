import jsPDF from "jspdf"
import { BillingRecord } from "../assets/types/BillingType"
import { useCurrencyContext } from "../context/CurrencyContext"

export const useExportInvoice = () =>{

    const { currencySymbol } = useCurrencyContext()

    const handleExportInvoice = (invoice: BillingRecord) =>{

        const doc = new jsPDF()

        // ✅ Fix: Convert Firestore timestamp to Date
        const createdAt = invoice.createdAt instanceof Date 
            ? invoice.createdAt 
            : new Date((invoice.createdAt as any).seconds * 1000)

        doc.setFontSize(24)

        const title = "INVOICE"

        doc.text(title, 105, 20, { align: "center" })

        doc.setFontSize(10)

        doc.text(`Invoice #: ${invoice._id.slice(0, 8)}`, 20, 35)

        doc.text(`Date: ${createdAt.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}`, 20, 42)

        doc.text(`Status: ${invoice.status.toUpperCase()}`, 20, 49)

        doc.setFontSize(12)

        doc.text("Bill To:", 20, 62)

        doc.setFontSize(10)

        doc.text(invoice.patientName, 20, 70)

        if(invoice.patientEmail) doc.text(invoice.patientEmail, 20, 78)

        if(invoice.patientPhone) doc.text(invoice.patientPhone, 20, 86)

        doc.setFontSize(12)

        doc.text("Provider:", 120, 62)

        doc.setFontSize(10)

        doc.text(`Dr. ${invoice.doctorName}`, 120, 70)

        let y = 105

        doc.setFontSize(10)

        doc.setFont("helvetica", "bold")

        doc.text("Item", 20, y)

        doc.text("Qty", 100, y)

        doc.text("Price", 130, y)

        doc.text("Tax", 160, y)

        doc.text("Total", 180, y)

        doc.line(20, y + 2, 190, y + 2)

        y += 10

        doc.setFont("helvetica", "normal")

        invoice.itemList.forEach(item =>{

            const lineTotal = item.price * item.sessionCount,
                  itemName = doc.splitTextToSize(item.name, 70)

            doc.text(itemName, 20, y)

            doc.text(item.sessionCount.toString(), 100, y)

            doc.text(`${currencySymbol}${item.price.toFixed(2)}`, 130, y)

            doc.text(`${item.taxRate}%`, 160, y)

            doc.text(`${currencySymbol}${lineTotal.toFixed(2)}`, 180, y)

            y += 8

            if(item.description){

                doc.setFontSize(8)

                doc.setTextColor(100)

                const desc = doc.splitTextToSize(item.description, 70)

                doc.text(desc, 20, y)

                doc.setTextColor(0)

                doc.setFontSize(10)

                y += 6

            }

            y += 2

        })

        y += 8

        doc.line(20, y - 5, 190, y - 5)

        doc.setFont("helvetica", "bold")

        doc.text("Subtotal:", 130, y)

        doc.text(`${currencySymbol}${invoice.subTotal.toFixed(2)}`, 180, y)

        y += 8

        doc.text("Discount:", 130, y)

        doc.text(`-${currencySymbol}${invoice.discount.toFixed(2)}`, 180, y)

        y += 8

        doc.text("Tax:", 130, y)

        doc.text(`${currencySymbol}${invoice.tax.toFixed(2)}`, 180, y)

        y += 10

        doc.setFontSize(12)

        doc.text("TOTAL:", 130, y)

        doc.text(`${currencySymbol}${invoice.total.toFixed(2)}`, 180, y)

        doc.save(`Invoice-${invoice._id.slice(0, 6)}.pdf`)

    }

    return { handleExportInvoice }

}