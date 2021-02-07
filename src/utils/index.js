const { parentPort } = require("worker_threads");

export const signalJobCompletion = () => {
  parentPort ? parentPort.postMessage("done") : process.exit(0);
};
