import axios from "axios";
import { MEDIA_BY_ID_QUERY } from "../constants/queries";
import { ZORA_SUBGRAPH_URL } from "../constants";

class TheGraphService {
  static async getMediaById(mediaId) {
    const res = await axios.post(ZORA_SUBGRAPH_URL, {
      query: MEDIA_BY_ID_QUERY(mediaId),
    });

    return res.data.data.media;
  }
}

export default TheGraphService;
