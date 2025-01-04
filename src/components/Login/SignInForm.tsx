import FormInputs from "./FormInputs"

interface SignInFormProps{

    isSignUp: boolean
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>

}

const SignInForm: React.FC<SignInFormProps> = ({ isSignUp, setIsSignUp }) =>{

    return(

        <form action="" className="flex items-center min-h-[80vh] flex-col gap-6 sm:gap-2">

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

        </form>

    )

}

export default SignInForm    