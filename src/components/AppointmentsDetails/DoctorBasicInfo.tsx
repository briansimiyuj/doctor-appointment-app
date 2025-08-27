import { useAppointmentsContext } from "../../context/AppointmentContext"
import { useCurrencyContext } from "../../context/CurrencyContext"

const DoctorBasicInfo: React.FC = ()=>{

    const { appointment } = useAppointmentsContext(),
          { currencySymbol } = useCurrencyContext(), 
          doctor = appointment?.doctor.doctorInfo

    return(

        <div className="flex flex-col md:flex-row items-center md:gap-5 text-center">

            <div className="flex flex-col items-center justify-center">

                <div>

                    <h2 className="text-2xl font-bold text-gray-800">{doctor?.name}</h2>

                    <p className="text-gray-600">

                        {doctor?.speciality} - {doctor?.experience} experience

                    </p>

                </div>

                <div className="mt-4 ml-5 flex flex-col md:flex-row gap-2">

                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">{currencySymbol}  {doctor?.fees}</span>

                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Hospital: {doctor?.address?.hospital}</span>

                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">Hospital Location: {doctor?.address?.hospitalLocation}</span>

                </div>

            </div>

        </div>

    )

}

export default DoctorBasicInfo