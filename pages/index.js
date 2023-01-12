import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Pricing from '../Components/Pricing/Pricing'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <h1> Hello developers</h1>
 
      <Pricing></Pricing>
    </>
  )
}
