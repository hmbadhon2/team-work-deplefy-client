// import React, { useEffect, useRef, useState } from 'react';
// import Peer from "simple-peer"
// import io from "socket.io-client"

// const socket = io.connect("http://localhost:5000")

// const Practice = () => 
//     const[me, setMe] =useState("");
//     const[stream, setStream] =useState();
//     const[receivingCall, setReceivingCall]=useState(false);
//     const[caller,setCaller]=useState("")
//     const[callerSingle, setCallerSingle]=useState();
//     const[callAccepted, setCallAccepted]=useState(false);
//     const[idToCall, setIdToCall] =useState("");
//     const[callEnded, setCallEnded] = useState(false)
//     const[name, setName]=useState("")

//     const myVideo= useRef();
//     const userVideo=useRef();
//     const connectionRef= useRef();

//     useEffect(()=>{
//         navigator.mediaDevices.getUserMedia({video:true, audio:true}).then((stream)=>{
//             setStream(stream)
//             myVideo.srcObject = stream
//         })
//         socket.on("me", (id)=>{
//             setMe(id)
//         })
//        socket.on('callUser', (data)=>{
//         setReceivingCall(true)
//         setCaller(data.from);
//         setName(data.name);
//         setCallerSingle(data.signal)
//        })
//     },[])

//     const callUser=(id)=>{
//         const peer = new Peer({
//             initiator: true,
//             trickle: false,
//             stream: stream
//         })
//         peer.on("signal", (data)=>{
//           socket.emit("callUser", {
//             userToCall: id,
//             signalData: data,
//             from: me,
//             name: name
//           })
//         })

//         peer.on("stream", (stream)=>{
//             userVideo.current.srcObject = stream
//         })
//         socket.on("callAccepted", (signal)=>{
//             setCallAccepted(true);
//             peer.signal(signal)
//         })

//         connectionRef.current="peer"
//     }

//     const answerCall =()=>{
//         setCallAccepted(true)
//         const peer = new peer({
//             initiator: false,
//             trickle: false,
//             stream: stream
//         })
//         peer.on("stream", (stream)=>{
//             socket.emit("answerCall", {signal: data, to:caller})
//         })
//         peer.on("stream", (stream)=>{
//             userVideo.current.srcObject =stream
//         })
//         peer.signal(callerSingle)
//         connectionRef.current=peer;
//     }

//     const leaveCall =()=>{
//         setCallEnded(true)
//         connectionRef.current.destroy()
//     }
  
//     return (
//         <div>
//             <div className='video'>
//               {stream && <video playsInline muted ref={myVideo} autoPlay style={{width: "360px"}}></video>}
//             </div>
//             <div className='video'>
//             {callAccepted && !callEnded? <video playsInline ref={userVideo} style={{width: "360px"}}></video>: null }
//             </div>
//         </div>
//     );
// };

// export default Practice;

// import React from 'react';
// import { GiAirplaneDeparture } from "react-icons/Gi";

    {/* ................Part-2..................... */}

    
 
import React from 'react';
import { motion, spring } from "framer-motion"
import Image from 'next/image';

const buttonVariants = {
  hover: {
      scale: 1.1
  }
}

const Practice = () => {
  return (
    <div className='md:border md:dark:border-white border-black bg-white dark:text-black p-4'>
      <div className='grid grid-cols-1 md:grid-cols-3'>
       <div>
       <div>
            <motion.div
                initial={{ x: '-100vw' }}
                animate={{ x: 0 }}
                transition={{ type: 'spring', stiffness: 50 }}
                whileHover="hover"
            >
                <div className="my-4 pricingCard bg-white border border-blue-600 md:my-0 shadow-2xl flex flex-col p-6 space-y-6 sm:p-8 dark:text-black">
                    <div className="space-y-2">
                        <div className="flex flex-row items-center mb-10">
                            <Image src="/Pricing Logo/Pricing_Reguler_logo-removebg-preview.png" width={80} height={80}></Image>
                            <h4 className="text-2xl font-bold mb-5 ml-3 text-indigo-900 dark:text-black">text</h4>
                        </div>
                        <p className="text-6xl font-bold text-indigo-900 dark:text-black">
                            <span>$ 19
                                <span className="text-sm tracking-wide">/month</span>
                            </span>
                        </p>

                    </div>

                    <ul className="flex-1 space-y-2 leading-12 dark:text-black">
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black  text-lg font-semibold">categorie_one</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">categorie_two</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">categorie_three</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">categorie_four</span>
                        </li>
                        <li className="flex items-center space-x-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="flex-shrink-0 w-6 h-6">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                            </svg>
                            <span className="text-indigo-900 dark:text-black text-lg font-semibold">categorie_five</span>
                        </li>
                    </ul>

              
                </div>
            </motion.div>

        </div>
       </div>
       <div className='col-span-2 bg-white'>
       
<div className="relative overflow-x-auto px-4 pt-32">
    <table className="w-full text-sm text-left ">
        <thead className="text-xs  uppercase bg-gray-100  ">
        </thead>
        <tbody>
            <tr className="">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  Name
                </th>
  
                <td className="px-6 py-4">
                    Lipton Barua
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Package
                </th>
          
                <td className="px-6 py-4">
                ADVANCED
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    Email
                </th>
              
                <td className="px-6 py-4">
                    liptonbarua274@gmail.com
                </td>
            </tr>
            <tr>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                Monthly total
                </th>
              
                <td className="px-6 py-4">
                    $29
                </td>
            </tr>
        </tbody>
    </table>

    <button type="button" className="text-white ml-4 font-bold mt-6 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800  rounded-lg px-5 py-2.5 text-center mr-2 mb-2">Add to Card</button>
</div>

       </div>
      </div>
    </div>
  );
};

export default Practice;

// import { async } from '@firebase/util';
// import React from 'react';

// const PricingDetails = ({post}) => {
//     return (
//         <div>
//             <h1>Pricing{post.month}</h1>
//         </div>
//     );
// };

// export const getStaticProps=async(context)=>{
//     const params=context;
//     const res= await fetch(`https://deplefy-server.vercel.app/pricing/${params?.postId}`);
//     const data= await res.json();
//     return {
//         props: {
//          post: data
//         }
//     }
// }

// export const getStaticPaths=async()=>{
// const res= await fetch(`https://deplefy-server.vercel.app/pricing`);
// const posts= await res.json();

// const paths=posts.map(post=>{
//     return {
//         params: {
//             postId: `${post._id}`
//         }
//     }
// })
// return {
//     paths,
//     fallback: false
// }
// }


// export default PricingDetails;


