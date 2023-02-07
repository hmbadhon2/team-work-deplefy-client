// import React, { useEffect, useRef, useState } from 'react';
// import Peer from "simple-peer"
// import io from "socket.io-client"

// const socket = io.connect("http://localhost:5000")

// const Practice = () => {
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

import React from 'react';
import {Player} from '@lottiefiles/react-lottie-player'

const Practice = () => {
    return (
        <div>
  <Player
				autoplay
				loop
				src="https://assets5.lottiefiles.com/packages/lf20_lc7svuzc.json"></Player>
        </div>
    );
};

export default Practice;