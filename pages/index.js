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
      <h1>Team teck airme</h1>
      <h1> Hellow world</h1>
      <h1>welcome everyone</h1>
      <Pricing></Pricing>
      <h3> Welcome by Nayon</h3>
      <h1>this is a home page</h1>
    </>
  )
}
