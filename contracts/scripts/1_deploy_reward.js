const hre = require("hardhat");

async function main() {

  const Reward = await hre.ethers.getContractFactory("Reward");
  const reward = await Reward.deploy();

  await reward.deployed();

  console.log("Reward deployed to:", reward.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // 0x97F7BB30AFD27b0cc116491c71378678aC9cafC4