var SimpleLottery = artifacts.require("SimpleLottery");
var duration = 3600 * 24 * 3;

module.exports = (deployer) => {
  deployer.deploy(SimpleLottery, duration);
};
