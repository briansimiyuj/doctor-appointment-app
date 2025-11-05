import { ReferralUrgency, SpecialityType } from "../../../../../assets/types/ReferralType"
import { useReferralContext } from "../../../../../context/ReferralContext"

const ModalBody: React.FC = ()=>{

    const specialityOptions: SpecialityType[] = ["Dermatologist",  "Cardiologist",  "Neurologist",  "Gastroenterologist",  "Ophthalmologist",  "Orthopedist",  "Pediatrician",  "Psychiatrist",  "Radiologist",  "Urologist",  "General Practitioner",  "Other"],
          urgencyOptions: ReferralUrgency[] = ["Urgent", "Routine", "Emergency"],
          { urgency, setUrgency, recipientName, setRecipientName, speciality, setSpeciality, recipientEmail, setRecipientEmail, recipientPhone, setRecipientPhone, recipientHospital, setRecipientHospital, recipientHospitalLocation, setRecipientHospitalLocation, clinicalReason, setClinicalReason } = useReferralContext()

    return(

        <form action="" className="p-4 space-y-6">

            <section>

                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 border-b pb-1">Recipient & Logistics</h3>

                <div className="mb-4">

                    <label htmlFor="speciality" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        
                        Speciality 
                        
                        <span className="text-red-500"> *</span>                    

                    </label>

                    <select 
                        id="speciality" 
                        name="speciality" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2"
                        value={speciality ?? ""}
                        onChange={e => setSpeciality(e.target.value as SpecialityType)}
                    >

                        <option value="" disabled>Select a specialty...</option>

                        {

                            specialityOptions.map((speciality, index)=>{

                                return(

                                    <option key={index} value={String(speciality)}>{speciality}</option>

                                )

                            })

                        }

                    </select>

                </div>

                
                <div className="mb-4">

                    <label htmlFor="recipientName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">

                        Recipient Name

                        <span className="text-red-500"> *</span>                    

                    </label>

                    <input 
                        type="text" 
                        id="recipientName" 
                        name="recipientName" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter recipient name..." 
                        value={recipientName}
                        onChange={e => setRecipientName(e.target.value)}
                    />
                    
                </div>


                <div className="grid grid-cols-2 gap-4">

                    <input 
                        type="tel" 
                        id="recipientPhone" 
                        name="recipientPhone" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter recipient phone..."
                        value={recipientPhone}
                        onChange={e => setRecipientPhone(e.target.value)}
                    />

                    <input 
                        type="email" 
                        id="recipientEmail" 
                        name="recipientEmail" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter recipient email..."
                        value={recipientEmail}
                        onChange={e => setRecipientEmail(e.target.value)}
                    />
                    
                </div>


                <div className="grid grid-cols-2 gap-4 mt-4">

                    <input 
                        type="text" 
                        id="recipientHospital" 
                        name="recipientHospital" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter recipient hospital..."
                        value={recipientHospital}
                        onChange={e => setRecipientHospital(e.target.value)}
                    />

                    <input 
                        type="text" 
                        id="recipientHospitalAddress" 
                        name="recipientHospitalAddress" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter recipient hospital address..."
                        value={recipientHospitalLocation}
                        onChange={e => setRecipientHospitalLocation(e.target.value)}
                    />

                    
                </div> 

            </section>

            <section>

                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 border-b pb-1">Clinic Details</h3>

                <div className="mb-4">

                    <label htmlFor="clinicalReason" className="block text-sm font-medium text-gray-700 dark:text-gray-300">

                        Clinical Reason

                        <span className="text-red-500"> *</span>                    

                    </label>

                    <textarea 
                        id="clinicalReason" 
                        name="clinicalReason" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2 resize-none" 
                        placeholder="State the diagnosis and the specific question for the specialist (e.g., Patient presents with chronic dizziness, rule out inner ear pathology)." 
                        rows={4}
                        value={clinicalReason}
                        onChange={e => setClinicalReason(e.target.value)}
                    />

                </div>


                <div className="mb-4">

                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">

                        Referral Urgency

                        <span className="text-red-500"> *</span>                    

                    </label>

                    <div className="flex items-center justify-center gap-4 space-x-4  flex-col md:flex-row">

                        {

                            urgencyOptions.map(level =>(

                                <div 
                                    className={`flex items-center gap-2 border rounded-md px-4 py-2 cursor-pointer ${
                                        urgency === level ? 'bg-primary-bg hover:bg-blue-600 transition text-secondary-bg' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                                    onClick={() => setUrgency(level)}
                                >

                                    <input 
                                        type="radio"
                                        name="userType"
                                        checked={urgency === level}
                                        onChange={() => setUrgency(level)}
                                    />

                                    <span>{level}</span>
                                
                                </div>

                            ))

                        }

                    </div>

                </div>

            </section>

        </form>

    )

}

export default ModalBody