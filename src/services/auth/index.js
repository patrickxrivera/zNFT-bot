import jwt from "jsonwebtoken";
import config from "../../config";

class AuthService {
  static generateJWT(data) {
    return jwt.sign(data, config.appSecret);
  }
}

export default AuthService;
