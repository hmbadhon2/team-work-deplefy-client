
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Navbar from '../Components/Home/Practice/Practice'
import Subscribe from '../Components/Home/Subscribe/Subscribe';
import Team from '../Components/Home/Team/Team'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='md:max-w-[1140px] md:mx-auto'>
    <Navbar></Navbar>
    <Banner></Banner>
    <Pricing></Pricing>
    <Team></Team>
    <Subscribe></Subscribe>
</div>
  )
}
