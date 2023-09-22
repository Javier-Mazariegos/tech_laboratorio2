const { ethers } = require("hardhat");

async function main() {
  //JAV
  console.log("Deploying JAV Contract...");
  const JAVFactory = await ethers.getContractFactory("JAV");
  const jav = await JAVFactory.deploy();

  console.log("Deployed JAV:", jav.address);

  //JAVICO
  console.log("Deploying javICO Contract...");
  const JavICOFactory = await ethers.getContractFactory("JavICO");
  const javICO = await JavICOFactory.deploy(
    "0x0d8bc74A757241267ec39e1481D1c663aCc18027",
    jav.address
  );

  console.log("Deployed javICO:", javICO.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
