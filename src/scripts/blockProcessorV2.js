require("dotenv").config();

import BlockProcessorService from "../services/BlockProcessor";

const run = async () => {
  const BLOCK_NUMBER = 11775062;
  await BlockProcessorService.processBlock(BLOCK_NUMBER);
  process.exit();
};

run();
