/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { Reward, RewardInterface } from "../Reward";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040518060400160405280600681526020017f52657761726400000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f5257440000000000000000000000000000000000000000000000000000000000815250816003908051906020019062000096929190620001a6565b508060049080519060200190620000af929190620001a6565b505050620000d2620000c6620000d860201b60201c565b620000e060201b60201c565b620002bb565b600033905090565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b828054620001b49062000256565b90600052602060002090601f016020900481019282620001d8576000855562000224565b82601f10620001f357805160ff191683800117855562000224565b8280016001018555821562000224579182015b828111156200022357825182559160200191906001019062000206565b5b50905062000233919062000237565b5090565b5b808211156200025257600081600090555060010162000238565b5090565b600060028204905060018216806200026f57607f821691505b602082108114156200028657620002856200028c565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b61180f80620002cb6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806370a0823111610097578063a457c2d711610066578063a457c2d714610276578063a9059cbb146102a6578063dd62ed3e146102d6578063f2fde38b14610306576100f5565b806370a0823114610200578063715018a6146102305780638da5cb5b1461023a57806395d89b4114610258576100f5565b806323b872dd116100d357806323b872dd14610166578063313ce5671461019657806339509351146101b457806340c10f19146101e4576100f5565b806306fdde03146100fa578063095ea7b31461011857806318160ddd14610148575b600080fd5b610102610322565b60405161010f91906111d4565b60405180910390f35b610132600480360381019061012d9190610f8f565b6103b4565b60405161013f91906111b9565b60405180910390f35b6101506103d7565b60405161015d9190611336565b60405180910390f35b610180600480360381019061017b9190610f40565b6103e1565b60405161018d91906111b9565b60405180910390f35b61019e610410565b6040516101ab9190611351565b60405180910390f35b6101ce60048036038101906101c99190610f8f565b610419565b6040516101db91906111b9565b60405180910390f35b6101fe60048036038101906101f99190610f8f565b610450565b005b61021a60048036038101906102159190610edb565b610466565b6040516102279190611336565b60405180910390f35b6102386104ae565b005b6102426104c2565b60405161024f919061119e565b60405180910390f35b6102606104ec565b60405161026d91906111d4565b60405180910390f35b610290600480360381019061028b9190610f8f565b61057e565b60405161029d91906111b9565b60405180910390f35b6102c060048036038101906102bb9190610f8f565b6105f5565b6040516102cd91906111b9565b60405180910390f35b6102f060048036038101906102eb9190610f04565b610618565b6040516102fd9190611336565b60405180910390f35b610320600480360381019061031b9190610edb565b61069f565b005b60606003805461033190611466565b80601f016020809104026020016040519081016040528092919081815260200182805461035d90611466565b80156103aa5780601f1061037f576101008083540402835291602001916103aa565b820191906000526020600020905b81548152906001019060200180831161038d57829003601f168201915b5050505050905090565b6000806103bf610723565b90506103cc81858561072b565b600191505092915050565b6000600254905090565b6000806103ec610723565b90506103f98582856108f6565b610404858585610982565b60019150509392505050565b60006012905090565b600080610424610723565b90506104458185856104368589610618565b6104409190611388565b61072b565b600191505092915050565b610458610c03565b6104628282610c81565b5050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6104b6610c03565b6104c06000610de1565b565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060600480546104fb90611466565b80601f016020809104026020016040519081016040528092919081815260200182805461052790611466565b80156105745780601f1061054957610100808354040283529160200191610574565b820191906000526020600020905b81548152906001019060200180831161055757829003601f168201915b5050505050905090565b600080610589610723565b905060006105978286610618565b9050838110156105dc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d3906112f6565b60405180910390fd5b6105e9828686840361072b565b60019250505092915050565b600080610600610723565b905061060d818585610982565b600191505092915050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b6106a7610c03565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610717576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070e90611216565b60405180910390fd5b61072081610de1565b50565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561079b576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610792906112d6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16141561080b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161080290611236565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040516108e99190611336565b60405180910390a3505050565b60006109028484610618565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461097c578181101561096e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161096590611256565b60405180910390fd5b61097b848484840361072b565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614156109f2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109e9906112b6565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610a62576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a59906111f6565b60405180910390fd5b610a6d838383610ea7565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015610af3576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610aea90611276565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b869190611388565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610bea9190611336565b60405180910390a3610bfd848484610eac565b50505050565b610c0b610723565b73ffffffffffffffffffffffffffffffffffffffff16610c296104c2565b73ffffffffffffffffffffffffffffffffffffffff1614610c7f576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c7690611296565b60405180910390fd5b565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610cf1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ce890611316565b60405180910390fd5b610cfd60008383610ea7565b8060026000828254610d0f9190611388565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610d649190611388565b925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051610dc99190611336565b60405180910390a3610ddd60008383610eac565b5050565b6000600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b505050565b505050565b600081359050610ec0816117ab565b92915050565b600081359050610ed5816117c2565b92915050565b600060208284031215610eed57600080fd5b6000610efb84828501610eb1565b91505092915050565b60008060408385031215610f1757600080fd5b6000610f2585828601610eb1565b9250506020610f3685828601610eb1565b9150509250929050565b600080600060608486031215610f5557600080fd5b6000610f6386828701610eb1565b9350506020610f7486828701610eb1565b9250506040610f8586828701610ec6565b9150509250925092565b60008060408385031215610fa257600080fd5b6000610fb085828601610eb1565b9250506020610fc185828601610ec6565b9150509250929050565b610fd4816113de565b82525050565b610fe3816113f0565b82525050565b6000610ff48261136c565b610ffe8185611377565b935061100e818560208601611433565b611017816114f6565b840191505092915050565b600061102f602383611377565b915061103a82611507565b604082019050919050565b6000611052602683611377565b915061105d82611556565b604082019050919050565b6000611075602283611377565b9150611080826115a5565b604082019050919050565b6000611098601d83611377565b91506110a3826115f4565b602082019050919050565b60006110bb602683611377565b91506110c68261161d565b604082019050919050565b60006110de602083611377565b91506110e98261166c565b602082019050919050565b6000611101602583611377565b915061110c82611695565b604082019050919050565b6000611124602483611377565b915061112f826116e4565b604082019050919050565b6000611147602583611377565b915061115282611733565b604082019050919050565b600061116a601f83611377565b915061117582611782565b602082019050919050565b6111898161141c565b82525050565b61119881611426565b82525050565b60006020820190506111b36000830184610fcb565b92915050565b60006020820190506111ce6000830184610fda565b92915050565b600060208201905081810360008301526111ee8184610fe9565b905092915050565b6000602082019050818103600083015261120f81611022565b9050919050565b6000602082019050818103600083015261122f81611045565b9050919050565b6000602082019050818103600083015261124f81611068565b9050919050565b6000602082019050818103600083015261126f8161108b565b9050919050565b6000602082019050818103600083015261128f816110ae565b9050919050565b600060208201905081810360008301526112af816110d1565b9050919050565b600060208201905081810360008301526112cf816110f4565b9050919050565b600060208201905081810360008301526112ef81611117565b9050919050565b6000602082019050818103600083015261130f8161113a565b9050919050565b6000602082019050818103600083015261132f8161115d565b9050919050565b600060208201905061134b6000830184611180565b92915050565b6000602082019050611366600083018461118f565b92915050565b600081519050919050565b600082825260208201905092915050565b60006113938261141c565b915061139e8361141c565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156113d3576113d2611498565b5b828201905092915050565b60006113e9826113fc565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b600060ff82169050919050565b60005b83811015611451578082015181840152602081019050611436565b83811115611460576000848401525b50505050565b6000600282049050600182168061147e57607f821691505b60208210811415611492576114916114c7565b5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000601f19601f8301169050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6117b4816113de565b81146117bf57600080fd5b50565b6117cb8161141c565b81146117d657600080fd5b5056fea2646970667358221220cac17736d8472741594279ca8967cbf379ff7e99bc08bf7fc4ff9150324c381864736f6c63430008040033";

type RewardConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RewardConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Reward__factory extends ContractFactory {
  constructor(...args: RewardConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Reward> {
    return super.deploy(overrides || {}) as Promise<Reward>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): Reward {
    return super.attach(address) as Reward;
  }
  override connect(signer: Signer): Reward__factory {
    return super.connect(signer) as Reward__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardInterface {
    return new utils.Interface(_abi) as RewardInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Reward {
    return new Contract(address, _abi, signerOrProvider) as Reward;
  }
}
