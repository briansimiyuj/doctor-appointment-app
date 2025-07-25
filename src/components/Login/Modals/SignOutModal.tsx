const SignOutModal: React.FC = ()=>{

    return(

        <div className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50">

            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md mx-auto">

                <h2 className="text-xl font-semibold mb-4">Sign Out</h2>

                <p className="mb-4">Are you sure you want to sign out?</p>

                <div className="flex justify-end space-x-2">

                    <button className="px-4 py-2 bg-gray-300 dark:bg-gray-700 font-medium text-gray-800 rounded hover:bg-gray-400">Cancel</button>

                    <button className="px-4 py-2 bg-red-600 text-white dark:text-white font-medium rounded hover:bg-red-700">Sign Out</button>

                </div>

            </div>

        </div>

    )

}

export default SignOutModal