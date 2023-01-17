
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pricing from '../Components/Pricing/Pricing'
import Subscribe from '../Components/Subscribe/Subscribe'
import Banner from '../Components/Banner/Banner'
import Navbar from '../Components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <div className='lg:max-w-[1140px] lg:mx-auto'>
      <Navbar></Navbar>
      <Banner></Banner>
      <Pricing></Pricing>
      <Subscribe></Subscribe>
    </div>
    </div>
  )
}
