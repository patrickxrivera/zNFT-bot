import jwt from "jsonwebtoken";

const config = require("../config");

export const getUserId = (ctx) => {
  const Authorization = ctx.req.get("Authorization");

  if (Authorization) {
    const token = Authorization.replace("Bearer ", "");

    const verifiedToken = jwt.verify(token, config.appSecret);

    return verifiedToken && verifiedToken.userId;
  }
};
