import React, { ChangeEvent, useContext, useState } from 'react'
import { DeFiContext } from '../../../../../context/useContext'
import Modal from '../../../../Modal/Modal'
import style from './BoxA.module.scss'

const BoxA = () => {

  const { blockchainData }: any = useContext(DeFiContext)

  const [modal, setModal] = useState<boolean>(true)
  const [amount, setAmount] = useState<string>()

  const handleUnstake = ()=>{
    
  }

  
  return (
    <>
      <div className={style.title} > My Future Staking </div>

      <div className={style.info}> 

        <div className={style.staked} >
          <div className={style.stakedTitle} >TOTAL STAKED</div>
          <div className={style.stakedBalance} >{blockchainData?.StakedByUser ? Number(blockchainData?.StakedByUser) : '--' } FTR</div>
        </div>

        <div className={style.inWallet} >
          <div className={style.inWalletTitle} >AVAILABLE IN WALLET</div>
          <div className={style.inWalletBalance} >{blockchainData?.FutureBalance ? Number(blockchainData?.FutureBalance) : '--' } FTR</div>
        </div>

      </div>

      <div className={style.rewardContainer} >

        <div className={style.rewardInfo} >
          <div className={style.rewardTitle} >CLAIMABLE REWARDS</div>
          <div className={style.rewardBalance} >{blockchainData?.RewardBalance ? Number(blockchainData?.RewardBalance) : '--' } <span>RWD</span></div>
        </div>

        <button className={style.claim} disabled={parseInt(blockchainData?.RewardBalance) == 0}>Claim</button>

      </div>

      <div className={style.btnContainer} >
        <button className={style.stakeBTN} onClick={(e)=> setModal(pre=>!pre)} key='0' >Stake</button>
        <button className={style.unstakeBTN} onClick={handleUnstake} >Unstake</button>
      </div>

      <Modal modal={modal} setModal={setModal}>
        <div className={style.modalContainer} >
          <div className={style.title} >Stake Future</div>
          <input 
           onKeyPress={(event) => {
            if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
              event.preventDefault();
            }
          }}
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>)=>setAmount(e.target.value)}
          className={style.input} placeholder='set Amount'/>
          <button className={style.modalStakeBTN} >Stake Now</button>
        </div>
      </Modal>
    </>
  )
}

export default BoxA