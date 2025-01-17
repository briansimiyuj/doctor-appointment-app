import { FormEvent } from "react"
import FormInputs from "./FormInputs"
import { assets } from "../../assets/frontend/assets"

interface SignUpFormProps{

    isSignUp: boolean
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>

}

const SignUpForm: React.FC<SignUpFormProps> = ({ isSignUp, setIsSignUp }) =>{

    const formSubmit = (e: FormEvent<HTMLFormElement>) =>{
    
       e.preventDefault()
    
    }

    return(

        <form action="" className="flex items-center min-h-[80vh] flex-col gap-6 sm:gap-2" onSubmit={formSubmit}>

            <div>

                <h1 className="text-2xl font-semibold">Sign Up</h1>

                <p>Please create an account to book an appointment.</p>

            </div>


           <FormInputs isSignUp={isSignUp}/>


            <button 
                className="bg-primary-bg text-secondary-bg px-12 py-4 text-xl rounded-md hover:bg-blue-600 transition-all duration-300 ease-in-out"
                type="submit"
            >Sign Up</button>


            <div className="flex items-center gap-4">

                <p>Already have an account?</p>

                <span onClick={() => setIsSignUp(false)} className="cursor-pointer text-blue-500">Sign In</span>

            </div>


            <div className="flex items-center gap-2 w-full">

                <div className="flex-1 h-px bg-gray-300"></div>
                
                <span className="text-gray-500">Or</span>
                
                <div className="flex-1 h-px bg-gray-300"></div>

            </div>


            <button 
                type="button"
                className="flex items-center gap-2 border border-gray-300 rounded-md px-12 py-4 hover:bg-gray-50 transition-all duration-300"
            >

                <img 
                    src={assets.GoogleLogo}
                    alt="Google" 
                    className="w-5 h-5"
                />

                Sign up with Google
                
            </button>

        </form>

    )

}

export default SignUpForm