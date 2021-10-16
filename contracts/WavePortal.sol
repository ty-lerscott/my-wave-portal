// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint totalWaves;

    constructor() {
        console.log("Hello, love at first sight");
    }

    function wave() public {
        totalWaves += 1;
        console.log("%s waved at you.", msg.sender);
    }

    function getTotalWaves() public view returns (uint) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
}