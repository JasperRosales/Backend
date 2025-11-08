import { config } from "dotenv";
config({ path: `.env` });
export const { PORT, HOST, USER, DATA } = process.env;