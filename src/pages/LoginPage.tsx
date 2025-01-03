import { useState } from "react"
import { LoginContextProvider } from "../context/LoginContext"

const LoginPage: React.FC = ()=>{

    const [isSignUp, setIsSignUp] = useState<boolean>(true)

    return(

        <LoginContextProvider>

            <h1>LoginPage</h1>

        </LoginContextProvider>

    )

}

export default LoginPage