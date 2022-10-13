const { expect } = require("chai");
const { ethers } = require("hardhat");

// test: max supply, max amount per account, mint, burn.

describe("Future token", function () {
  
  let Future;
  let future;
  let owner;
  let addr1;

  beforeEach(async function () {
    // contract deployment and accounts.
    Future = await ethers.getContractFactory("Future");
    [owner, addr1] = await ethers.getSigners();
    future = await Future.deploy(2000,300);
    await future.deployed();
  });

  describe("deployment", function(){
    it("Should assign the total supply of tokens to the owner", async function () {
      const ownerBalance = await future.balanceOf(owner.address);
      expect(await future.totalSupply()).to.equal(ownerBalance);
    });
  })

  describe("Transactions", function () {

    it("should mint", async function(){
      await future.mint(owner.address,ethers.BigNumber.from(`${100*Math.pow(10,18)}`));
      const ownerBalance = await future.balanceOf(owner.address);
      expect(ethers.BigNumber.from(`${200*Math.pow(10,18)}`)).to.equal(ownerBalance);
    } )

    it("should burn", async function(){
      await future.burn(ethers.BigNumber.from(`${100*Math.pow(10,18)}`));
      const ownerBalance = await future.balanceOf(owner.address);
      expect(0).to.equal(ownerBalance);
    } )
  })

  // describe("should fail", function(){

  //   it("shouldn't exceed max supply", async function(){
  //     await future.mint(owner.address,ethers.utils.parseEther("1000"));
  //     const ownerBalance = await future.balanceOf(owner.address);
  //     expect(ethers.utils.parseEther("1100")).to.equal(ownerBalance);
  //   } )

  //   it("shouldn't exceed maximum of tokens per account", async function(){
  //     await future.mint(owner.address,ethers.utils.parseEther("1000"));
  //     const ownerBalance = await future.balanceOf(owner.address);
  //     expect(ethers.utils.parseEther("1100")).to.equal(ownerBalance);
  //   } )

  // } )
});
