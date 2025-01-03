import { useState } from "react"
import { LoginContextProvider } from "../context/LoginContext"
import SignUpForm from "../components/Login/SignUpForm"

const LoginPage: React.FC = ()=>{

    const [isSignUp, setIsSignUp] = useState<boolean>(true)

    return(

        <LoginContextProvider>

            {

                isSignUp ? <SignUpForm setIsSignUp={setIsSignUp}/> : <h1>SignInForm</h1>

            }

        </LoginContextProvider>

    )

}

export default LoginPage