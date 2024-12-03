import { NavLink } from "react-router-dom"

const FooterMenu: React.FC = ()=>{

    const footerLinks =[

        { to: "/", label: "Home" },
        { to: "/about-us", label: "About Us" },
        { to: "/privacy-policy", label: "Privacy Policy" },
        { to: "/contact-us", label: "Contact Us" },

    ]

    return(

        <div>

            <h2 className="text-xl font-medium mb-5">Company</h2>

            <ul className="flex flex-col gap-3 text-gray-600">

                {

                    footerLinks.map((link, index)=>(

                        <NavLink
                            key={index}
                            to={link.to}
                            className="hover:underline transition-all"
                        >

                            <li className="py-1">{link.label}</li>

                        </NavLink>

                    ))

                }

            </ul>

        </div>

    )

}

export default FooterMenu