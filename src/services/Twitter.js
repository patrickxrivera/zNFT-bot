import Twit from "twit";
import {
  twitterConsumerKey,
  twitterConsumerSecret,
  twitterAccessToken,
  twitterAccessTokenSecret,
} from "../config";
import { getNameFromMetadataURI } from "../utils";

const client = new Twit({
  consumer_key: twitterConsumerKey,
  consumer_secret: twitterConsumerSecret,
  access_token: twitterAccessToken,
  access_token_secret: twitterAccessTokenSecret,
  timeout_ms: 60 * 1000, // 60 seconds
});

class TwitterService {
  static async sendTweet({ id, metadataURI }) {
    const name = await getNameFromMetadataURI(metadataURI);

    return client.post("statuses/update", {
      status: `zNFT #${id}: "${name}"\n\n🌜🌞🌛`,
    });
  }
}

export default TwitterService;
