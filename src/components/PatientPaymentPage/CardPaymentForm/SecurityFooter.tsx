import { FaLock, FaShieldAlt, FaLockOpen } from "react-icons/fa"

const SecurityFooter: React.FC = () => {

    return(

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">

            <div className="flex flex-col xs:flex-row items-start justify-center gap-4 text-xs text-gray-500 dark:text-gray-400">

                <div className="flex items-center gap-2">

                    <FaLock className="w-3 h-3 text-green-600"/>

                    <span>256-bit SSL Encrypted</span>

                </div>

                <div className="flex items-center gap-2">

                    <FaShieldAlt className="w-3 h-3 text-green-600"/>

                    <span>PCI Compliant</span>

                </div>

                <div className="flex items-center gap-2">

                    <FaLockOpen className="w-3 h-3 text-green-600"/>

                    <span>No card data stored</span>

                </div>

            </div>

            <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-3">By completing this payment, you agree to our Terms of Service and Privacy Policy</p>

        </div>
    )

}

export default SecurityFooter