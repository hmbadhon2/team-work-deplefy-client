
import { ShareContext } from '../../../ShareProvider/ShareProvider';
import ContactUserData from '../../ContactForm/ContactUserData/ContactUserData/ContactUserData';
import { AuthContext } from '../../../context/AuthContext';
import { useContext, useState } from "react";
import { io } from "socket.io-client"
import Loading from "../../Shared/Loading";
import { Player } from '@lottiefiles/react-lottie-player'

const Contact = () => {

    const { contactUser, profileImage, isLoading } = useContext(ShareContext);
    const { user } = useContext(AuthContext);

    const socket = io("https://Contact-549484f.onrender.com/", { transports: ['websocket'] });
    const [message, setMessage] = useState("")
    const [getMessage, setGetMessage] = useState([])


    const handleSubmit = (e) => {
        console.log(message)
        socket.emit("reactEvent", { post: message })
    }


    socket.on("showMessage", (data) => {
        setGetMessage([...getMessage, data])
    })

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="md:max-w-[1140px] md:mx-auto">
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 shadow-lg border border-slate-400 dark:border-lime-400'>

                {/* ..............Session-1...................... */}
                <div className="col-span-1">
                    <div className='bg-gradient-to-tr from-violet-900  to-blue-600 dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 h-full p-5'>

                        {/* ..........Part 1............... */}
                        <div className='flex justify-between text-white'>
                            <div className='font-bold'>Inbox</div>
                            <div className='flex '>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                                </svg>



                            </div>
                        </div>

                        {/* ..........Part 2............... */}

                        <div className='my-3'>
                            <fieldset className=" space-y-1 dark:text-gray-100">
                                <label for="Search" className="hidden">Search</label>
                                <div className="relative">
                                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                                        <button type="button" title="search" className="p-1 focus:outline-none focus:ring">
                                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-100">
                                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                                            </svg>

                                        </button>
                                    </span>
                                    <input type="search" name="Search" placeholder="Search..." className="w-full py-2 pl-10 text-sm rounded-md focus:outline-none dark:bg-gray-800 dark:text-gray-100 focus:dark:bg-gray-900 focus:dark:border-violet-400" />

                                </div>
                            </fieldset>
                        </div>

                        {/* ..........Part 3............... */}

                        <div className='flex justify-around text-white text-xl'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg>

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M7.875 14.25l1.214 1.942a2.25 2.25 0 001.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 011.872 1.002l.164.246a2.25 2.25 0 001.872 1.002h2.092a2.25 2.25 0 001.872-1.002l.164-.246A2.25 2.25 0 0116.954 9h4.636M2.41 9a2.25 2.25 0 00-.16.832V12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 01.382-.632l3.285-3.832a2.25 2.25 0 011.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0021.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 002.25 2.25z" />
                            </svg>


                        </div>

                        {/* ..........Part 4............... */}

                        <div className='mt-3 overflow-y-auto h-80 pr-3 text-white'>

                            {
                                contactUser?.map(contactUser => <ContactUserData key={contactUser._id} contactUser={contactUser}></ContactUserData>)
                            }

                        </div>
                    </div>
                </div>

                {/* ..............Session-2...................... */}

                <div className="">
                    <div className='bg-gray-200 relative border-slate-400 border-b-2 dark:border-lime-400 h-full'>

                        {/* ...............Part-1.......... */}


                        <div className='flex justify-between  bg-gray-300 p-5'>
                            <div className='text-black'>

                                {profileImage[0]?.name ? <h1 className='font-semibold'>{profileImage[0]?.name}</h1> : <h1>{user?.displayName}</h1>}
                            </div>
                            <div className='flex text-white'>
                                <a href="https://meet.google.com/ykx-iukf-mru" target='_blank'>
                                    <div className='bg-gradient-to-tr from-violet-900  to-blue-600 dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black rounded-full p-2 mr-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                                        </svg>
                                    </div>
                                </a>

                                <a href="https://meet.google.com/ykx-iukf-mru" target='_blank'>
                                    <div className='bg-gradient-to-tr from-violet-900  to-blue-600 dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black rounded-full p-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                            <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
                                        </svg>
                                    </div>
                                </a>

                            </div>
                        </div>

                        {/* ...............Part-2.......... */}
                        <div className="">
                            <div className="text-white overflow-y-auto h-[600px] md:h-full sticky">
                                {
                                    getMessage.map(((p) => (<div>{p.post}</div>)))
                                }
                            </div>

                            {/* ...............Part-3.......... */}
                            <div className="">
                                <div className="flex absolute inset-x-0 bottom-0">
                                    <input onChange={(e) => setMessage(e.target.value)} type="text" className="w-full bg-white dark:text-black py-2 pl-3" />
                                    <button onClick={handleSubmit} className="bg-gradient-to-tr from-violet-900  to-blue-600 dark:bg-gradient-to-tr dark:from-lime-900 dark:to-lime-500 dark:text-black px-5 text-white font-bold">Send</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ..............Session-3...................... */}

                <div>
                    <div className="bg-white h-[600px] md:h-full text-black">
                        <div>
                            <div className="flex flex-col justify-center p-3  rounded-xl sm:px-12 ">

                                {profileImage[0]?.image ? <img src={profileImage[0]?.image} alt="" className="w-32 h-32 mx-auto rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" />
                                    :
                                    <>
                                        {
                                            user?.photoURL?
                                                <img src={user?.photoURL} alt="" className="w-32 h-32 mx-auto rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" /> : 
                                                <img src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-business-male-icon-vector-png-image_4187852.jpg" alt="" className="w-32 h-32 mx-auto rounded-full ring-2 ring-offset-4 dark:bg-gray-500 ring-violet-400 ring-offset-gray-800" />
                                        }
                                    </>
                                }

                                <div className=" text-center divide-y divide-gray-700">
                                    <div className="my-2 space-y-1">
                                        {profileImage[0]?.name ? <h2 className="text-xl font-bold  sm:text-2xl">{profileImage[0]?.name}</h2> : <h2 className="text-xl font-semibold sm:text-2xl">{user?.displayName}</h2>}
                                        {profileImage[0]?.positionData? <p className="px-5 text-xs sm:text-base">{profileImage[0]?.positionData}</p> : <p className="px-5 text-xs sm:text-base"></p>}
                                    </div>

                                </div>
                                <ul>
                                    {profileImage[0]?.phone ? <li className="rounded-sm">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
                                            </svg>

                                            <span>{profileImage[0]?.phone}</span>
                                        </a>
                                    </li> : null}
                                 
                                    <li className="rounded-sm">
                                        <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                            </svg>

                                            <span>{profileImage[0]?.email}</span>
                                        </a>
                                    </li>
                                </ul>
                                <div className="">
                                    <Player className='w-52'
                                        autoplay
                                        loop
                                        src="https://assets1.lottiefiles.com/packages/lf20_u25cckyh.json"></Player>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;