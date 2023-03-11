import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Voting", function () {
  async function deployOneYearLockFixture() {
    const [owner, otherAccount] = await ethers.getSigners();

    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.addToWhitelist(123, owner.address);

    return { voting, owner, otherAccount };
  }

  describe("Basic tests", function () {
    it("Check MongoDB id", async function () {
      const { voting, owner } = await loadFixture(deployOneYearLockFixture);

      await expect(voting.createPoll("0x" + "507f1f77bcf86cd799439011"))
        .to.emit(voting, 'PollCreated')
        .withArgs("0x" + "507f1f77bcf86cd799439011");
    });
  });
});
