import EthereumService from "./Ethereum";
import EtherscanService from "./Etherscan";

class BlockProcessorService {
  static async processIncomingBlocks() {}

  static async processBlock(blockNumber) {
    try {
      const logs = await EtherscanService.getTransferLogsForBlock(blockNumber);

      if (!logs) {
        return;
      }

      for (const log of logs) {
        const [_, __, encodedToAddress, encodedTokenId] = log.topics;

        const toAddress = EthereumService.decodeAddress(encodedToAddress);
        const tokenId = EthereumService.decodeInt(encodedTokenId);

        console.log({ toAddress, tokenId });
      }
    } catch (err) {
      console.log(err);
    }
  }
}

export default BlockProcessorService;
