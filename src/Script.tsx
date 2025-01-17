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

const Script: React.FC = () =>{

  return(

    <div className="mx-4 sm:mx-10">

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

          <Route path="/bookings" element={
            
            <BookingContextProvider>

              <MyAppointmentsPage/>

            </BookingContextProvider>

          }/>

          <Route path="/settings" element={<SettingsPage/>}/>

          <Route path="*" element={<NotFoundPage/>}/>

        </Routes>
        
      </ProfileContextProvider>

      <Footer/>

    </div> 
    
  )

}

export default Script