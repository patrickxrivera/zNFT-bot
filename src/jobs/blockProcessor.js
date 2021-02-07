import BlockProcessorService from "../services/BlockProcessor";
import { signalJobCompletion } from "../utils";

(async () => {
  try {
    await BlockProcessorService.processIncomingBlocks();
  } catch (e) {
    // TODO: log error
    console.error(e);
  }

  console.log("Finished processing incoming blocks");

  signalJobCompletion();
})();
