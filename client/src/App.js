import { ethers } from 'ethers';
import {Button, Box, Heading} from '@chakra-ui/react';
import {useEffect, useState} from 'react';

import abi from './utils/WavePortal.json';

const contractAddress = "0x742dE00e591EdE1dc744356217ADAE4ab1B93403";

const getWaveContract = () => {
  const {ethereum} = window;

    if (!ethereum) {
      console.log('Etherium object does not exist!');
      return;
    }

    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, abi.abi, signer);
}

const checkIfWalletIsConnected = async (setCurrentAccount, setTotalWaves) => {
  try {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", ethereum);
    }

    /*
    * Check if we're authorized to access the user's wallet
    */
    const accounts = await ethereum.request({ method: 'eth_accounts' });

    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account)

      const wavePortalContract = getWaveContract();

      let count = await wavePortalContract.getTotalWaves();
      setTotalWaves(count.toNumber());
    } else {
      console.log("No authorized account found")
    }
  } catch (error) {
    console.log(error);
  }
}

const App = () => {
  const [totalWaves, setTotalWaves] = useState(0);
  const [isMining, setIsMining] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentAccount, setTotalWaves);
  }, [])

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const wave = async () => {
    try {
      const {ethereum} = window;

      if (!ethereum) {
        console.log('Etherium object does not exist!');
        return;
      }

      const wavePortalContract = getWaveContract()

      let count = await wavePortalContract.getTotalWaves();
      setTotalWaves(count.toNumber());

      // now actually wave
      const waveTxn = await wavePortalContract.wave();
      console.log("Mining...", waveTxn.hash);
      setIsMining(true);
      await waveTxn.wait();
      console.log(`Mined -- ${waveTxn.hash}`);
      setIsMining(false);

      count = await wavePortalContract.getTotalWaves();
      setTotalWaves(count.toNumber());
    } catch (error) {
      console.error(error);
    }
  }


  return (
    <Box className="App" display="flex" maxW="36rem" m="1rem auto" alignItems="center" flexDirection="column">
      {totalWaves ? <Heading mb="1rem">Total Waves: {totalWaves}</Heading> : null}
      {!currentAccount ?
        <Button colorScheme="purple" onClick={connectWallet}>Connect Wallet</Button>
      : <Button colorScheme="green" isLoading={isMining} loadingText="Mining..." onClick={wave}>Wave</Button>}
    </Box>
  );
}

export default App;
