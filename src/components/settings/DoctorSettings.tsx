import { useSettings } from "../../context/SettingsContext"
import { useSettingsManagement } from "../../hooks/useSettingsManagement"

const DoctorSettings: React.FC = ()=>{

    const { consultationSettings, availabilitySettings } = useSettings(),
          { handleConsultationUpdate, handleAvailabilityUpdate } = useSettingsManagement()

    return(

        <>
        
            <div className="pt-6 border-t">

                <h2 className="text-xl font-medium mb-4">Consultation Settings</h2>

                
                <div className="space-y-4">

                    <div className="flex flex-col gap-2">

                        <label htmlFor="consultationFee">Consultation Fee</label>

                        <input
                            type="number"
                            className="border rounded-lg p-2"
                            placeholder="Enter consultation fee"
                            value={consultationSettings.fee}
                            onChange={handleConsultationUpdate}
                            name="fee"
                        />

                    </div>


                    <div className="flex flex-col gap-2">

                        <label htmlFor="sessionDuration">Session Duration</label>


                        <div className="relative">

                            <select 
                                className="border rounded-lg p-2 pr-10 bg-white appearance-none w-full"
                                defaultValue={consultationSettings.duration}
                                onChange={handleConsultationUpdate}
                                name="duration"
                            >

                                <option value="15">15 minutes</option>

                                <option value="30">30 minutes</option>

                                <option value="45">45 minutes</option>

                                <option value="60">60 minutes</option>

                            </select>


                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">

                                <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">

                                    <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/>

                                </svg>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="pt-6 border-t">

                <h2 className="text-xl font-medium mb-4">Availability Settings</h2>


                <div className="space-y-4">

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            name="acceptNewPatients"
                            className="form-checkbox"
                            checked={availabilitySettings.acceptNewPatients}
                            onChange={handleAvailabilityUpdate}
                        />

                        <span>Accept new patients</span>

                    </label>

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            className="form-checkbox"
                            name="allowOnlineConsultations"
                            checked={availabilitySettings.allowOnlineConsultations}
                            onChange={handleAvailabilityUpdate}
                        />

                        <span>Allow online consultations</span>

                    </label>

                </div>

            </div>

        </>

    )

}

export default DoctorSettings