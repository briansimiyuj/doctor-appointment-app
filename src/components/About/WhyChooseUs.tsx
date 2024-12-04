const WhyChooseUs: React.FC = ()=>{

    const whyChooseUsData ={

        headings: ['Efficiency', 'Convenience', 'Personalized Care'],

        descriptions:[
            
            'MediCare Hub is designed to streamline the appointment booking process, enabling you to quickly find and schedule appointments with your preferred doctors, saving you time and effort.',
            'With MediCare Hub, you can effortlessly book appointments without the hassle of long hold times or waiting, ensuring a smooth and fast experience from start to finish.',    
            'We prioritize your unique healthcare needs at MediCare Hub by offering personalized care, ensuring that every patient receives the attention and support they deserve for the best possible experience.'
        
        ]
    }
    

    return(

        <>
       
            <div className="text-xl my-4">

                <h1 className="text-center">WHY <span className="text-gray-700 font-semibold">CHOOSE US</span></h1>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 mb-20 gap-5 text-xl">

                {

                    whyChooseUsData.headings.map((heading, index) =>(

                        <div key={index} className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary-bg hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">

                            <b>{heading}:</b>

                            <p>{whyChooseUsData.descriptions[index]}</p>

                        </div> 
                        
                    ))

                }

            </div>
       
        </>

    )

}

export default WhyChooseUs