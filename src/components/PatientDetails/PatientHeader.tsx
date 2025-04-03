import PatientImage from "./PatientImage"

const PatientHeader: React.FC = ()=>{

    return(

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">

            <div className="flex flex-col md:flex-row gap-6">

                <PatientImage/>
                
            </div>

        </div>

    )

}

export default PatientHeader