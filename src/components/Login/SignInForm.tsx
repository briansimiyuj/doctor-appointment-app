import { useContext } from "react"
import { assets } from "../../assets/frontend/assets"
import { LoginContext } from "../../context/LoginContext"
import { useSignIn } from "../../hooks/useSignIn"
import FormInputs from "./FormInputs"

interface SignInFormProps{

    isSignUp: boolean
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>

}

const SignInForm: React.FC<SignInFormProps> = ({ isSignUp, setIsSignUp }) =>{

    const { signIn } = useSignIn(),
          context = useContext(LoginContext)

    if(!context) throw new Error("SignInForm must be used within a LoginContextProvider")

    const { email, password } = context

    const handleSignIn = (e: React.FormEvent<HTMLFormElement>) =>{

        e.preventDefault()

        signIn(email, password)

    }

    return(

        <form action="" className="flex items-center min-h-[80vh] flex-col gap-6 sm:gap-2" onSubmit={handleSignIn}>

            <div>

                <h1 className="text-2xl font-semibold">Sign In</h1>

                <p>Please sign in to book an appointment.</p>

            </div>

            <FormInputs isSignUp={isSignUp}/>

            <button 
                className="bg-primary-bg text-secondary-bg px-12 py-4 text-xl rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
                type="submit"
            >Sign In</button>


            <div className="flex items-center gap-4">

                <p>Don't have an account?</p>

                <span onClick={() => setIsSignUp(true)} className="cursor-pointer text-blue-500">Sign Up</span>

            </div>


            <div className="flex items-center gap-2 w-full">
            
                <div className="flex-1 h-px bg-gray-300"></div>
                
                <span className="text-gray-500">Or</span>
                
                <div className="flex-1 h-px bg-gray-300"></div>

            </div>


            <button 
                type="button"
                className="flex items-center gap-2 border border-gray-300 rounded-md px-12 py-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300"
            >

                <img 
                    src={assets.GoogleLogo}
                    alt="Google" 
                    className="w-5 h-5"
                />

                Sign in with Google
                
            </button>

        </form>

    )

}

export default SignInForm    