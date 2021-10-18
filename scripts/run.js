const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy({
        value: hre.ethers.utils.parseEther('0.1')
    });
    await waveContract.deployed();

    console.log(`Contract deployed to: ${waveContract.address}`);

    // Get Contract balance
    let contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(`Contract balance: ${hre.ethers.utils.formatEther(contractBalance)}`)

    let waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());

    // send wave
    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait();

    // Get contract balance again
    contractBalance = await hre.ethers.provider.getBalance(waveContract.address);
    console.log(`Contract balance: ${hre.ethers.utils.formatEther(contractBalance)}`)

    const [owner, randomPerson] = await hre.ethers.getSigners();

    waveTxn = await waveContract.connect(randomPerson).wave("Another message!");
    await waveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());

    const waves = await waveContract.getWaves();

    console.log('these are the waves', waves);
}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
}

runMain();