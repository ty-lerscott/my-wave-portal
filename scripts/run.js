const main = async () => {
    const waveContractFactory = await hre.ethers.getContractFactory('WavePortal');
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log(`Contract deployed to: ${waveContract.address}`);

    let waveCount = await waveContract.getTotalWaves();
    console.log(waveCount.toNumber());

    let waveTxn = await waveContract.wave("A message!");
    await waveTxn.wait();

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