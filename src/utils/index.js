import axios from "axios";

const { parentPort } = require("worker_threads");

export const signalJobCompletion = () => {
  parentPort ? parentPort.postMessage("done") : process.exit(0);
};

export const getNameFromMetadataURI = async (url) => {
  const res = await axios.get(url);

  return res.data.name;
};
