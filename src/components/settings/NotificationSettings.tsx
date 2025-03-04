import { useSettings } from "../../context/SettingsContext"
import { useSettingsManagement } from "../../hooks/useSettingsManagement"

const NotificationSettings: React.FC = ()=>{

    const { notificationSettings } = useSettings(),
          { handleNotificationUpdate } = useSettingsManagement()

    return(

        <div className="pt-6 border-t">
            
            <h2 className="text-xl font-medium mb-4">Notification Preferences</h2>

            <div className="space-y-4">

                <label className="flex items-center space-x-3">

                    <input 
                        type="checkbox" 
                        name="emailNotifications"
                        className="form-checkbox"
                        checked={notificationSettings.emailNotifications}
                        onChange={handleNotificationUpdate}
                    />

                    <span>Email notifications for appointments</span>

                </label>


                <label className="flex items-center space-x-3">

                    <input 
                        type="checkbox" 
                        name="smsNotifications"
                        className="form-checkbox"
                        checked={notificationSettings.smsNotifications}
                        onChange={handleNotificationUpdate}
                    />
                    
                    <span>SMS reminders</span>

                </label>

            </div>

        </div>

    )

}

export default NotificationSettings