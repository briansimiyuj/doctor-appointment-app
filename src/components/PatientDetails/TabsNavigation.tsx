import { usePatientDetails } from "../../context/PatientDetailsContext"

const TabsNavigation: React.FC = ()=>{

    const tabs =[

        { id: 'medical-history', label: 'Medical History' },
        { id: 'appointments', label: 'Appointments' },
        { id: 'notes', label: 'Notes' },
        { id: 'documents', label: 'Documents' },

    ],
          { activeTab, setActiveTab } = usePatientDetails()

    return(

        <div className="flex border-b flex-wrap">

            {

                tabs.map(tab =>(

                    <button
                        key={tab.id}
                        className={`px-6 py-2 text-sm font-medium whitespace-nowrap ${
                            activeTab === tab.id
                                ? 'text-primary-bg border-b-2 border-primary-bg'
                                : 'text-gray-600 dark:text-gray-300 hover:text-primary-text dark:hover:text-primary-bg hover:border-b-2 hover:border-gray-300 dark:hover:border-primary-bg'
                        }`}
                        onClick={() => setActiveTab(tab.id as "medical-history" | "appointments" | "notes" | "documents")}
                    >
                        {tab.label}
                    </button>

                ))

            }

        </div>

    )

}

export default TabsNavigation