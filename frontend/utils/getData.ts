import { BigNumber, ethers } from "ethers"
import { Future__factory } from "../types/ethers-contracts"
import abi from '../abi/StakeFuture.json' 
import { BlockchainData } from "../context/useContext"

const FutureAddress = '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264'
// const RewardAddress = '0x97F7BB30AFD27b0cc116491c71378678aC9cafC4'
const StakingAddress ='0x6D278724fC4d2580f9f68f074304d52B5e33aCB3'

type GetData = {
    provider: ethers.providers.Web3Provider | null,
    setBlockchainData:(blockchainData: BlockchainData)=> void,
}

export const getBlockchainData = async({ provider, setBlockchainData }: GetData)=>{

    if(provider){
        let _blockchainData: BlockchainData = {};

        const signer = provider.getSigner();

        const futureContract = Future__factory.connect(FutureAddress, signer)
        const userAddres = signer.getAddress()
        await futureContract.balanceOf(userAddres)
        .then((res:BigNumber)=>_blockchainData = {..._blockchainData, FutureBalance: ethers.utils.formatEther(res)})
        .catch((er: object )=> console.log(er))
        
        await futureContract.balanceOf(StakingAddress)
        .then((res:BigNumber)=>_blockchainData = {..._blockchainData, TotalStaked: ethers.utils.formatEther(res)})
        .catch((er: object )=> console.log(er))
        
        const stakingContract = new ethers.Contract(StakingAddress, abi.abi, provider)
        await stakingContract.rewards(userAddres)
        .then((res:BigNumber)=>_blockchainData = {..._blockchainData, RewardBalance: ethers.utils.formatEther(res)})
        .catch((er: object )=> console.log(er))
        
        
        //CHANGE SMART CONTRACT _balance FUNCTION, NOT TAKEN BY TYPECHAIN
        // const stakingContract = Future__factory.connect(StakingAddress, signer)
        await stakingContract._balances(userAddres)
        .then((res:BigNumber)=>_blockchainData = {..._blockchainData, StakedByUser: ethers.utils.formatEther(res)})
        .catch((er: object )=> console.log(er))

        setBlockchainData(_blockchainData)
    }

}