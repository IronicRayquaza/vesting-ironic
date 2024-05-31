const { ethers } = require("@nomicfoundation/hardhat-ignition/modules");

//const { ethers } = require("hardhat");

async function main() {
  // Deploy CustomToken
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy("VestingToken", "VST", 1000000);
  await token.waitForDeployment();
  console.log("CustomToken deployed to:", token.address);
  // Deploy TokenVestingVII
  const Vesting = await hre.ethers.getContractFactory("Vesting");
  const vesting = await Vesting.deploy(token.address);
  await vesting.waitForDeployment();
  console.log("Vesting deployed to:", vesting.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });