
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pricing from '../Components/Pricing/Pricing'
import Footer from '../Components/Footer/Footer'
import Banner from '../Components/Banner/Banner'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Banner></Banner>
      <Pricing></Pricing>
       <Footer></Footer>
    </>
  )
}
