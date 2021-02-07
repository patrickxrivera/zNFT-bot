import Web3 from "web3";
import Web3Eth from "web3-eth";
import ABIDecoder from "abi-decoder";
import _ from "lodash";
import Ethereum from "../services/Ethereum";

const ZORA_MEDIA_CONTRACT_ADDRESS = "0xabEFBc9fD2F806065b4f3C237d4b59D9A97Bcac7";

const TOPICS = {
  // this is the sha3 hash of the function signature for the Media contract's Transfer event
  ZORA_TRANSFER_EVENT: "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
};

const eth = new Web3Eth(
  new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/5ef0bc8d84b1465eabb17016000887a9")
);

const run = async () => {
  const BLOCK_NUMBER = 11775062;
  const block = await Ethereum.getBlock(BLOCK_NUMBER);

  //   TODO: figure out how to use logsBloom to determine whether this block contains an event we care about
  //   decode logsBloom
  //   check if it contains a Transfer event topic from the Media smart contract
  //   if it does, parse this block

  const transactionHashes = block.transactions.map(({ hash }) => hash);

  for (const transactionHash of transactionHashes) {
    const includeTransactions = true;

    const transactionReceipt = await eth.getTransactionReceipt(
      transactionHash,
      includeTransactions
    );

    const { logs } = transactionReceipt;

    if (
      logs.length > 0 &&
      logs[0].address === ZORA_MEDIA_CONTRACT_ADDRESS &&
      logs[0].topics[0] === TOPICS.ZORA_TRANSFER_EVENT
    ) {
      const { topics } = logs[0];

      const toAddress = eth.abi.decodeParameter("address", topics[2]);
      const tokenId = eth.abi.decodeParameter("uint256", topics[3]);

      console.log({ toAddress, tokenId });

      // persist in DB and search index
    }

    console.log("processed tx hash");
  }

  console.log("done!");
};

run();
