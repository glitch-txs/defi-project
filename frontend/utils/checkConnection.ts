import { ethers } from "ethers"

export const checkConnection = async({ setSigner, setAccount, setChainId, setProvider }: any)=>{
    if(window.ethereum){
        window.ethereum
        .request({ method: 'eth_accounts' })
        .then(async (accounts: string[])=>{
          if(typeof accounts[0] !== 'undefined'){
            setAccount(accounts[0])
            const provider_ = new ethers.providers.Web3Provider(window.ethereum);
            setProvider(provider_)
            const _signer = provider_.getSigner();
            setSigner(_signer)
            await _signer.getChainId().then((res)=>setChainId(res)).catch((er)=>console.log(er))

            window.ethereum.on("accountsChanged", (accounts: string[]) => {
              setAccount(accounts[0]);
              if(typeof accounts[0] == 'undefined'){
                setChainId(null)
                setSigner(null)
              }
            });
  
            window.ethereum.on("chainChanged", (chainId: number) => {
              setChainId(chainId)
            });
          }
        })
        .catch((err: any) =>console.log(err))
        }
}