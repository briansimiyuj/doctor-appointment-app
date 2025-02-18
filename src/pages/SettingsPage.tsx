import { useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import NotFoundPage from "./NotFoundPage"
import { useTheme } from "../context/ThemeContext"

const SettingsPage: React.FC = () =>{

    const loginContext = useContext(LoginContext),
          isAuthenticated = loginContext?.isAuthenticated,
          { toggleTheme } = useTheme()

    return(

        <>

            {
                
                isAuthenticated ?(

                    <div className="container mx-auto px-4 py-8">
            
                        <h1 className="text-3xl font-bold mb-8">Settings</h1>
                        
                        <div className="bg-white rounded-lg shadow-md p-6 max-w-2xl">
            
                            <div className="space-y-6">
                            
                                <div className="flex items-center justify-between">
            
                                    <div>
            
                                        <h2 className="text-xl font-medium">Dark Mode</h2>
                                        
                                        <p className="text-gray-600">Switch between light and dark themes</p>
                                        
                                    </div>
            
            
                                    <button 
                                        onClick={toggleTheme}
                                        className="bg-primary-bg px-4 py-2 rounded-lg text-white"
                                    >Toggle Theme</button>
            
                                </div>
            
                                
                                <div className="pt-6 border-t">
            
                                    <h2 className="text-xl font-medium mb-4">Notification Preferences</h2>
            
                                    <div className="space-y-4">
            
                                        <label className="flex items-center space-x-3">
            
                                            <input type="checkbox" className="form-checkbox"/>
            
                                            <span>Email notifications for appointments</span>
            
                                        </label>
            
            
                                        <label className="flex items-center space-x-3">
            
                                            <input type="checkbox" className="form-checkbox"/>
                                            
                                            <span>SMS reminders</span>
            
                                        </label>
            
                                    </div>
            
                                </div>
            
                            </div>
            
                        </div>
            
                    </div>

                ):(
                    
                    <NotFoundPage/>

                )
               
            }

        </>

    )
    
}

export default SettingsPage
