
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pricing from '../Components/Pricing/Pricing'
import Footer from '../Components/Footer/Footer'
import Header from '../Components/Header/Header'
import Subscribe from '../Components/Subscribe/Subscribe'
import Banner from '../Components/Banner/Banner'
import Navbar from '../Components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-gradient-to-r from-indigo-100 via-purple-10'>
    <div className='lg:max-w-[1140px] mx-auto'>
      <Header></Header>
      <Banner></Banner>
      <Pricing></Pricing>
      <Subscribe></Subscribe>
      <Footer></Footer>
    </div>
    </div>
  )
}
