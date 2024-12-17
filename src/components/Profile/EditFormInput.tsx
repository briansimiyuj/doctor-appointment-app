import { UserData } from "../../assets/ProfileType"

type EditFormInputProps ={

    userData: UserData,
    setUserData: React.Dispatch<React.SetStateAction<UserData>>

}

const EditFormInput: React.FC<EditFormInputProps> = ({ userData, setUserData })=>{

    return(

        <div className="flex flex-col gap-2 w-full">
        
            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="name" className="font-semibold">Name:</label>

                <input 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholder="Enter your name"
                    className="w-[60%] p-2 rounded-md border border-gray-300"
                    value={userData.name}
                    
                />

            </div>


            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="email" className="font-semibold">Email:</label>

                <input 
                    type="email"
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="w-[60%] p-2 rounded-md border border-gray-300"
                    value={userData.address.email}
                />

            </div>


            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="phone" className="font-semibold">Phone:</label>

                <input 
                    type="text"
                    name="phone" 
                    id="phone" 
                    placeholder="Enter your phone"
                    className="w-[60%] p-2 rounded-md border border-gray-300"
                    value={userData.address.phone}
                />

            </div>
        
        </div>

    )

}

export default EditFormInput