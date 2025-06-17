import PatientContactInfo from "../components/PatientDetails/PatientContactInfo"
import PatientHeader from "../components/PatientDetails/PatientHeader"
import TabsNavigation from "../components/PatientDetails/TabsNavigation"
import TabContent from "../components/PatientDetails/Tabs/TabContent"
import { usePatientDetails } from "../context/PatientDetailsContext"
import AppointmentTab from "../components/PatientDetails/Tabs/AppointmentTab/AppointmentTab"
import DocumentTab from "../components/PatientDetails/Tabs/DocumentTab/DocumentTab"
import { DocumentsTabContextProvider } from "../context/DocumentsTabContext"

const PatientDetailsPage: React.FC = ()=>{

    const { activeTab, patientAppointments } = usePatientDetails()

    if(patientAppointments.length === 0){

        return(

            <div className="container mx-auto px-4 py-8">

                <h1 className="text-2xl font-bold mb-4">No Appointments</h1> 

                <p className="text-gray-600">There are no appointments for this patient.</p>

            </div>

        )

    }

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

                            <AppointmentTab/>

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

                                <DocumentsTabContextProvider>

                                    <DocumentTab/>

                                </DocumentsTabContextProvider>

                            </div>

                        </TabContent>

                    ): null

                }

            </div>

        </div>

    )

}

export default PatientDetailsPage