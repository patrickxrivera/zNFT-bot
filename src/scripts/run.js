import EthereumService from "../services/Ethereum";

const run = async () => {
  const res = await EthereumService.getCurrentBlockNumber();
  console.log(res);
  console.log("Done!");
  process.exit();
};

run();
