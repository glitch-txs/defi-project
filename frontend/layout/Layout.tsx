import Head from 'next/head';
import React from 'react'
import style from './Layout.module.scss'
import Navbar from './Navbar/Navbar'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader/Loader';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {

  const [loader, setLoader] = useState<boolean>()

  useEffect(() => {
    setLoader(true)

    setTimeout(()=>setLoader(false),  0)
  }, [])


  return (
    <>
    <Head> <title>DeFi</title> </Head>
    { loader ? <Loader/> : <></> }
      <div className={style.container} >
        <Navbar/>
        <div className={style.childrenContainer} >
        { children }
        </div>
      </div>
    </>
  )
}

export default Layout