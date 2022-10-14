import React from 'react'
import style from './Staked.module.scss'
import Image from 'next/image'

const Staked = () => {
  return (
    <>
      <div className={style.title} >Total Staked</div>

      <hr className={style.hr} />

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }} >

      <div className={style.balance} >635418941 <span style={{fontSize:'30px', color:'#BB000E'}} >FTR</span></div>

      <div className={style.img} >
        <Image src='/images/stake.png' width={100} height={100} />
      </div>
      </div>
    </>
  )
}

export default Staked