const { expect } = require("chai");

describe("MFToken", function () {
  it("should allow approve and transferFrom", async function () {
    const [owner, spender] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MFToken");
    const token = await Token.deploy();
    await token.waitForDeployment();

    await token.approve(spender.address, 1000);
    await token.connect(spender).transferFrom(owner.address, spender.address, 500);

    const balance = await token.balanceOf(spender.address);
    expect(balance).to.equal(500);
  });
});
