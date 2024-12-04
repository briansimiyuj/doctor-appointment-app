import AboutImage from "../components/About/AboutImage"
import AboutText from "../components/About/AboutText"
import WhyChooseUs from "../components/About/WhyChooseUs"

const AboutPage: React.FC = ()=>{

    return(

        <>
        
            <div className="text-2xl pt-10 text-gray-500">

                <h1 className="text-center">ABOUT <span className="text-gray-700 font-medium">US</span></h1>


                <div className="my-5 flex flex-col items-center md:flex-row gap-12">

                    <AboutImage/>

                    <AboutText/>

                </div>

                
                <WhyChooseUs/>

            </div>
        
        </>

    )

}

export default AboutPage