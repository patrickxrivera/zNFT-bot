import { SUBSCRIPTION_TYPES } from "../../types/Subscription";

const createdUser = {
  type: "User",
  subscribe: (parent, args, ctx) => ctx.pubsub.asyncIterator(SUBSCRIPTION_TYPES.CREATED_USER),
};

export default {
  createdUser,
};
