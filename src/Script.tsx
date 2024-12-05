import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer/Footer"
import AboutPage from "./pages/AboutPage"
import DoctorPage from "./pages/DoctorPage"

const Script: React.FC = () =>{

  return(

    <div className="mx-4 sm:mx-10">

      <Navbar/>

      
      <Routes>

        <Route path="/" element={<HomePage/>}/>

        <Route path="/about-us" element={<AboutPage/>}/>

        <Route path="/doctors" element={<DoctorPage/>}/>

      </Routes>


      <Footer/>

    </div> 
    
  )

}

export default Script