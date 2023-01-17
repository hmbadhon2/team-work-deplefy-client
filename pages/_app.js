import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div className=''>
 <div className="header lg:px-[108px]">
 <Header></Header>
 </div>
  <Component {...pageProps} />
  <div className="bg-black text-white lg:px-[108px]">
  <Footer></Footer>
  </div>
  </div>
}
