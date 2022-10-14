import React from 'react'
import style from './RewardAddress.module.scss'
import Image from 'next/image'

const RewardAddress = () => {
  return (
    <>
        <div className={style.title}>
          Token Reward Address
        </div>
        <div className={style.value} >
        0x97F7BB30AFD27b0cc116491c71378678aC9cafC4
        <div className={style.img} onClick={()=>navigator.clipboard.writeText('0x97F7BB30AFD27b0cc116491c71378678aC9cafC4')} ><Image src='/copy.png' width={30} height={30} alt='copy' /></div>
        </div>
    </>
  )
}

export default RewardAddress