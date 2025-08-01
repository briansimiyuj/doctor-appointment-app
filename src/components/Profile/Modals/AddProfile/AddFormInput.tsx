import { useContext } from "react"
import { LoginContext } from "../../../../context/LoginContext"
import { specialityData } from "../../../../assets/frontend/assets"
import { useAddFormInput } from "../../../../hooks/useAddFormInput"

const AddFormInput: React.FC = ()=>{

    const loginContext = useContext(LoginContext),
          addFormInput = useAddFormInput()

    if(!loginContext || !addFormInput) return null

    const { userType } = loginContext,
           { nameValue, emailValue, phoneValue, specialityValue, experienceValue, feesValue, aboutValue , medicalHistoryValue, handleInputChange} = addFormInput

    return(

        <div className="flex flex-col gap-2 w-full">

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="name" className="font-semibold text-sm sm:text-base">Name:</label>

                <input 
                    type="text"
                    name="name" 
                    id="name" 
                    placeholder="Enter your name"
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={nameValue}
                    onChange={e => handleInputChange(e)}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="email" className="font-semibold text-sm sm:text-base">Email:</label>

                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={emailValue}
                    onChange={e => handleInputChange(e)}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="phone" className="font-semibold text-sm sm:text-base">Phone:</label>

                <input 
                    type="tel"
                    name="phone" 
                    id="phone" 
                    placeholder="Enter your phone number"
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={phoneValue}
                    onChange={e => handleInputChange(e)}
                />

            </div>

            
            {

                userType === "doctor" ?(

                    <>

                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="speciality" className="font-semibold text-sm sm:text-base">Speciality:</label>

                            <select 
                                name="speciality" 
                                id="speciality"
                                className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={specialityValue}
                                onChange={e => handleInputChange(e)}
                            >

                                <option>Select speciality</option>
                                

                                {

                                    specialityData.map((speciality, index) =>(

                                        <option key={index} value={speciality.speciality}>
                                            
                                            {speciality.speciality}
                                            
                                        </option>

                                    ))

                                }

                            </select>

                        </div>

                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="experience" className="font-semibold text-sm sm:text-base">Experience:</label>

                            <input 
                                type="text"
                                name="experience" 
                                id="experience" 
                                placeholder="Enter your experience"
                                className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={experienceValue}
                                onChange={e => handleInputChange(e)}
                            />

                        </div>

                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="fees" className="font-semibold text-sm sm:text-base">Fees:</label>

                            <input 
                                type="text"
                                name="fees" 
                                id="fees" 
                                placeholder="Enter your fees"
                                className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={feesValue}
                                onChange={e => handleInputChange(e)}
                            />

                        </div>

                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="about" className="font-semibold text-sm sm:text-base">About:</label>

                            <textarea 
                                name="about" 
                                id="about" 
                                placeholder="Enter your description"
                                className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={aboutValue}
                                onChange={e => handleInputChange(e)}    
                            />

                        </div>

                    </>

                ):(

                    <div className="flex flex-col gap-2 w-full items-center">

                        <label htmlFor="medicalHistory" className="font-semibold text-sm sm:text-base">Medical History:</label>

                        <textarea 
                            name="medicalHistory" 
                            id="medicalHistory" 
                            placeholder="Enter your medical history"
                            className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                            value={medicalHistoryValue}
                            onChange={e => handleInputChange(e)}
                        />

                    </div>  

                )

            }

        </div>

    )

}

export default AddFormInput