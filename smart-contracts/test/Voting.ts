import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Voting", function () {
  async function deployVotingFixture() {
    const [owner, other] = await ethers.getSigners();

    const Voting = await ethers.getContractFactory("Voting");
    const voting = await Voting.deploy();
    await voting.addToWhitelist(123, owner.address);
    await voting.addToWhitelist(124, other.address);

    return { voting, owner, other };
  }

  it("Unable to vote in nonexistent poll", async function () {
    const { voting, owner, other } = await loadFixture(deployVotingFixture);

    let yes = true;
    await expect(voting.connect(other).vote(0, yes))
      .to.be.revertedWith("Poll isn't active");
  });

  it("Create poll", async function() {
    const { voting, owner, other } = await loadFixture(deployVotingFixture);

    let pollId = 0;
    let name = "name";
    let description = "description";
    await voting.connect(other).createPoll(name, description);
    expect(await voting.getDateCreated(pollId)).to.eq(await time.latest());
    expect(await voting.getName(pollId)).to.eq(name);
    expect(await voting.getDescription(pollId)).to.eq(description);
    expect(await voting.pollIsActive(pollId)).to.eq(true);
    expect(await voting.getVoteYes(pollId)).to.eq(0);
    expect(await voting.getVoteNo(pollId)).to.eq(0);
    expect(await voting.TIME_LIMIT()).to.eq(7 * 24 * 60 * 60);
    expect(await voting.pollCounter()).to.eq(1);
  });

  it("Vote yes in a poll", async function() {
    const { voting, owner, other } = await loadFixture(deployVotingFixture);

    let pollId = 0;
    let name = "name";
    let description = "description";
    await voting.createPoll(name, description);
    await voting.connect(other).vote(pollId, true);
    expect(await voting.getVoteYes(pollId)).to.eq(1);
    expect(await voting.haveVoted(pollId, other.address)).to.eq(true);
    expect(await voting.haveVoted(pollId, owner.address)).to.eq(false);
  });

  it("Poll expires", async function() {
    const { voting, owner, other } = await loadFixture(deployVotingFixture);

    let pollId = 0;
    let name = "name";
    let description = "description";
    await voting.connect(other).createPoll(name, description);
    
    await time.increase(await voting.TIME_LIMIT());
    
    expect(await voting.pollIsActive(pollId)).to.eq(false);
  });

  it("Poll doesn't expire", async function() {
    const { voting, owner, other } = await loadFixture(deployVotingFixture);

    let pollId = 0;
    let name = "name";
    let description = "description";
    await voting.connect(other).createPoll(name, description);
    
    await time.increase((await voting.TIME_LIMIT()).sub(1));
    
    expect(await voting.pollIsActive(pollId)).to.eq(true);
  });
  
});
