// import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { io } from "socket.io-client"
import { AuthContext } from "../../../context/AuthContext";


const Contact = () => {
    const socket = io("https://practice-549484f.onrender.com/", { transports: ['websocket'] });
    const [message, setMessage] = useState("")
    const [getMessage, setGetMessage] = useState([])
    const { user} = useContext(AuthContext)


    const handleSubmit = (e) => {
        console.log(message)
        socket.emit("reactEvent", { post: message })
    }


    socket.on("showMessage", (data) => {
        setGetMessage([...getMessage, data])
    })

    return (
        <div>
            <section className="p-6 dark:text-gray-400">
                <div novalidate="" className="container md:w-96 bg-black max-w-xl mx-auto  rounded-md shadow dark:bg-gray-900 ng-untouched ng-pristine ng-valid">
                    <div className="border-b-2 flex justify-between px-5 md:w-full text-white text-center py-5 border-white">
                        <h1 className="font-bold">My Chats</h1>
                        <div className="flex">
                            <a href="https://meet.google.com/ykx-iukf-mru" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-4 text-blue-800 dark:text-info">
                                <path strokeLinecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                            </svg>
                            </a>
                            <a href="https://meet.google.com/ykx-iukf-mru" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-800 dark:text-info">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>

                            </a>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="text-white overflow-y-auto h-72 sticky">
                            {
                                getMessage.map(((p) => (<div>{p.post}</div>)))
                            }
                        </div>

                        <div className="flex">
                            <input onChange={(e) => setMessage(e.target.value)} type="text" className="w-80 dark:text-white py-2 pl-3 rounded-l" />
                            <button onClick={handleSubmit} className="bg-blue-900 dark:bg-info dark:text-black px-5 text-white font-bold rounded-r">Send</button>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;