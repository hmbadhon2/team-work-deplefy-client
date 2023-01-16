import AuthProvider from '../context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <AuthProvider>
  
    <Component {...pageProps} />
    <ToastContainer />
  </AuthProvider>
  
}
