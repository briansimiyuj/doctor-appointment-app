import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"
import Footer from "./components/Footer/Footer"

const Script: React.FC = () =>{

  return(

    <div className="mx-4 sm:mx-10">

      <Navbar/>

      
      <Routes>

        <Route path="/" element={<HomePage/>}/>

      </Routes>


      <Footer/>

    </div> 
    
  )

}

export default Script