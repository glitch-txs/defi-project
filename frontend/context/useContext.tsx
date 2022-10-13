import { createContext, useState } from "react"
import { ethers } from "ethers"


type contextType = {
    chainId: number | null,
    setChainId: (chainId: number)=>void,
    account: string | null,
    setAccount: (account: string)=>void,
    provider:ethers.providers.Web3Provider | null,
    setProvider: (provider: ethers.providers.Web3Provider)=>void,
    signer: ethers.providers.JsonRpcSigner | null,
    setSigner: (provider: ethers.providers.JsonRpcSigner)=>void,
}


export const DeFiContext = createContext<contextType | null>(null);

interface Props {
    children: React.ReactNode;
}

const DeFiProvider: React.FC<Props> = ({ children }) => {

    const [chainId, setChainId] = useState<number | null>(null)
    const [account, setAccount] = useState<string | null>(null)
    const [signer, setSigner] = useState<ethers.providers.JsonRpcSigner | null>(null)
    const [provider, setProvider] = useState<ethers.providers.Web3Provider | null>(null)

    return (
        <div>
            <DeFiContext.Provider value={{ chainId, setChainId, account, setAccount, provider, setProvider, signer, setSigner }}>
                {children}
            </DeFiContext.Provider>
        </div>
    );
}

export default DeFiProvider;