import { mutationType } from "@nexus/schema";
import user from "../modules/user/mutations";

const Mutation = mutationType({
  definition(t) {
    t.field("signUp", user.signUp);
    t.field("login", user.login);
  },
});

export default { Mutation };
