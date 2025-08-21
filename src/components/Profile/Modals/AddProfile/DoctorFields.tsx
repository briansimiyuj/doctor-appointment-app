import { useContext } from "react"
import { specialityData } from "../../../../assets/frontend/assets"
import { ProfileContext } from "../../../../context/ProfileContext"
import { useFileSelection } from "../../../../hooks/useFileSelection"

const DoctorFields: React.FC = ()=>{

    const profileContext = useContext(ProfileContext)
    
    if(!profileContext) return null

    const { specialityValue, setSpecialityValue, experienceValue, setExperienceValue, educationValue, setEducationValue, feesValue, setFeesValue, aboutValue, setAboutValue, certificationsValue, setCertificationsValue, licenseCertificate, setLicenseCertificate, hospitalValue, setHospitalValue, hospitalLocationValue, setHospitalLocationValue } = profileContext,
        { handleFileSelection }  = useFileSelection()

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) =>{
    
        handleFileSelection(e, doc =>{

            setLicenseCertificate(doc)   

            console.log('license certificate set:', doc)

        })
        
    }

    return(

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

                <label htmlFor="hospital" className="font-semibold text-sm sm:text-base">Hospital:</label>

                <input 
                    type="text"
                    name="hospital" 
                    id="hospital" 
                    placeholder="Enter your hospital"
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={hospitalValue}
                    onChange={e => setHospitalValue(e.target.value)}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="hospitalLocation" className="font-semibold text-sm sm:text-base">Hospital Location:</label>

                <input 
                    type="text"
                    name="hospitalLocation" 
                    id="hospitalLocation" 
                    placeholder="Where is your hospital located?"
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                    value={hospitalLocationValue}
                    onChange={e => setHospitalLocationValue(e.target.value)}
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
                    onChange={e => setFeesValue(Number(e.target.value))}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="licenseCertificate" className="font-semibold text-sm sm:text-base">License Certificate:</label>

                {

                    licenseCertificate  &&(

                        <div className="mb-2">

                            {

                                licenseCertificate !== null && typeof licenseCertificate === "object" && "content" in licenseCertificate &&(

                                    <a href={licenseCertificate.content} target="_blank" rel="noreferrer" className="text-blue-500 hover:underline">View Current License Certificate</a>

                                )

                            }

                        </div>

                    )

                }

                {

                    licenseCertificate && !("content" in licenseCertificate) &&(

                        <span className="text-gray-600">{licenseCertificate.name}</span>

                    )

                }

                <input 
                    type="file"
                    name="licenseCertificate" 
                    id="license certificate" 
                    placeholder="Enter your license certificate"
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white cursor-pointer"
                    onChange={handleFileInput}  
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

    )

}

export default DoctorFields