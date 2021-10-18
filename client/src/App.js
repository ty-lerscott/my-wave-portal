import { ethers } from 'ethers';
import {useEffect, useState} from 'react';
import {Button, Box, Heading, Text, Link, Table, Thead, Tbody, Input, Tr, Th, Td, TableCaption} from '@chakra-ui/react';

import abi from './utils/WavePortal.json';

const contractAddress = "0x80e4CccF8347c3f46ab7773E4196e4EBee8F9D60";

const abbreviate = (str) => {
  let abbreviated;
  if (str >= 42) {
      abbreviated = `${str.substring(0,6)}...${str.substring(str.length - 4)}`
  } else {
      abbreviated = str;
  }

  return abbreviated;
}


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

const sortWaves = (waves) => {
  const wavesArr = [...waves];

  wavesArr.sort((a,b) => b.timestamp.toNumber() - a.timestamp.toNumber());

  return wavesArr;
}

const checkIfWalletIsConnected = async (setCurrentAccount, setWaves) => {
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

      let waves = await wavePortalContract.getWaves();

      setWaves(sortWaves(waves));

      wavePortalContract.on('NewWave', (from, message, timestamp) => {
        console.log('new wave', from, message, timestamp);
        setWaves(prevState => [{waver: from, message, timestamp}, ...prevState])
      })
    } else {
      console.log("No authorized account found")
    }
  } catch (error) {
    console.log(error);
  }
}

const App = () => {
  const [message, setMessage] = useState('');
  const [waves, setWaves] = useState([]);
  const [isMining, setIsMining] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("");

  useEffect(() => {
    checkIfWalletIsConnected(setCurrentAccount, setWaves);
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

      if (!ethereum || !message.length) {
        console.log('Etherium object does not exist!');
        return;
      }

      const wavePortalContract = getWaveContract()

      // now actually wave
      const waveTxn = await wavePortalContract.wave(message);
      console.log("Mining...", waveTxn.hash);
      setIsMining(true);
      await waveTxn.wait();
      console.log(`Mined -- ${waveTxn.hash}`);
      setIsMining(false);
      setMessage('');
    } catch (error) {
      console.error(error);
    }
  }

  const handleChange = (evt) => setMessage(evt.target.value);

  return (
    <Box className="App" display="flex" maxW="36rem" m="1rem auto" alignItems="center" flexDirection="column">
      <Text>Welcome,</Text>
      <Text>This site is powered by <Link href="https://reactjs.org/" target="_blank" color="green.500">React</Link>, <Link href="https://chakra-ui.com/" target="_blank" color="green.500">ChakraUI</Link> & smart contracts on the ethereum rinkeby blockchain</Text>
      {waves.length ? <Heading mb="1rem">Total Waves: {waves.length}</Heading> : null}
      {!currentAccount ?
        <Button colorScheme="purple" onClick={connectWallet}>Connect Wallet</Button>
      : (
        <Box display="flex" gridGap="1rem" mt="1rem">
          <Input placeholder="Message..." value={message} onChange={handleChange} />
          <Button colorScheme="green" isLoading={isMining} loadingText="Mining..." onClick={wave} disabled={!message.length}>Wave</Button>
        </Box>
      )}
      <Table mt="1rem">
        <TableCaption>Past Waves</TableCaption>
        <Thead>
          <Tr>
            <Th>Waver</Th>
            <Th>Timestamp</Th>
            <Th>Message</Th>
          </Tr>
        </Thead>
        <Tbody>
          {waves.map((wave, index) => (
            <Tr key={`${wave.waver}-${index}`}>
              <Td>{abbreviate(wave.waver)}</Td>
              <Td>{new Date(wave.timestamp * 1000).toString()}</Td>
              <Td>{wave.message}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}

export default App;
