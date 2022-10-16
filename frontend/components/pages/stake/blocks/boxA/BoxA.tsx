import React from 'react'
import style from './BoxA.module.scss'

const BoxA = () => {
  
  return (
    <>
      <div className={style.title} > My Future Staking </div>

      <div className={style.info}> 

        <div className={style.staked} >
          <div className={style.stakedTitle} >TOTAL STAKED</div>
          <div className={style.stakedBalance} >1651253 FTR</div>
        </div>

        <div className={style.inWallet} >
          <div className={style.inWalletTitle} >AVAILABLE IN WALLET</div>
          <div className={style.inWalletBalance} >56178 FTR</div>
        </div>

      </div>

      <div className={style.rewardContainer} >

        <div className={style.rewardInfo} >
          <div className={style.rewardTitle} >CLAIMABLE REWARDS</div>
          <div className={style.rewardBalance} >6646 <span>RWD</span></div>
        </div>

        <button className={style.claim} >Claim</button>

      </div>

      <div className={style.btnContainer} >
        <button className={style.stakeBTN} >Stake</button>
        <button className={style.unstakeBTN} >Unstake</button>
      </div>

    </>
  )
}

export default BoxA