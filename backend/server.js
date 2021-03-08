require("dotenv/config")
const express = require("express");
const app = express();
const cors = require("cors")
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", async(req, res) => {
    try {
        const { rows } = await pool.query('SELECT "First Name" FROM "People"');
        res.send(rows);
    } catch (err) {
        res.status(400).send(err);
    }
});

app.listen(3000, () => {
    console.log("Server has started on port 3000!");
});