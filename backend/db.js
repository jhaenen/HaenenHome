const Pool = require("pg").Pool;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: "postgres",
    port: 5432,
    database: process.env.DB_NAME
});

module.exports = pool;