import { useContext } from "react"
import { ProfileContext } from "../context/ProfileContext"
import NotFoundPage from "./NotFoundPage"
import { LoginContext } from "../context/LoginContext"
import { useAppointmentsContext } from "../context/AppointmentContext"
import AppointmentHeader from "../components/AppointmentsDetails/AppointmentHeader"
import TabsNavigation from "../components/PatientDetails/TabsNavigation"
import { usePatientDetails } from "../context/PatientDetailsContext"
import TabContent from "../components/PatientDetails/Tabs/TabContent"
import PrescriptionTab from "../components/AppointmentsDetails/Tabs/PrescriptionTab/PrescriptionTab"
import { NotesTabProvider } from "../context/NotesTabContext"
import NoteTab from "../components/AppointmentsDetails/Tabs/NoteTab/NoteTab"
import { DocumentsTabContextProvider } from "../context/DocumentsTabContext"
import DocumentTab from "../components/PatientDetails/Tabs/DocumentTab/DocumentTab"

const AppointmentDetailsPage: React.FC = ()=>{

    const profileContext = useContext(ProfileContext),
          loginContext = useContext(LoginContext)

    if(!profileContext || !loginContext) return null

    const { profile } = profileContext, 
          { isAuthenticated, loading } = loginContext,
          { appointment } = useAppointmentsContext(),
          { activeTab } = usePatientDetails()

    if(loading) return null

    if(profile?.type === "doctor" || !isAuthenticated){

        return(

            <NotFoundPage/>

        )

    }

    if(!appointment){

        return(

            <div className="container mx-auto px-4 py-8">

                <h1 className="text-2xl font-bold mb-4">No Appointment Found</h1>

                <p className="text-gray-600">Please check your appointments list.</p>

            </div>

        )

    }

    return(

        <div className="container mx-auto px-4 py-8">

            <AppointmentHeader/>

            <div className="bg-white rounded-lg shadow-md overflow-hidden mt-6">

                <TabsNavigation/>

                {

                    activeTab === "prescriptions" ?(

                        <div className="p-4">

                            <TabContent tabID="prescriptions">

                                <NotesTabProvider>

                                    <PrescriptionTab/>

                                </NotesTabProvider>


                            </TabContent>

                        </div>

                    ): activeTab === "notes" ?(

                        <div className="p-4">

                            <TabContent tabID="notes">

                                <NotesTabProvider>

                                    <NoteTab/>

                                </NotesTabProvider>

                            </TabContent>

                        </div>

                    ): activeTab === "documents" ?(

                        <div className="p-4">

                            <TabContent tabID="documents">

                                <DocumentsTabContextProvider>

                                    <DocumentTab/>

                                </DocumentsTabContextProvider>

                            </TabContent>

                        </div>

                    ): null

                }

            </div>

        </div>

    )

}

export default AppointmentDetailsPage