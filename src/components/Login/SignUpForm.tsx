import { FormEvent } from "react"
import FormInputs from "./FormInputs"

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

        </form>

    )

}

export default SignUpForm