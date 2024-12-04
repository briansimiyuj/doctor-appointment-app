const Copyright: React.FC = ()=>{

    const currentYear = new Date().getFullYear()

    return(

        <div>

            <hr/>

            <p className="py-5 text-sm text-center">Copyright &copy; {currentYear} MediCare Hub. All rights reserved</p>

        </div>

    )

}

export default Copyright