import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Voting", function () {
  async function deployOneYearLockFixture() {
    const [owner, other] = await ethers.getSigners();

    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.addToWhitelist(123, owner.address);
    await voting.addToWhitelist(124, other.address);

    return { voting, owner, other };
  }

  it("Unable to vote in nonexistent poll", async function () {
    const { voting, owner, other } = await loadFixture(deployOneYearLockFixture);

    let yes = true;
    await expect(voting.connect(other).vote(0, yes))
      .to.be.revertedWith("Poll isn't active");
  });
});
