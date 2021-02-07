import EthereumService from "../services/Ethereum";
import BlockProcessorService from "../services/BlockProcessor";

const run = async () => {
  const res = await BlockProcessorService.processBlock(11811761);
  console.log(res);
  console.log("Done!");
  process.exit();
};

run();
