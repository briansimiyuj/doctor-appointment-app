import { useModalContext } from "../../../context/ModalContext"

const AlternativeInput: React.FC = ()=>{

    const { alternative, setAlternative } = useModalContext()

    return(

        <div className="mb-4">

            <label htmlFor="alternative" className="block text-gray-700 text-sm font-medium mb-2">Alternative Suggestion (optional):</label>

            <textarea
                id="alternative"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                placeholder="Suggest an alternative time, doctor or treatment option"
                value={alternative}
                onChange={e => setAlternative(e.target.value)}
            />

        </div>

    )

}

export default AlternativeInput