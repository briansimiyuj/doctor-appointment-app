import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const SocialMediaLinks: React.FC = ()=>{

    const socialMediaLinks =[

        {

            link: "https://www.facebook.com/medicarehub",
            icon: <FaFacebook/>

        },

        {
            
            link: "https://www.x.com/medicarehub",
            icon: <FaXTwitter/>

        },

        {
            
            link: "https://www.instagram.com/medicarehub",
            icon: <FaInstagram/>

        },

        {

            link: "https://www.linkedin.com/medicarehub",
            icon: <FaLinkedin/>

        }

    ]

    return(

       <ul className="flex gap-2">

            {

                socialMediaLinks.map((link, index)=>(

                    <li key={index} className="text-xl">

                        <a href={link.link} target="_blank">{link.icon}</a>

                    </li>

                ))

            }

       </ul>

    )

}

export default SocialMediaLinks