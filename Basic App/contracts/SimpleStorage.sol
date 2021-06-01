// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <0.7.0;

contract SimpleStorage {
  uint storedData;

  function setData(uint x) public {
    storedData = x;
  }

  function getData() public view returns (uint) {
    return storedData;
  }
}
