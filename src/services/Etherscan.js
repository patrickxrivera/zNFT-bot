import axios from "axios";
import queryString from "query-string";
import { etherscanAPIKey } from "../config";
import { ZORA_MEDIA_CONTRACT_ADDRESS, TOPICS } from "../constants";

const ETHERSCAN_API_BASE_URL = "https://api.etherscan.io/api";

class EtherscanService {
  static async getTransferLogsForBlock(blockNumber) {
    return EtherscanService.getLogsForBlock({
      blockNumber,
      logAddress: ZORA_MEDIA_CONTRACT_ADDRESS,
      topic: TOPICS.ZORA_TRANSFER_EVENT,
    });
  }

  static async getLogsForBlock({ blockNumber, logAddress, topic }) {
    const params = {
      module: "logs",
      action: "getLogs",
      fromBlock: blockNumber,
      toBlock: blockNumber,
      address: logAddress,
      topic0: topic,
      apikey: etherscanAPIKey,
    };

    const url = `${ETHERSCAN_API_BASE_URL}?${queryString.stringify(params)}`;

    try {
      const res = await axios.get(url);

      if (res?.data?.result?.length > 0) {
        return res.data.result;
      }

      console.log(`No logs for block #${blockNumber}`);

      return null;
    } catch (err) {
      // TODO: log dis
      console.log(err);
      return null;
    }
  }
}

export default EtherscanService;
