import Web3 from "web3";
import Web3Eth from "web3-eth";
import { infuraProviderId } from "../config";

const eth = new Web3Eth(
  new Web3.providers.HttpProvider(`https://mainnet.infura.io/v3/${infuraProviderId}`)
);

class EthereumService {
  static async getCurrentBlockNumber() {
    return eth.getBlockNumber();
  }

  static async blockHasBeenMined(blockNumber) {
    const block = await eth.getBlock(blockNumber);
    return !!block;
  }

  static decodeAddress(topic) {
    return eth.abi.decodeParameter("address", topic);
  }

  static decodeInt(topic) {
    return eth.abi.decodeParameter("uint256", topic);
  }
}

export default EthereumService;
