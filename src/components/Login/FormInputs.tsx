import { useContext, useState } from "react"
import { LoginContext } from "../../context/LoginContext"
import { BsEye } from "react-icons/bs"
import { FiEyeOff } from "react-icons/fi"

const FormInputs: React.FC = ()=>{

    const context = useContext(LoginContext)

    if(!context) return null

    const { name, setName, email, setEmail, password, setPassword, confirmPassword, setConfirmPassword } = context,
         [showPassword, setShowPassword] = useState<boolean>(false)

    return(

        <div className="flex flex-col gap-4 md:m-6 lg:m-6 items-start p-8 md:min-w-[400px] min-w-[300px] border rounded-xl text-zinc-600 text-sm shadow-lg">

            <label htmlFor="name">Full Name:</label>

            <input 
                type="text" 
                name="name" 
                id="name" 
                className="w-full border border-zinc-600 rounded p-2 mt-1 text-xl"
                placeholder="Full Name"
                value={name}
                onChange={e=> setName(e.target.value)}
            />

            <label htmlFor="email">Email:</label>

            <input
                type="email"
                name="email" 
                id="email"
                className="w-full border border-zinc-600 rounded p-2 mt-1 text-xl"
                placeholder="Email"
                value={email}
                onChange={e=> setEmail(e.target.value)}
            />

            <label htmlFor="password">Password:</label>

            <div className="relative w-full">  

                <input 
                    type={showPassword ? "text" : "password"}
                    name="password" 
                    id="password" 
                    className="w-full border border-zinc-600 rounded p-2 mt-1 text-xl"
                    placeholder="Password"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />


                {
                    
                    showPassword ? <BsEye className="absolute right-2 top-5 cursor-pointer font-semibold text-xl" onClick={()=> setShowPassword(false)}/> : <FiEyeOff className="absolute right-2 top-4 cursor-pointer text-xl font-semibold" onClick={()=> setShowPassword(true)}/>
                
                }

            </div>


            <label htmlFor="confirmPassword">Confirm Password:</label>

            <div className="relative w-full">

                <input 
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full border border-zinc-600 rounded p-2 mt-1 text-xl"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={e=> setConfirmPassword(e.target.value)}
                />

                
                {

                    showPassword ? <BsEye className="absolute right-2 top-5 cursor-pointer font-semibold text-xl" onClick={()=> setShowPassword(false)}/> : <FiEyeOff className="absolute right-2 top-4 cursor-pointer text-xl font-semibold" onClick={()=> setShowPassword(true)}/>

                }

            </div>

        </div>

    )

}

export default FormInputs