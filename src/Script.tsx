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

              <>

                <Navbar/>

                <ProfileContextProvider>

                  <Routes>

                    <Route path="/" element={<HomePage/>}/>

                    <Route path="/about-us" element={<AboutPage/>}/>

                    <Route path="/doctors" element={<DoctorPage/>}/>

                    <Route path="/doctors/:specialityParam" element={<DoctorPage/>}/>

                    <Route path="appointments/:doctorID" element={<BookingPage/>}/>

                    <Route path="/contact-us" element={<ContactPage/>}/>

                    <Route path="/profile" element={<ProfilePage/>}/>

                    <Route path="/profile/:id" element={<ProfilePage/>}/>

                    <Route path="/login" element={<LoginPage/>}/>

                    <Route path="/schedule" element={<SchedulePage/>}/>

                    <Route path="/bookings" element={
              
                      <BookingContextProvider>

                        <AppointmentsContextProvider>

                          <MyAppointmentsPage/>

                        </AppointmentsContextProvider>

                      </BookingContextProvider>

                    }/>

                    <Route path="/appointment/:patientID" element={

                      <BookingContextProvider>

                        <PatientDetailsProvider>

                         <PatientDetailsPage/>

                         </PatientDetailsProvider>

                      </BookingContextProvider>

                    }/>

                    <Route path="/settings" element={

                      <SettingsProvider>

                        <SettingsPage/>

                      </SettingsProvider>

                    }/>

                    <Route path="*" element={<NotFoundPage/>}/>

                  </Routes>
          
                </ProfileContextProvider>

                <Footer/>

              </>

            </LoginContextProvider>

          )

        }

      </div> 

    </ThemeProvider>

  )

}

export default Script