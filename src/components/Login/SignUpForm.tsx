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


            <div className="flex flex-col gap-4 md:m-6 lg:m-6 items-start p-8 md:min-w-[400px] min-w-[300px] border rounded-xl text-zinc-600 text-sm shadow-lg">

                <label htmlFor="name">Full Name:</label>

                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="w-full border border-zinc-600 rounded p-2 mt-1"
                />

                <label htmlFor="email">Email:</label>

                <input
                    type="email"
                    name="email" 
                    id="email"
                    className="w-full border border-zinc-600 rounded p-2 mt-1"
                />

                <label htmlFor="password">Password:</label>

                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="w-full border border-zinc-600 rounded p-2 mt-1"
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>

                <input 
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full border border-zinc-600 rounded p-2 mt-1"
                />

            </div>

        </form>

    )

}

export default SignUpForm