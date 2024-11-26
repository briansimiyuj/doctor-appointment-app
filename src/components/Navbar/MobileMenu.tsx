import { assets } from "../../assets/frontend/assets"

type MobileMenuPropa ={

    showMenu: boolean
    setShowMenu: (showMenu: boolean) => void

}


const MobileMenu: React.FC<MobileMenuPropa> = ({ showMenu, setShowMenu }) =>{

    return(

        <div>

            <div className="flex items-center justify-between px-5 py-6">

                <img src={assets.logo} alt="logo" className="w-36 cursor-pointer" />

                <img src={assets.crossIcon} alt="crossIcon" className="w-7 cursor-pointer" onClick={() => setShowMenu(false)}/>

            </div>

        </div>

    )

}

export default MobileMenu