import { Pool } from "pg";
import fs from "fs";
import "dotenv/config.js";

const initSql = fs.readFileSync("./data/mydatabase.sql", "utf8");
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
});

pool.on("connect", () => {
    console.log("Connected to the database!");
});

await pool.query(initSql);

export default pool;
