import { queryType } from "@nexus/schema";
import user from "../modules/user/queries";

const Query = queryType({
  definition(t) {
    t.field("me", user.me);
  },
});

export default { Query };
