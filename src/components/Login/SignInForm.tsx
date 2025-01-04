import FormInputs from "./FormInputs"

interface SignInFormProps{

    isSignUp: boolean
    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>

}

const SignInForm: React.FC<SignInFormProps> = ({ isSignUp }) =>{

    return(

        <form action="" className="flex items-center min-h-[80vh] flex-col gap-6 sm:gap-2">

            <div>

                <h1 className="text-2xl font-semibold">Sign In</h1>

                <p>Please sign in to book an appointment.</p>

            </div>

            <FormInputs isSignUp={isSignUp}/>

        </form>

    )

}

export default SignInForm    