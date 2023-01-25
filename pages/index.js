
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pricing from '../Components/Home/Pricing/Pricing'
import Banner from '../Components/Home/Banner/Banner'
import Navbar from '../Components/Home/Practice/Practice'
import Subscribe from '../Components/Home/Subscribe/Subscribe';
import Practice from '../Components/Home/Practice/Practice'
import TeamMember from '../Components/Home/TeamMember/TeamMember'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='md:max-w-[1140px] md:mx-auto'>
    <Banner></Banner>
    <Pricing></Pricing>
    <TeamMember></TeamMember>
    <Subscribe></Subscribe>
    <Practice></Practice>
</div>
  )
}
