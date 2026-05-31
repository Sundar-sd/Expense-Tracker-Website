import dotenv from "dotenv";
import pkg, { Pool } from "pg";

dotenv.config();

const { types } = pkg;

types.setTypeParser(1082, (val) => val);
 
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {rejectUnauthorized: false},
});

pool.on("connect", () => {
    console.log("connected to postgress");
});

pool.on("error", (err) => {
    console.error("error",err);
    process.exit(-1);
});

export default pool;