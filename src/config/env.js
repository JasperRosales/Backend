import { config } from "dotenv";
config({ path: `.env` });
export const { PORT, HOST, USER, DATA, ORIGIN, SECRET} = process.env;