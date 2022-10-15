import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import style from './Navbar.module.scss'
import Ham from './Ham/Ham'
type Props = {}

const Navbar = (props: Props) => {

    const [open, setOpen] = useState<boolean>(false)

  return (
    <>
        <div className={style.container}>
            <Link href='/' >
                <div className={style.logo}>
                    <Image src='/logo.png'  width={80} height={80}/>
                </div></Link>
            <div className={open ? style.routeContainerOpen : style.routeContainer}>
                <Link href='/mint' ><div className={style.route}  onClick={()=>setOpen(!open)} >Mint</div></Link>
                <Link href='/stake' ><div className={style.route}  onClick={()=>setOpen(!open)} >Stake</div></Link>
                <Link href='/whitepaper' ><div className={style.route}  onClick={()=>setOpen(!open)} >Whitepaper</div></Link> 
            </div>
                <Ham open={open} setOpen={setOpen} />
        </div>
        <hr className={style.hr} />
    </>
  )
}

export default Navbar