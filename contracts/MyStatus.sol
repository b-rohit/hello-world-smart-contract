// SPDX-License-Identifier: Apache-2.0
pragma solidity >0.5.0;

contract MyStatus {
  string status;

  constructor() public {
    status = "Busy";
  }

  function getStatus() external view returns (string memory) {
      return status;
  }

  function setStatus(string calldata _status) external {
    status = _status;
  }
}
