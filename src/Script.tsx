import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import HomePage from "./pages/HomePage"

const Script: React.FC = () =>{

  return(

    <div className="mx-4 sm:mx-10">

      <Navbar/>

      
      <Routes>

        <Route path="/" element={<HomePage/>}/>

      </Routes>

    </div> 
    
  )

}

export default Script