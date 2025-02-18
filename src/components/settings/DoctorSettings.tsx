const DoctorSettings: React.FC = ()=>{

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
                        />

                    </div>


                    <div className="flex flex-col gap-2">

                        <label htmlFor="sessionDuration">Session Duration</label>

                        <select className="border rounded-lg p-2">

                            <option value="15">15 minutes</option>

                            <option value="30">30 minutes</option>

                            <option value="45">45 minutes</option>

                            <option value="60">60 minutes</option>

                        </select>

                    </div>

                </div>

            </div>


            <div className="pt-6 border-t">

                <h2 className="text-xl font-medium mb-4">Availability Settings</h2>


                <div className="space-y-4">

                    <label className="flex items-center space-x-3">

                        <input type="checkbox" className="form-checkbox"/>

                        <span>Accept new patients</span>

                    </label>

                    <label className="flex items-center space-x-3">

                        <input type="checkbox" className="form-checkbox"/>

                        <span>Allow online consultations</span>

                    </label>

                </div>

            </div>

        </>

    )

}

export default DoctorSettings