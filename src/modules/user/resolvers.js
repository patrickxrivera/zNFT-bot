import { compare, hash } from "bcryptjs";
import models from "../../setup/models";
import { getUserId } from "../../utils";
import AuthService from "../../services/auth";
import { SUBSCRIPTION_TYPES } from "../../types/Subscription";

export const loginResolver = async (parent, { email, password }, ctx) => {
  const user = await models.user.findUnique({
    where: { email },
  });

  if (!user) {
    throw new Error(`No user found for email: ${email}`);
  }

  const isValidPassword = await compare(password, user.password);

  if (!isValidPassword) {
    throw new Error("Invalid password");
  }

  const userData = { userId: user.id };

  return {
    token: AuthService.generateJWT(userData),
    user,
  };
};

export const signUpResolver = async (parent, { email, password }, ctx) => {
  const hashedPassword = await hash(password, 10);

  const user = await models.user.create({
    data: {
      email,
      password: hashedPassword,
    },
  });

  const userData = { userId: user.id };

  ctx.pubsub.publish(SUBSCRIPTION_TYPES.CREATED_USER, {
    createdUser: user,
  });

  return {
    token: AuthService.generateJWT(userData),
    user,
  };
};

export const meResolver = (parent, args, ctx) => {
  const userId = getUserId(ctx);
  return models.user.findUnique({
    where: {
      id: userId,
    },
  });
};
