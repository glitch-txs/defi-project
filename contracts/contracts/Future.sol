// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Future is ERC20, ERC20Burnable {
//token with a maximum supply, only a certain amount of tokens can be minted per account.

    uint256 public immutable maxSupply;
    // max amount of minted tokens per address:
    uint256 public immutable maxAddress;
    mapping(address => uint256) public minted;

    constructor(uint256 maxSupply_, uint256 maxAddress_) ERC20("Future", "FT") {
        maxSupply = maxSupply_ * 10 ** decimals();
        maxAddress = maxAddress_ * 10 ** decimals();
        _mint(msg.sender, 100 * 10 ** decimals());
    }

    //Must add " * 10^18 " to the front-end dapp to the amount variable. 
    function mint(address to, uint256 amount) public {

        require(minted[msg.sender] + amount <= maxAddress,"Error: exceeds the max amount per account");
        uint256 totalSup_ = totalSupply();
        require(totalSup_ + amount <= maxSupply, "Error: Maximum Supply Reached");
        
        
        minted[msg.sender] += amount;
       
        _mint(to, amount);
    }
}