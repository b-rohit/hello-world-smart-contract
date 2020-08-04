var MyStatus = artifacts.require("MyStatus");

contract('MyStatus', function (accounts) {
  it("should return the current status", function () {
    return MyStatus.deployed().then(function (instance) {
      return instance.getStatus.call();
    }).then(function (status) {
      //console.log(firmware);
      assert.equal(status.valueOf(), 'Busy', "Current status is incorrect");
    });
  });

  it("should change current status", function () {
    return MyStatus.deployed().then(function (instance) {
      return instance.setStatus('Available');
    }).then(function (tx) {
      //console.log(tx)
      assert.equal(tx.receipt.status, true, "status wasn't changed successfully");
    });
  });
});
