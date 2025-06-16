 interface ModalHeaderProps{

    title: string
    onClose: () => void

}

const ModalHeader: React.FC<ModalHeaderProps> = ({ title, onClose }) =>{

    return(

        <div className="flex justify-between items-center border-b p-4">

            <h2 className="text-xl font-bold text-gray-800">{title}</h2>

            <button
                className="text-gray-500 hover:text-gray-700 focus:outline-none transition-colors"
                aria-label="Close modal"
                onClick={onClose}
            >


                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">

                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>

                </svg>

            </button>

        </div>

    )

}

export default ModalHeader