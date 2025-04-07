import PatientContactInfo from "../components/PatientDetails/PatientContactInfo"
import PatientHeader from "../components/PatientDetails/PatientHeader"
import TabsNavigation from "../components/PatientDetails/TabsNavigation"
import TabContent from "../components/PatientDetails/Tabs/TabContent"
import { usePatientDetails } from "../context/PatientDetailsContext"

const PatientDetailsPage: React.FC = ()=>{

    const { activeTab } = usePatientDetails()

    return(

        <div className="container mx-auto px-4 py-8">

            <PatientHeader/>

            <PatientContactInfo/>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">

                <TabsNavigation/>

                {

                    activeTab === "medical-history" ?(

                        <TabContent tabID="medical-history">

                            <div className="p-4">

                                <h3 className="text-lg font-medium mb-4">Medical History</h3>

                            </div>

                        </TabContent>

                    ): activeTab === "appointments" ?(

                        <TabContent tabID="appointments">

                            <div className="p-4">

                                <h3 className="text-lg font-medium mb-4">Appointments</h3>

                            </div>

                        </TabContent>

                    ): activeTab === "notes" ?(

                        
                        <TabContent tabID="notes">
                            
                            <div className="p-4">

                                <h3 className="text-lg font-medium mb-4">Notes</h3>

                            </div>

                        </TabContent>

                    ): activeTab === "documents" ?(

                        <TabContent tabID="documents">

                            <div className="p-4">

                                <h3 className="text-lg font-medium mb-4">Documents</h3>

                            </div>

                        </TabContent>

                    ): null

                }

            </div>

        </div>

    )

}

export default PatientDetailsPage