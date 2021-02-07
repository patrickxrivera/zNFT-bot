import models from "../setup/models";

class TokenService {
  static async save({ transactionHash, ownerAddress, tokenId }) {
    return models.token.create({
      data: {
        transactionHash,
        ownerAddress,
        tokenId,
      },
    });
  }
}

export default TokenService;
