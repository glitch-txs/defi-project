import React, { useContext, useEffect, useState } from 'react'
import style from './Connect.module.scss'
import MetaLogo from './metamask/MetaLogo'
import { ethers } from "ethers"
import WalletConnect from '@walletconnect/web3-provider'
import Web3Modal from 'web3modal'
import { DeFiContext } from '../../context/useContext'
import Modal from '../Modal/Modal'

interface Props {
  children: React.ReactNode;
}

const Connect = ({ children }: Props) => {

  const [modal, setModal] = useState<boolean>(false)

    let web3modal: Web3Modal;

    const { setSigner, setAccount, setChainId, chainId, account, setProvider }: any = useContext(DeFiContext)

    useEffect(() => {
        localStorage.removeItem("walletconnect")
      }, [])

    const providerOptions = {
      walletconnect: {
        package: WalletConnect,
        options: {
            infuraId:"7fdd6b5a027641cf910c6c1cc6635610",
        },
      },
    };
    if(typeof window!="undefined"){
      web3modal = new Web3Modal({
        //this is the network that will show up as default in trust wallet
        network:"goerli",
        cacheProvider: false,
        providerOptions, // required
        theme: "dark"
      });
    }  

    async function connect() {
        
        const provider = await web3modal.connect().catch((er)=>console.log(er));
    
        if(provider){
          
          const provider_ = new ethers.providers.Web3Provider(provider);
          setProvider(provider_)
          
          const _signer = provider_.getSigner();
          setSigner(_signer)
          await _signer.getAddress().then((res)=>setAccount(res)).catch((er)=>console.log(er));
          await _signer.getChainId().then((res)=>setChainId(res)).catch((er)=>console.log(er));    
          
          provider.on("accountsChanged", (accounts: string[]) => {
            setAccount(accounts[0]);
            if(typeof accounts[0] == 'undefined'){
              console.log("res")
              setChainId(null)
              setSigner(null)
              web3modal.clearCachedProvider()
              localStorage.removeItem("walletconnect")
            }
          });

          provider.on("chainChanged", (chainId: number) => {
            console.log(chainId)
            setChainId(chainId)
          });
        }
    }

    function disconnect(){
      web3modal.clearCachedProvider()
      localStorage.removeItem("walletconnect")
      setAccount(null)
      setSigner(null)
      setChainId(null)
    }

  return (
      <>
        <div className={style.container} >
         { chainId && account ?
           (chainId == 5 || chainId == 0x5 ? children : 
           <>
           <MetaLogo/>
           <div className={style.chainId} >Please, change to Goerli Network</div>
           </>
           ) :
           (<>
            <MetaLogo/>
            <button className={style.btn} onClick={connect} >Connect your Wallet</button>
            </>)
           }
        </div>
        <Modal modal={modal} setModal={setModal} />
      </>
  )
}

export default Connect