import LeftFooterSide from "./LeftFooterSide"

const Footer: React.FC = ()=>{

    return(

        <footer className="md:mx-10">

            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">

                <LeftFooterSide/>

            </div>

        </footer>

    )

}

export default Footer