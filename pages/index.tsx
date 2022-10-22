import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Header from '../components/header'
import Hero from '../components/hero'

const Home: NextPage = () => {
  return (
    <div className={'bg-slate-900 text-white h-screen'}>
      <Head>
        <title>Sebastian Manion</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* hero */}
      <section  id='hero'>
        <Hero />
      </section>

      {/* about */}

      {/* experience */}

      {/* skills */}

      {/* projects */}

      {/* contact me */}

      
    </div>
  )
}

export default Home
