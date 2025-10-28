import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"

export const createBannerContent = (navigate: Function) =>{

    const loginContext = useContext(LoginContext),
          isAuthenticated = loginContext ? loginContext.isAuthenticated : false

    return{

        doctorContent:{

            heading: "Enhance Your Practice",
            subHeading: "Access Advanced Medical Tools",
            buttonText: "Explore Features",
            buttonAction: () => navigate("/features")

        },

        patientContent:{

            heading: "Book Appointment",
            subHeading: "With 100+ Trusted Doctors",    
            buttonText: isAuthenticated ? "Book Now" : "Create Account",
            buttonAction: () => navigate(isAuthenticated ? "/doctors" : "/login")

        }

    }

}