import models from "../setup/models";

class BlockService {
  static async getLastSavedBlockNumber() {
    const lastProcessedBlock = await models.block.findFirst({
      orderBy: { createdAt: "desc" },
    });

    return lastProcessedBlock.number;
  }

  static async createBlock(number) {
    return models.block.create({
      data: { number },
    });
  }

  static async markAsProcessed(number) {
    return models.block.update({
      where: { number },
      data: { processedAt: new Date() },
    });
  }
}

export default BlockService;
