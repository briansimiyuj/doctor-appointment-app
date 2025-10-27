import { useState, useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer/Footer"
import AboutPage from "./pages/AboutPage"
import DoctorPage from "./pages/DoctorPage"
import BookingPage from "./pages/BookingPage"
import ContactPage from "./pages/ContactPage"
import ProfilePage from "./pages/ProfilePage"
import { ProfileContextProvider } from "./context/ProfileContext"
import LoginPage from "./pages/LoginPage"
import MyAppointmentsPage from "./pages/MyAppointmentsPage"
import SettingsPage from "./pages/SettingsPage"
import { BookingContextProvider } from "./context/BookingContext"
import NotFoundPage from "./pages/NotFoundPage"
import { LogoLoading } from "./assets/Loading"
import { LoginContextProvider } from "./context/LoginContext"
import { AppointmentsContextProvider } from "./context/AppointmentContext"
import SchedulePage from "./pages/SchedulePage"
import { ThemeProvider } from "./context/ThemeContext"
import { SettingsProvider } from "./context/SettingsContext"
import PatientDetailsPage from "./pages/PatientDetailsPage"
import { PatientDetailsProvider } from "./context/PatientDetailsContext"
import DocumentFullViewPage from "./pages/DocumentFullViewPage"
import { DoctorStatsContextProvider } from "./context/DoctorStatsContext"
import DashboardPage from "./pages/DashboardPage"
import { ScheduleProvider } from "./context/ScheduleContext"
import PrivateRoute from "./components/Login/PrivateRoute"
import { DocumentsTabContextProvider } from "./context/DocumentsTabContext"
import AppointmentDetailsPage from "./pages/AppointmentDetailsPage"
import { DoctorContextProvider } from "./context/DoctorContext"
import { ToastContainer } from "react-toastify"
import { DoctorReviewsContextProvider } from "./context/DoctorReviewsContext"

const Script: React.FC = () =>{

  const [isLoading, setIsLoading] = useState(true)

  useEffect(()=>{

    setTimeout(()=>{

      setIsLoading(false)

    }, 2000)

  }, [])

  return(

    <ThemeProvider>

      <div className="mx-4 sm:mx-10">

        {

          isLoading ?(

            <div className="min-h-screen flex items-center justify-center">

              <LogoLoading/>

            </div>

          ):(

            <LoginContextProvider>

              <ProfileContextProvider>

                <DoctorContextProvider>

                  <Navbar/>

                  <Routes>

                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/about-us" element={<AboutPage/>}/>

                    <Route path="/doctors" element={

                      <PrivateRoute>

                        <DoctorPage/>                 

                      </PrivateRoute>

                    }/>

                    <Route path="/doctors/:specialityParam" element={

                      <PrivateRoute>

                        <DoctorPage/>                     

                        </PrivateRoute>

                    }/>

                    <Route path="bookings/:doctorID" element={

                      <PrivateRoute>

                        <BookingPage/>

                      </PrivateRoute>

                    }/>

                    <Route path="/contact-us" element={<ContactPage/>}/>

                      <Route path="/profile" element={
                        
                          <DocumentsTabContextProvider>

                            <PatientDetailsProvider>

                                <PrivateRoute>

                                  <ProfilePage/>

                                </PrivateRoute>

                            </PatientDetailsProvider>
                          
                          </DocumentsTabContextProvider>

                      }/>                  

                    <Route path="/profile/:id" element={

                      <PrivateRoute>

                        <ProfilePage/>

                      </PrivateRoute>

                    }/>

                    <Route path="/login" element={<LoginPage/>}/>

                    <Route path="/schedule" element={

                      <PrivateRoute>

                        <SchedulePage/>

                      </PrivateRoute>

                    }/>

                    <Route path="/document-viewer/:_id" element={

                      <PrivateRoute>

                        <DocumentFullViewPage/>

                      </PrivateRoute>

                    }/>

                    <Route path="/bookings" element={

                      <PrivateRoute>

                        <ScheduleProvider>
              
                          <BookingContextProvider>

                            <AppointmentsContextProvider>

                              <PatientDetailsProvider>

                                <MyAppointmentsPage/>

                              </PatientDetailsProvider>

                            </AppointmentsContextProvider>

                          </BookingContextProvider>

                        </ScheduleProvider>

                      </PrivateRoute>

                    }/>

                    <Route path="/appointment/view/:appointmentID" element={

                      <PrivateRoute>

                        <ScheduleProvider>

                          <BookingContextProvider>

                            <AppointmentsContextProvider>

                              <DoctorReviewsContextProvider>

                                <PatientDetailsProvider>

                                  <SettingsProvider>

                                    <PatientDetailsPage/>

                                  </SettingsProvider>

                                </PatientDetailsProvider>

                              </DoctorReviewsContextProvider>

                            </AppointmentsContextProvider>

                          </BookingContextProvider>

                        </ScheduleProvider>

                      </PrivateRoute>                    

                    }/>
                    
                    <Route path="/appointments/:appointmentID" element={

                      <PrivateRoute>

                        <AppointmentsContextProvider>

                          <DoctorReviewsContextProvider>

                          <PatientDetailsProvider> 

                            <SettingsProvider>

                              <AppointmentDetailsPage/>

                            </SettingsProvider>

                          </PatientDetailsProvider>

                          </DoctorReviewsContextProvider>

                        </AppointmentsContextProvider>

                      </PrivateRoute>
                      
                    }/>

                    <Route path="/dashboard" element={

                      <PrivateRoute>

                        <DoctorStatsContextProvider>

                          <AppointmentsContextProvider>

                            <ScheduleProvider>

                              <DashboardPage/>

                            </ScheduleProvider>

                          </AppointmentsContextProvider>

                        </DoctorStatsContextProvider>

                      </PrivateRoute>

                    }/>

                    <Route path="/settings" element={

                      <PrivateRoute>

                        <PatientDetailsProvider>
                          
                          <SettingsProvider>

                            <SettingsPage/>

                          </SettingsProvider>

                        </PatientDetailsProvider>

                      </PrivateRoute>

                    }/>

                    <Route path="*" element={<NotFoundPage/>}/>

                  </Routes>
        
                  <Footer/>

                </DoctorContextProvider>

              </ProfileContextProvider>

            </LoginContextProvider>

          )

        }

        <ToastContainer position="top-right" autoClose={3000}/>

      </div> 

    </ThemeProvider>

  )

}

export default Script