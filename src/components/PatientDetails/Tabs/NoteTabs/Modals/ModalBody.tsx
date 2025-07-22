import { useNotesTabContext } from "../../../../../context/NotesTabContext"

const ModalBody: React.FC = ()=>{

    const { title, setTitle, content, setContent } = useNotesTabContext()

    return(

        <form className="space-y-4">

            <div>

                <label htmlFor="title" className="block text-sm font-medium text-gray-700 my-2">Title:</label>

                <input 
                    type="text" 
                    id="title" 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-bg"
                    placeholder="Enter note title"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

            </div>

            <div>

                <label htmlFor="content" className="block text-sm font-medium text-gray-700 my-2">Content:</label>

                <textarea 
                    id="content" 
                    rows={4} 
                    className="w-full px-3 py-2 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-primary-bg"
                    placeholder="Enter note content here..."
                    value={content}
                    onChange={e => setContent(e.target.value)}
                ></textarea>

            </div>

        </form>

    )

}

export default ModalBody