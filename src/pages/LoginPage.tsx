import { useState } from "react"
import { LoginContextProvider } from "../context/LoginContext"
import SignUpForm from "../components/Login/SignUpForm"
import SignInForm from "../components/Login/SignInForm"

const LoginPage: React.FC = ()=>{

    const [isSignUp, setIsSignUp] = useState<boolean>(false)

    return(

        <div className="min-h-screen">

            <LoginContextProvider>

                {

                    isSignUp ? <SignUpForm isSignUp={isSignUp} setIsSignUp={setIsSignUp}/> : <SignInForm isSignUp={isSignUp} setIsSignUp={setIsSignUp}/>

                }

            </LoginContextProvider>

        </div>

    )

}

export default LoginPage