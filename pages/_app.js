
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AuthProvider from '../context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
 <div className="header lg:px-[108px]">
 <Header></Header>
 </div>
  <Component {...pageProps} />
  <div className="bg-black text-white lg:px-[108px]">
  <Footer></Footer>
  </div>
  </div>
}


// export default function App({ Component, pageProps }) {
//   return <AuthProvider>
  
//     <Component {...pageProps} />
//     <ToastContainer />
//   </AuthProvider>
  
// }
=======
  return <AuthProvider>
    <div>
      <div className="header lg:px-[108px]">
        <Header></Header>
      </div>
      <Component {...pageProps} />
      <ToastContainer />
      <div className="bg-black text-white lg:px-[108px]">
        <Footer></Footer>
      </div>
    </div>
  </AuthProvider>
}
>>>>>>> 918b5040fb7a58c167872342003480439d487663

