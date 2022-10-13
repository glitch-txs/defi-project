import React, { ChangeEvent, useContext, useEffect, useState } from 'react'
import Connect from '../Connect/Connect'
import { DeFiContext } from '../../context/useContext'
import style from './Mint.module.scss'
import Image from 'next/image'
import { BigNumber, ethers } from 'ethers'
import { Future__factory } from '../../types/ethers-contracts'

const Mint = () => {

  const { account, signer, provider }: any = useContext(DeFiContext)

  const [balance, setBalance] = useState<number>()
  const [amount, setAmount] = useState<number>()

  const FutureAddress = '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264'

  useEffect(() => {
    if(signer && account){
      const getBalance = async () =>{
        const contract = Future__factory.connect(FutureAddress, signer)
        await contract.balanceOf(account)
        .then((res: BigNumber) => setBalance(Number(ethers.utils.formatEther(res))))
        .catch((er: object )=> console.log(er))
      }

      getBalance()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [account])

  const handleMint = async()=>{
    if(signer && account){
      const getBalance = async () =>{

        const contract = Future__factory.connect(FutureAddress, signer)
        const res = await contract.mint(account,ethers.utils.parseEther(`${amount}`))
        .then( (res: ethers.ContractTransaction) => provider.once(res.hash, (tx: any)=>console.log('done', tx)))
        .catch((er: object )=> console.log(er))

        
      }

      getBalance()
    }
  }
  


  return (
    <div>
      <Connect>
        <div className={style.container}>

          <div className={style.title} >Blockchain Data:</div>

          <hr className={style.hr} />

          <div className={style.balanceTitle} >Future Balance:</div>

          <div className={style.balance} >{balance} FTR</div>

          <div className={style.balanceTitle} >Future Token Address:</div>
          <div className={style.balance} >

            {`${account?.slice(0, 8)}...${account?.slice(34, 42)}`}

            <div className={style.img} ><Image src='/copy.png' width={30} height={30} alt='copy' /></div>

          </div>

          <div className={style.titleMint} >Mint / Burn:</div>
          <input 
           onKeyPress={(event) => {
            if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
              event.preventDefault();
            }
          }}
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>)=>setAmount(Number(e.target.value))}
          className={style.input} placeholder='set Amount'/>
          <div className={style.btnContainer}>
            <button className={style.btn} onClick={handleMint} >MINT</button>
            <button className={style.btn} >BURN</button>
          </div>
        </div>
      </Connect>
    </div>
  )
}

export default Mint