const hre = require("hardhat");

async function main() {
  const SeaToken = await hre.ethers.getContractFactory("SeaToken");
  const seaToken = await SeaToken.deploy(100000000, 50);

  await seaToken.deployed();

  console.log("Sea Token deployed: ", seaToken.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
