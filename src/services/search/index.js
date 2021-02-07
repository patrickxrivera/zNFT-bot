import algoliasearch from "algoliasearch";
import { algoliaAppId, algoliaApiKey, indexName } from "../../config";

class SearchService {
  static async saveObjects(objects) {
    const svc = new SearchService();
    return svc.saveObjects(objects);
  }

  static async search(searchTerm = "", options = {}) {
    const svc = new SearchService();
    return svc.search(searchTerm, options);
  }

  constructor() {
    this.client = algoliasearch(algoliaAppId, algoliaApiKey);
    this.index = this.client.initIndex(indexName);
  }

  async saveObjects(objects) {
    return this.index.saveObjects(objects, {
      autoGenerateObjectIDIfNotExist: true,
    });
  }

  async search(searchTerm = "", options = {}) {
    try {
      const res = await this.index.search(searchTerm, options);
      return res.hits;
    } catch (err) {
      // TODO: log error
      console.log(err);
      throw new Error(err.message);
    }
  }
}

export default SearchService;
