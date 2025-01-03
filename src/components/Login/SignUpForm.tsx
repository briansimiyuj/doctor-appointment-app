interface SignUpFormProps{

    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>

}

const SignUpForm: React.FC<SignUpFormProps> = ({ setIsSignUp }) =>{

    return(

        <form action="" className="flex items-center min-h-[80vh] flex-col gap-6 sm:gap-2">

            <div>

                <h1 className="text-2xl font-semibold">Sign Up</h1>

                <p>Please create an account to book an appointment.</p>

            </div>

        </form>

    )

}

export default SignUpForm