import React from 'react'
import style from './Staked.module.scss'
import Image from 'next/image'

const Staked = () => {
  return (
    <>
      <div className={style.title} >Total Staked</div>

      <hr className={style.hr} />

      <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center' }} >

        <div className={style.balance} >635418941 <span>FTR</span></div>

        <div className={style.img} >
          <Image src='/images/stake.png' width={90} height={90} alt='staking' />
        </div>

      </div>
    </>
  )
}

export default Staked