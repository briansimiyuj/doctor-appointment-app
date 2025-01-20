import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () =>{

    return(

        <div className="min-h-screen flex items-center justify-center bg-white">

            <div className="text-center p-8 bg-stone-100 rounded-lg shadow-lg max-w-md">

                <h1 className="text-6xl font-bold text-primary-bg mb-4">404</h1>

                <h2 className="text-2xl font-semibold text-primary-text mb-4">Page Not Found</h2>

                <p className="text-secondary-text mb-8">
                    The page you're looking for doesn't exist or has been moved.
                </p>

                <Link 
                    to="/" 
                    className="inline-block bg-primary-bg btn-primary-bg px-6 py-3 rounded-lg hover:opacity-90 transition duration-300"
                >
                    Return Home
                </Link>

            </div>

        </div>

    )

}

export default NotFoundPage
