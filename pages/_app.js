
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AuthProvider from '../context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css'

export default function App({ Component, pageProps }) {

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


