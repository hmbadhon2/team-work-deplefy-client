import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client"
import { AuthContext } from "../../../context/AuthContext";

const Contact = () => {
    const socket = io("http://localhost:5000", { transports: ['websocket'] });
    const [message, setMessage] = useState("")
    const [getMessage, setGetMessage] = useState([])
    const{user}=useContext(AuthContext)


    const handleSubmit = (e) => {
        console.log(message)
        socket.emit("reactEvent", { post: message })
    }


    socket.on("showMessage", (data) => {
        setGetMessage([...getMessage, data])
    })

    // useEffect(() => {
    //     socket.on("showMessage", (data) => {
    //         setGetMessage(data.message)
    //     })
    // }, [socket])
    return (
        <div className="grid justify-center">
            <div className="flex flex-col p-8 shadow-sm rounded-xl lg:p-12 dark:bg-gray-900 dark:text-gray-100">
                <div className="flex flex-col items-center bg-black">
                    <div className="border-b-2 w-full text-white text-center py-5 border-white">
                        <h1 className="font-bold">My Chats</h1>
                    </div>
                    <div className=" p-5">
                        <div className="text-white overflow-y-auto h-72 sticky">
                            {
                                getMessage.map(((p) => (<div>{p.post}</div>)))
                            }
                        </div>
                        <div className="flex">
                          <input onChange={(e) => setMessage(e.target.value)} type="text" className="w-80 py-2 rounded-l" />
                          <button onClick={handleSubmit} className="bg-pink-800 px-5 text-white rounded-r">send</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;