import { useContext } from "react"
import { useSettings } from "../../context/SettingsContext"
import { useSettingsManagement } from "../../hooks/useSettingsManagement"
import { LoginContext } from "../../context/LoginContext"

const NotificationSettings: React.FC = () =>{

    const { notificationSettings } = useSettings(),
          { handleNotificationUpdate } = useSettingsManagement(),
          loginContext = useContext(LoginContext)

    if(!loginContext) return null

    const { userType } = loginContext

    return(

        <div className="pt-6 border-t">

            <h2 className="text-xl font-medium mb-4">Notification Preferences</h2>
            
            <div className="space-y-6">

                <div className="space-y-3">

                    <h3 className="font-medium">Communication Channels</h3>

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            name="emailNotifications"
                            className="form-checkbox"
                            checked={notificationSettings.emailNotifications}
                            onChange={handleNotificationUpdate}
                        />

                        <span>Email notifications</span>

                    </label>

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            name="smsNotifications"
                            className="form-checkbox"
                            checked={notificationSettings.smsNotifications}
                            onChange={handleNotificationUpdate}
                        />

                        <span>SMS notifications</span>

                    </label>

                </div>


                <div className="space-y-3">

                    <h3 className="font-medium">Appointment Reminders</h3>

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            name="appointmentReminders.dayBefore"
                            className="form-checkbox"
                            checked={notificationSettings.appointmentReminders.daysBefore}
                            onChange={handleNotificationUpdate}
                        />

                        <span>24 hours before appointment</span>

                    </label>

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            name="appointmentReminders.sameDay"
                            className="form-checkbox"
                            checked={notificationSettings.appointmentReminders.sameDay}
                            onChange={handleNotificationUpdate}
                        />

                        <span>Morning of appointment</span>

                    </label>

                </div>


                <div className="space-y-3">

                    <h3 className="font-medium">Booking Updates</h3>

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            name="bookingUpdates.confirmation"
                            className="form-checkbox"
                            checked={notificationSettings.bookingUpdates?.confirmation}
                            onChange={handleNotificationUpdate}
                        />

                        <span>Booking confirmations</span>

                    </label>

                    <label className="flex items-center space-x-3">

                        <input 
                            type="checkbox" 
                            name="bookingUpdates.cancellations"
                            className="form-checkbox"
                            checked={notificationSettings.bookingUpdates?.cancellation}
                            onChange={handleNotificationUpdate}
                        />

                        <span>Cancellations</span>

                    </label>

                </div>


                {

                    userType === "doctor" &&(

                        <div className="space-y-3">

                            <h3 className="font-medium">Other Notifications</h3>

                            <label className="flex items-center space-x-3">

                                <input 
                                    type="checkbox" 
                                    name="paymentNotifications"
                                    className="form-checkbox"
                                    checked={notificationSettings.paymentNotifications}
                                    onChange={handleNotificationUpdate}
                                />

                                <span>Payment updates</span>

                            </label>

                            <label className="flex items-center space-x-3">

                                <input 
                                    type="checkbox" 
                                    name="systemUpdates"
                                    className="form-checkbox"
                                    checked={notificationSettings.systemUpdates}
                                    onChange={handleNotificationUpdate}
                                />

                                <span>System updates and maintenance</span>

                            </label>

                        </div>

                    )

                }


            </div>

        </div>

    )

}

export default NotificationSettings