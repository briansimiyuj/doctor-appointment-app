import ContactImage from "../components/contact/ContactImage"


const ContactPage: React.FC = ()=>{

    return(

        <div className="text-2xl pt-10 text-gray-500">

            <h1 className="text-center">CONTACT <span className="text-gray-700 font-semibold">US</span></h1>


            <div className="my-10 flex flex-col justify-center md:flex-row items-center gap-10 mb-28 text-sm">

                <ContactImage/>

            </div>

        </div>


    )

}

export default ContactPage