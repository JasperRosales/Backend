import jwt from "jsonwebtoken";
import {SECRET} from "../config/env.js";

const JWT_SECRET = SECRET || "supersecretkey";

export const JWT = {
  sign(payload, expiresIn = "1h") {
    return jwt.sign(payload, JWT_SECRET, { expiresIn });
  },

  verify(token) {
    try {
      const payload = jwt.verify(token, JWT_SECRET);
      return { valid: true, payload };
    } catch (err) {
      return { valid: false, payload: null };
    }
  },
};