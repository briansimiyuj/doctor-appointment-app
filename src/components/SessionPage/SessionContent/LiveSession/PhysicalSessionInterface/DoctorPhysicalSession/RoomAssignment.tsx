import { useState } from "react"
import { useManageAppointmentContext } from "../../../../../../context/ManageAppointmentContext"
import { FaDoorClosed, FaChevronDown, FaChevronUp, FaExchangeAlt } from "react-icons/fa"

const RoomAssignment: React.FC = () =>{

    const { roomNumber, assignRoom } = useManageAppointmentContext(),
          [isExpanded, setIsExpanded] = useState(false),
          [isChangingRoom, setIsChangingRoom] = useState(false),
          [selectedRoom, setSelectedRoom] = useState(roomNumber || ""),
          availableRooms = ['101', '102', '103', '104', '105', '201', '202', '203', '204', '205']

    const handleAssignRoom = () =>{
    
        if(selectedRoom && selectedRoom !== roomNumber){
        
           assignRoom(selectedRoom)

           setIsChangingRoom(false)
        
        }
    
    }

    return(

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow">

            <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
            >

                <div className="flex items-center space-x-3">

                    <FaDoorClosed className="text-blue-500 w-5 h-5"/>

                    <div className="text-left">

                        <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">Room Assignment</h3>
                        
                        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate max-w-[150px] sm:max-w-none">

                            {roomNumber ? `Room ${roomNumber}` : 'No room assigned'}

                        </p>

                    </div>

                </div>

                {isExpanded ? <FaChevronUp className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5"/> : <FaChevronDown className="text-gray-400 w-4 h-4 sm:w-5 sm:h-5"/>}

            </button>

            {

                isExpanded &&(

                    <div className="px-3 sm:px-4 pb-4 border-t border-gray-200 dark:border-gray-700 pt-4">

                        {

                            isChangingRoom ?(

                                <div className="space-y-3 sm:space-y-4">

                                    <div className="space-y-2">

                                        <label htmlFor="roomNumber" className="block text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Select Room</label>
                                        
                                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-1 sm:gap-2">

                                            {

                                                availableRooms.map(room =>(


                                                    <button
                                                        key={room}
                                                        onClick={() => setSelectedRoom(room)}
                                                        className={`p-2 sm:p-3 rounded-lg border transition-colors text-xs sm:text-sm ${selectedRoom === room ? 'bg-blue-500 text-white dark:text-white border-blue-500' : 'bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800'
                                                    }`}>{room}</button>

                                                ))

                                            }

                                        </div>

                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-2">

                                        <button
                                            onClick={handleAssignRoom}
                                            disabled={!selectedRoom || selectedRoom === roomNumber}
                                            className="flex-1 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white dark:text-white font-semibold rounded-lg transition-colors truncate"
                                        >Assign Room {selectedRoom}</button>

                                        <button
                                            onClick={() =>{
                                                setIsChangingRoom(false)
                                                setSelectedRoom(roomNumber || "")
                                            }}
                                            className="px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-semibold rounded-lg transition-colors"
                                        >Cancel</button>

                                    </div>

                                </div>

                            ):(
                                
                                <div className="space-y-3 sm:space-y-4">

                                    <div className="flex items-center justify-between p-2 sm:p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                                    
                                        <span className="text-xs sm:text-sm text-gray-700 dark:text-gray-300">Current Room:</span>
                                        
                                        <span className="font-semibold text-sm sm:text-base">{roomNumber || "Not assigned"}</span>
                                    
                                    </div>

                                    <button
                                        onClick={() => setIsChangingRoom(true)}
                                        className="w-full flex items-center justify-center space-x-2 px-3 sm:px-4 py-2 text-xs sm:text-sm bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg transition-colors"
                                    >

                                        <FaExchangeAlt className="w-3 h-3 sm:w-4 sm:h-4"/>

                                        <span>Change Room</span>

                                    </button>                

                                </div>

                            )

                        }

                    </div>

                )

            }

        </div>

    )

}

export default RoomAssignment