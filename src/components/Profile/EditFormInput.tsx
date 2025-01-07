import { useEditFormInput } from "../../hooks/useEditFormInput"

const EditFormInput: React.FC = () =>{
    
    const formInput = useEditFormInput()

    if(!formInput) return null

    const { nameValue, emailValue, phoneValue, handleInputChange } = formInput

    return(

        <div className="flex flex-col gap-2 w-full">
        
            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="name" className="font-semibold">Name:</label>

                <input 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholder="Enter your name"
                    className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={nameValue}
                    onChange={handleInputChange}                 
                />

            </div>


            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="email" className="font-semibold">Email:</label>

                <input 
                    type="email"
                    name="email" 
                    id="email" 
                    placeholder="Enter your email"
                    className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={emailValue}
                    onChange={handleInputChange}
                />

            </div>


            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="phone" className="font-semibold">Phone:</label>

                <input 
                    type="text"
                    name="phone" 
                    id="phone" 
                    placeholder="Enter your phone"
                    className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={phoneValue} 
                    onChange={handleInputChange}
                />

            </div>
        
        </div>

    )

}

export default EditFormInput