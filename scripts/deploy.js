async function main() {
  const Token = await ethers.getContractFactory("MFToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  console.log("MFToken deployed to:", token.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
