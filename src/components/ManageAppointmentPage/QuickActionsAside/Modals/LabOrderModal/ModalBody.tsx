import { TestPanelType, LabUrgency } from "../../../../../assets/types/LabTestType"
import { useLabTestContext } from "../../../../../context/LabTestContext"

const ModalBody: React.FC = ()=>{

    const labTestOptions: TestPanelType[] = ["CBC", "CMP", "Lipid Panel", "Thyroid Panel", "A1C", "Urinalysis", "Coagulation Panel", "Infectious Disease", "Other"],
          urgencyOptions: LabUrgency[] = ["Routine", "ASAP", "STAT"],
          { urgency, setUrgency, clinicalJustification, setClinicalJustification, preferredLab, setPreferredLab, labEmail, setLabEmail, labPhone, setLabPhone, labAddress, setLabAddress, preparationInstructions, setPreparationInstructions, testsOrdered, toggleTestOrder } = useLabTestContext()

    return(

        <form action="" className="p-4 space-y-6">

            <section>

                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 border-b pb-1">Lab Logistics & Recipient</h3>

                <div className="mb-4">

                    <label htmlFor="preferredLab" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        
                        Preferred Lab / Hospital
                        
                        <span className="text-red-500"> *</span>                      

                    </label>

                    <input 
                        type="text" 
                        id="preferredLab" 
                        name="preferredLab" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter lab name (e.g., Quest Diagnostics, City Hospital Lab)" 
                        value={preferredLab}
                        onChange={e => setPreferredLab(e.target.value)}
                    />
                    
                </div>


                <div className="grid grid-cols-2 gap-4">

                    <input 
                        type="tel" 
                        id="labPhone" 
                        name="labPhone" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter lab phone..."
                        value={labPhone}
                        onChange={e => setLabPhone(e.target.value)}
                    />

                    <input 
                        type="email" 
                        id="labEmail" 
                        name="labEmail" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter lab email..."
                        value={labEmail}
                        onChange={e => setLabEmail(e.target.value)}
                    />
                    
                </div>


                <div className="mt-4">

                    <input 
                        type="text" 
                        id="labAddress" 
                        name="labAddress" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2" 
                        placeholder="Enter lab address..."
                        value={labAddress}
                        onChange={e => setLabAddress(e.target.value)}
                    />

                    
                </div> 

            </section>

            <section>

                <h3 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-3 border-b pb-1">Test Details</h3>

                <div className="mb-4">

                    <label htmlFor="testsOrdered" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        
                        Select Tests
                        
                        <span className="text-red-500"> *</span>                      

                    </label>

                    <div className="flex flex-wrap gap-2">

                        {
                            labTestOptions.map((test, index)=>(

                                <div 
                                    key={index}
                                    className={`flex items-center gap-2 border rounded-full px-3 py-1 text-sm cursor-pointer transition-colors ${
                                        testsOrdered.includes(test) ? 'bg-indigo-600 text-white dark:text-white border-indigo-600' : 'bg-gray-100 dark:bg-gray-700 dark:text-gray-300 border-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                                    }`}
                                    onClick={() => toggleTestOrder(test)}
                                >
                                    <input 
                                        type="checkbox"
                                        checked={testsOrdered.includes(test)}
                                        onChange={() => toggleTestOrder(test)}
                                        className="hidden"
                                    />
                                    <span>{test}</span>
                                    
                                </div>

                            ))
                        }
                    </div>

                </div>

                <div className="mb-4">

                    <label htmlFor="clinicalJustification" className="block text-sm font-medium text-gray-700 dark:text-gray-300">

                        Clinical Justification

                        <span className="text-red-500"> *</span>                      

                    </label>

                    <textarea 
                        id="clinicalJustification" 
                        name="clinicalJustification" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2 resize-none" 
                        placeholder="State the diagnosis or reason the tests are required (e.g., Rule out anemia due to fatigue, monitor glucose levels)." 
                        rows={3}
                        value={clinicalJustification}
                        onChange={e => setClinicalJustification(e.target.value)}
                    />

                </div>
                
                <div className="mb-4">

                    <label htmlFor="preparationInstructions" className="block text-sm font-medium text-gray-700 dark:text-gray-300">

                        Patient Prep Instructions

                    </label>

                    <textarea 
                        id="preparationInstructions" 
                        name="preparationInstructions" 
                        className="w-full p-2 border border-gray-300 rounded-lg dark:border-gray-600 dark:bg-gray-700 dark:text-white mt-2 resize-none" 
                        placeholder="e.g., Fasting required for 12 hours, stop aspirin 2 days prior." 
                        rows={2}
                        value={preparationInstructions}
                        onChange={e => setPreparationInstructions(e.target.value)}
                    />

                </div>


                <div className="mb-4">

                    <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">

                        Lab Urgency

                        <span className="text-red-500"> *</span>                      

                    </label>

                    <div className="flex items-center justify-center gap-4 space-x-4 flex-col md:flex-row">

                        {

                            urgencyOptions.map(level =>(

                                <div 
                                    key={level}
                                    className={`flex items-center gap-2 border rounded-md px-4 py-2 cursor-pointer w-full justify-center ${
                                        urgency === level ? 'bg-primary-bg hover:bg-blue-600 transition text-secondary-bg' : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                                    }`}
                                    onClick={() => setUrgency(level)}
                                >

                                    <input 
                                        type="radio"
                                        name="urgencyLevel"
                                        checked={urgency === level}
                                        onChange={() => setUrgency(level)}
                                        className="hidden" // Hiding the actual radio for custom styling
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