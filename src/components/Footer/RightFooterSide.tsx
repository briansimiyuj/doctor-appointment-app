const RightFooterSide: React.FC = ()=>{

    return(

        <div className="flex flex-col gap-5">

            <h2 className="text-xl font-medium">Get In Touch</h2>


            <ul className="flex flex-col text-gray-600 gap-2">

                <li>

                    <a href="tel: +254 123 456 789">0123456789</a>

                </li>

                <li>

                    <a href="mailto: info@medicarehub.co.ke">info@medicarehub.co.ke</a>

                </li>

            </ul>

        </div>

    )

}

export default RightFooterSide