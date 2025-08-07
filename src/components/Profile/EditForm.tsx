import { useContext, useRef } from "react"
import { ProfileContext } from "../../context/ProfileContext"
import EditFormInput from "./EditFormInput"
import { useEditFormInput } from "../../hooks/useEditFormInput"
import { assets } from "../../assets/frontend/assets"
import { useFileSelection } from "../../hooks/useFileSelection"

const EditForm: React.FC = () =>{

    const fileInputRef = useRef<HTMLInputElement>(null),
          coverImageRef = useRef<HTMLInputElement>(null),
          context = useContext(ProfileContext)

    if(!context) return null

    const { profile } = context,
           { handleBrowseClick, handleDragOver, handleDrop } = useFileSelection(),
          editFormInput = useEditFormInput()

    if(!editFormInput) return null

    const { handleImageChange, isChanged } = editFormInput


    return(

        <>

            <form className="flex flex-col gap-8 items-center justify-center w-full max-w-3xl mx-auto p-6">

                <div className="w-full flex flex-col items-center gap-4">

                    <div 
                        className="relative group rounded-lg overflow-hidden cursor-pointer"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                        onClick={e =>{

                            e.stopPropagation()
                            handleBrowseClick(fileInputRef)

                        }}
                    >

                        <img 
                            src={profile?.profileImage || assets.uploadIcon}
                            alt="current user image" 
                            className="w-full h-36 sm:h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105"
                        />


                        <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                            <span className="text-white text-sm">Change Photo</span>

                        </div>

                    </div>

                    <input 
                        type="file" 
                        name="profileImage" 
                        accept="image/*"
                        hidden
                        ref={fileInputRef}
                        onChange={handleImageChange} 
                    />

                </div>


                {
                
                    profile?.type === "doctor" &&(

                        <div className="w-full">

                            <h2 className="text-neutral-500 font-semibold text-lg mb-4">Cover Image</h2>

                            <div 
                                className="relative group rounded-lg overflow-hidden cursor-pointer"
                                onClick={e =>{

                                    e.stopPropagation()
                                    coverImageRef.current?.click()

                                }}
                                onDragOver={handleDragOver}
                                onDrop={handleDrop}
                            >

                                <img 
                                    src={profile.coverImage || assets.uploadIcon}
                                    alt="Cover Image" 
                                    className="w-full h-36 sm:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                                />
                
                                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">

                                    <span className="text-white text-sm">Change Cover</span>
                                    
                                </div>
                
                            </div>

                            <input 
                                type="file" 
                                name="coverImage" 
                                accept="image/*"
                                hidden
                                ref={coverImageRef}
                                onChange={handleImageChange} 
                            />

                        </div>
                    )

                }


                <EditFormInput/>


                <button
                    className={`${isChanged 
                        ? 'bg-primary-bg text-secondary-bg hover:bg-opacity-90 cursor-pointer' 
                        : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                    } px-10 py-3 rounded-lg font-medium transition-colors duration-300 w-full max-w-md mt-4`}
                    type="submit"
                    disabled={!isChanged}
                >Save Changes</button>

            </form>

        </>

    )

}

export default EditForm