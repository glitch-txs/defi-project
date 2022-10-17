import React, { ChangeEvent, useContext, useState } from 'react'
import Connect from '../../Connect/Connect'
import { DeFiContext } from '../../../context/useContext'
import style from './Mint.module.scss'
import Image from 'next/image'
import { ethers } from 'ethers'
import { Future__factory } from '../../../types/ethers-contracts'
import { QueryClient } from 'react-query'

const Mint = () => {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
      },
    },
  })

  const refetchData = async()=>{
    await queryClient.refetchQueries(['blockchainData'], { active: true })
  }

  const { account, signer, provider, blockchainData }: any = useContext(DeFiContext)

  const [amount, setAmount] = useState<string>()

  const FutureAddress = '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264'

  const handleMint = async()=>{
    if(signer && account && amount){
        const contract = Future__factory.connect(FutureAddress, signer)

        await contract.mint(account,ethers.utils.parseEther(amount))
        .then((res: ethers.ContractTransaction) => provider.once(res.hash, refetchData))
        .catch((er: object )=> console.log(er))
    }
  }
  
  const handleBurn = async()=>{
    if(signer && account && amount){
        const contract = Future__factory.connect(FutureAddress, signer)

        await contract.burn(ethers.utils.parseEther(amount))
        .then( (res: ethers.ContractTransaction) => provider.once(res.hash, refetchData))
        .catch((er: object )=> console.log(er))
    }
  }
  


  return (
    <div>
      <Connect>
        <div className={style.container}>

          <div className={style.title} >Blockchain Data:</div>

          <hr className={style.hr} />

          <div className={style.balanceTitle} >Future Balance:</div>

          <div className={style.balance} >{ blockchainData?.FutureBalance ? Number(blockchainData?.FutureBalance) : '--'} FTR</div>

          <div className={style.balanceTitle} >Future Token Address:</div>
          <div className={style.balance} >

            {`${account?.slice(0, 8)}...${account?.slice(34, 42)}`}

            <div className={style.img} onClick={()=>navigator.clipboard.writeText(FutureAddress)} ><Image src='/copy.png' width={30} height={30} alt='copy' /></div>

          </div>

          <div className={style.titleMint} >Mint / Burn:</div>
          <input 
           onKeyPress={(event) => {
            if (!/^[0-9]*\.?[0-9]*$/.test(event.key)) {
              event.preventDefault();
            }
          }}
          autoFocus
          type="number"
          onChange={(e: ChangeEvent<HTMLInputElement>)=>setAmount(e.target.value)}
          className={style.input} placeholder='set Amount'/>
          <div className={style.btnContainer}>
            <button className={style.btn} onClick={handleMint} >MINT</button>
            <button className={style.btn} onClick={handleBurn} >BURN</button>
          </div>
        </div>
      </Connect>
    </div>
  )
}

export default Mint