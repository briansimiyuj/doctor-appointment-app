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

        </Routes>
        
      </ProfileContextProvider>

      <Footer/>

    </div> 
    
  )

}

export default Script