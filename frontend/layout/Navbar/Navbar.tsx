import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import style from './Navbar.module.scss'
type Props = {}

const Navbar = (props: Props) => {
  return (
    <>
        <div className={style.container}>
            <Link href='/' >
                <div className={style.logo}>
                    <Image src='/logo.png'  width={80} height={80}/>
                </div></Link>
            <div className={style.routeContainer}>
                <Link href='/mint' ><div className={style.route} >Mint</div></Link>
                <Link href='/stake' ><div className={style.route} >Stake</div></Link>
                <Link href='/whitepaper' ><div className={style.route} >Whitepaper</div></Link> 
            </div>
        </div>
        <hr className={style.hr} />
    </>
  )
}

export default Navbar