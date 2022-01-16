import path, { dirname } from "path";
import { fileURLToPath } from "url";

export const dbHost = process.env.DB_HOST;
export const dbName = process.env.DB_NAME;
export const dbPort = process.env.DB_PORT;
export const dbUser = process.env.DB_USER;
export const dbPass = process.env.DB_PASSWORD;

export const __dirname = dirname(fileURLToPath(import.meta.url));
export const html = path.join(__dirname, `views`, `index.html`);
