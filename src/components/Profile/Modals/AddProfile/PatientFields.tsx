import { useContext } from "react"
import { ProfileContext } from "../../../../context/ProfileContext"

const PatientFields: React.FC = ()=>{

    const profileContext = useContext(ProfileContext)

    if(!profileContext) return null

    const { medicalHistoryValue, setMedicalHistoryValue, residenceValue, cityValue, stateValue, countryValue, setResidenceValue, setCityValue, setStateValue, setCountryValue } = profileContext

    return(

        <>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="residence" className="font-semibold text-sm sm:text-base">Residence:</label>

                <input 
                    type="text" 
                    name="residence" 
                    placeholder="Enter your residence" 
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white" 
                    value={residenceValue}
                    onChange={e => setResidenceValue(e.target.value)}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="city" className="font-semibold text-sm sm:text-base">City:</label>

                <input 
                    type="text" 
                    name="city" 
                    placeholder="Enter your city" 
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white" 
                    value={cityValue}
                    onChange={e => setCityValue(e.target.value)}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="state" className="font-semibold text-sm sm:text-base">State:</label>

                <input
                    type="text" 
                    name="state" 
                    placeholder="Enter your state" 
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white" 
                    value={stateValue}
                    onChange={e => setStateValue(e.target.value)}
                />

            </div>

            <div className="flex flex-col gap-2 w-full items-center">

                <label htmlFor="country" className="font-semibold text-sm sm:text-base">Country:</label>

                <input
                    type="text" 
                    name="country" 
                    placeholder="Enter your country" 
                    className="w-full sm:w-[60%] p-2 rounded-md border border-gray-300 bg-white" 
                    value={countryValue}
                    onChange={e => setCountryValue(e.target.value)}
                />

            </div>
        
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

        </>

    )

}

export default PatientFields 