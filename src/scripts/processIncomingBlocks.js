require("dotenv").config();

import BlockProcessorService from "../services/BlockProcessor";
import EthereumService from "../services/Ethereum";

const run = async () => {
  await BlockProcessorService.processIncomingBlocks();

  console.log("Done!");

  process.exit();
};

run();
