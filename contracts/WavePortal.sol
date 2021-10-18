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
    uint private seed;
    Wave[] waves;
    mapping(address => uint) public lastWavedAt;

    constructor() payable {
        console.log("Spinning up WavePortal smart contract");
    }

    function wave(string memory _message) public {
        require(lastWavedAt[msg.sender] + 15 minutes < block.timestamp, "Please wait 15 minutes");
        lastWavedAt[msg.sender] = block.timestamp;

        totalWaves += 1;
        console.log("%s waved at you.", msg.sender);

        waves.push(Wave(msg.sender, _message, block.timestamp));

        uint randomNumber = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Random # generated: %s", randomNumber);

        seed = randomNumber;

        // Given a 10% chance that the user wins the prize
        if (randomNumber < 10) {
            console.log("%s won!", msg.sender);

            uint prizeAmount = 0.0001 ether;
            require(prizeAmount <= address(this).balance,
                "Trying to withdraw more money than the contract has."
            );

            (bool success, ) = (msg.sender).call{value: prizeAmount}("");
            require(success, "Failed to withdraw money from contract.");
        }

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