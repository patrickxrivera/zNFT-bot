import models from "../setup/models";
import BlockProcessorService from "../services/BlockProcessor";
import EthereumService from "../services/Ethereum";

const run = async () => {
  const blockNumber = await EthereumService.getCurrentBlockNumber();

  await BlockProcessorService.processBlock(blockNumber);

  await models.block.create({
    data: {
      number: blockNumber,
      processedAt: new Date(),
    },
  });

  console.log("Done!");

  process.exit();
};

run();
