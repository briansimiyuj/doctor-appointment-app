import { useContext } from "react"
import { LoginContext } from "../../../../context/LoginContext"
import { specialityData } from "../../../../assets/frontend/assets"
import { ProfileContext } from "../../../../context/ProfileContext"

const AddFormInput: React.FC = ()=>{

    const loginContext = useContext(LoginContext),
          profileContext = useContext(ProfileContext)

    if(!loginContext || !profileContext) return null

    const { userType } = loginContext,
          { nameValue, setNameValue, emailValue, setEmailValue, phoneValue, setPhoneValue, specialityValue, setSpecialityValue, experienceValue, setExperienceValue, educationValue, setEducationValue, feesValue, setFeesValue, aboutValue, setAboutValue, medicalHistoryValue, setMedicalHistoryValue, certificationsValue, setCertificationsValue } = profileContext

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
                                onChange={e => setSpecialityValue(e.target.value)}
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

                            <label htmlFor="education" className="font-semibold text-sm sm:text-base">Education:</label>

                            <input
                                type="text"
                                id="education"
                                className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                placeholder="Enter education separated by comma"
                                value={educationValue}
                                onChange={e => setEducationValue(e.target.value.split(',').map((item) => item.trim()))}
                            />

                        </div>

                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="certifications" className="font-semibold text-sm sm:text-base">Certifications:</label>

                            <input
                                type="text"
                                id="certifications"
                                placeholder="Enter certifications separated by comma"
                                className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={certificationsValue}
                                onChange={e => setCertificationsValue(e.target.value.split(/\s*,\s*/).map((item) => item.trim()))}
                            />

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
                                onChange={e => setExperienceValue(e.target.value)}
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
                                onChange={e => setFeesValue(e.target.value)}
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
                                onChange={e => setAboutValue(e.target.value)}
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
                            onChange={e => setMedicalHistoryValue(e.target.value)}
                        />

                    </div>  

                )

            }

        </div>

    )

}

export default AddFormInput