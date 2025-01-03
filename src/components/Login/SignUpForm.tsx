import { useContext } from "react"
import { LoginContext } from "../../context/LoginContext"

interface SignUpFormProps{

    setIsSignUp: React.Dispatch<React.SetStateAction<boolean>>

}

const SignUpForm: React.FC<SignUpFormProps> = ({ setIsSignUp }) =>{

    const context = useContext(LoginContext)

    if(!context) return null

    const { name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } = context

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
                    value={name}
                    onChange={e=> setName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>

                <input
                    type="email"
                    name="email" 
                    id="email"
                    className="w-full border border-zinc-600 rounded p-2 mt-1"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />

                <label htmlFor="password">Password:</label>

                <input 
                    type="password" 
                    name="password" 
                    id="password" 
                    className="w-full border border-zinc-600 rounded p-2 mt-1"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />

                <label htmlFor="confirmPassword">Confirm Password:</label>

                <input 
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full border border-zinc-600 rounded p-2 mt-1"
                    value={confirmPassword}
                    onChange={e=> setConfirmPassword(e.target.value)}
                />

            </div>

        </form>

    )

}

export default SignUpForm