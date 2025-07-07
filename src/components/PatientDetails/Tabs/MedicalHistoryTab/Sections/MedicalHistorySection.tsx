import SectionHeader from "./SectionHeader"

interface MedicalHistorySectionProps{

    title: string
    items: string[]
    onAdd: () => void

}

const MedicalHistorySection: React.FC<MedicalHistorySectionProps> = ({ title, items, onAdd }) =>{

    return(

        <>
        
            <SectionHeader title={title} items={items} onAdd={onAdd}/>
        
        </>

    )

}

export default MedicalHistorySection