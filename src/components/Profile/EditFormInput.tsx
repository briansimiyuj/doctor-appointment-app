import { useEditFormInput } from "../../hooks/useEditFormInput"
import { useContext } from "react"
import { ProfileContext } from "../../context/ProfileContext"
import { specialityData } from "../../assets/frontend/assets"


const EditFormInput: React.FC = () =>{

    const formInput = useEditFormInput(),
          context = useContext(ProfileContext)

    if(!formInput || !context) return null

    const { nameValue, emailValue, phoneValue, handleInputChange } = formInput,
          { profile } = context


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


            {
                profile?.type === 'doctor' ?(

                    <>

                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="speciality" className="font-semibold">Speciality:</label>

                            <select 
                                name="speciality" 
                                id="speciality"
                                className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={profile.speciality}
                                onChange={handleInputChange}
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

                            <label htmlFor="experience" className="font-semibold">Experience:</label>

                            <input 
                                type="text"
                                name="experience" 
                                id="experience" 
                                placeholder="Enter your experience"
                                className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={profile.experience}
                                onChange={handleInputChange}
                            />

                        </div>


                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="fees" className="font-semibold">Fees:</label>

                            <input 
                                type="number"
                                name="fees" 
                                id="fees" 
                                placeholder="Enter your fees"
                                className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={profile.fees}
                                onChange={handleInputChange}
                            />

                        </div>


                        <div className="flex flex-col gap-2 w-full items-center">

                            <label htmlFor="about" className="font-semibold">About:</label>

                            <textarea 
                                name="about" 
                                id="about" 
                                placeholder="Enter about yourself"
                                className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                                value={profile.about}
                                onChange={handleInputChange}
                                rows={4}
                            />

                        </div>
                    </>

                ):(

                    <div className="flex flex-col gap-2 w-full items-center">

                        <label htmlFor="medicalHistory" className="font-semibold">Medical History:</label>

                        <textarea 
                            name="medicalHistory" 
                            id="medicalHistory" 
                            placeholder="Enter your medical history"
                            className="w-[60%] p-2 rounded-md border border-gray-300 bg-white"
                            value={profile?.medicalHistory?.join('\n')}
                            onChange={handleInputChange}
                            rows={4}
                        />

                    </div>

                )
            }


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