
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pricing from '../Components/Pricing/Pricing'
import Footer from '../Components/Footer/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Pricing></Pricing>
       <Footer></Footer>
    </>
  )
}
