import { useContext } from "react"
import { LoginContext } from "../../../../context/LoginContext"
import { ProfileContext } from "../../../../context/ProfileContext"
import DoctorFields from "./DoctorFields"
import PatientFields from "./PatientFields"

const AddFormInput: React.FC = ()=>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) return null

    const { userType } = loginContext,
          { nameValue, setNameValue, emailValue, setEmailValue, phoneValue, setPhoneValue, genderValue, setGenderValue, dateOfBirthValue, setDateOfBirthValue } = profileContext

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
                    onChange={e => setNameValue(e.target.value)}
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
                    onChange={e => setEmailValue(e.target.value)}
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
                    onChange={e => setPhoneValue(e.target.value)}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center py-2">

                <span className="font-semibold text-sm sm:text-base">Gender:</span>

                <div className="flex gap-4 w-full sm:w-[60%] items-center justify-center">

                    <div 
                        className={`flex items-center gap-2 border rounded-md px-4 py-2 cursor-pointer ${
                            genderValue === "female" ? 'bg-primary-bg hover:bg-blue-600 transition text-secondary-bg' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setGenderValue("female")}
                    >

                        <input 
                            type="radio"
                            name="gender"
                            checked={genderValue === "female"}
                            onChange={() => setGenderValue("female")}
                        />

                        <span>Female</span>
                    
                    </div>


                    <div 
                        className={`flex items-center gap-2 border rounded-md px-4 py-2 cursor-pointer ${
                            genderValue === "male" ? 'bg-primary-bg hover:bg-blue-600 transition text-secondary-bg' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                        }`}
                        onClick={() => setGenderValue("male")}
                    >
                        <input 
                            type="radio"
                            name="gender"
                            checked={genderValue === "male"}
                            onChange={() => setGenderValue("male")}
                        />

                        <span>Male</span>
                    
                    </div>

                </div>

            </div>


            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="dob" className="font-semibold text-sm sm:text-base">Date of Birth:</label>

                <input 
                    type="date"
                    name="dob"
                    className="border rounded-md px-4 py-2 w-full sm:w-96"
                    placeholder="Enter your date of birth"
                    value={dateOfBirthValue}
                    onChange={e => setDateOfBirthValue(e.target.value)}
                />

            </div>

            
            {

                userType === "doctor" ?(

                    <DoctorFields/>

                ):(

                    <PatientFields/>

                )

            }

        </div>

    )

}

export default AddFormInput