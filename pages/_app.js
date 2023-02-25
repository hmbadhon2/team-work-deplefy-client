
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import AuthProvider from '../context/AuthContext'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ShareProvider from '../ShareProvider/ShareProvider';
const queryClient = new QueryClient()

export default function App({ Component, pageProps }) {

  return <ThemeProvider enableSystem={true} attribute="class">
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
    <AuthProvider>
     <ShareProvider>
     <div>
      <div className="header lg:px-[108px]">
        <Header></Header>
      </div>
      <Component {...pageProps} />
      <ToastContainer />
      <div className="bg-gradient-to-tr from-violet-900  to-blue-600 rounded-tl-[250px]  text-white dark:bg-gradient-to-r dark:from-lime-900 dark:to-lime-500 dark:text-black lg:px-[108px]">
        <Footer></Footer>
      </div>
    </div>
     </ShareProvider>
  </AuthProvider>
      </Hydrate>
    </QueryClientProvider>
  </ThemeProvider>
}


