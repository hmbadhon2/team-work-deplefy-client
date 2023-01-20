import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client"
import { AuthContext } from "../../../context/AuthContext";

const Contact = () => {
    const socket = io("http://localhost:5000", { transports: ['websocket'] });
    const [message, setMessage] = useState("")
    const [getMessage, setGetMessage] = useState([])
    const { user } = useContext(AuthContext)


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
        <div>
            <section className="p-6 dark:text-gray-400">
                <div novalidate="" className="container md:w-96 bg-black max-w-xl mx-auto space-y-6 rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                    <div className="border-b-2 md:w-full text-white text-center py-5 border-white">
                        <h1 className="font-bold">My Chats</h1>
                    </div>
                <div className="p-4">
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
            </section>
        </div>
    );
};

export default Contact;