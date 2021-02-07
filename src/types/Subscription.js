import { subscriptionType } from "@nexus/schema";
import user from "../modules/user/subscriptions";

const Subscription = subscriptionType({
  definition(t) {
    t.field("createdUser", user.createdUser);
  },
});

export default { Subscription };
