// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    event NewWave(address indexed from, string message, uint timestamp);

    struct Wave {
        address waver;
        string message;
        uint timestamp;
    }

    uint totalWaves;
    Wave[] waves;

    constructor() {
        console.log("Spinning up WavePortal smart contract");
    }

    function wave(string memory _message) public {
        totalWaves += 1;
        console.log("%s waved at you.", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));
        emit NewWave(msg.sender, _message, block.timestamp);
    }

    function getTotalWaves() public view returns (uint) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }

    function getWaves() public view returns (Wave[] memory) {
        return waves;
    }
}