const hre = require("hardhat");

async function main() {

  const StakeFuture = await hre.ethers.getContractFactory("StakeFuture");
  const stakeFuture = await StakeFuture.deploy('0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264','0x97F7BB30AFD27b0cc116491c71378678aC9cafC4');

  await stakeFuture.deployed();

  console.log("StakeFT deployed to:", stakeFuture.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // npx hardhat run scripts/2_deploy_staking.js --network goerli  

  // npx hardhat verify --network goerli 0x6D278724fC4d2580f9f68f074304d52B5e33aCB3 '0x1fe84fE4e1ae96F9b202188f7a6835dB3D27a264' '0x97F7BB30AFD27b0cc116491c71378678aC9cafC4'

  // 0x6D278724fC4d2580f9f68f074304d52B5e33aCB3