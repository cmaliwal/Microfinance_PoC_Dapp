var SafeMath = artifacts.require("./SafeMath.sol");
var MFI = artifacts.require("./MFI.sol");

module.exports = function(deployer) {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, MFI);
  deployer.deploy(MFI);
};
