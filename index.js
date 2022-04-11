const path = require("path");
const routes = require("./routes/routes");
const express = require('express');
const connectToDb = require("./database/db");
const { urlencoded } = require("express");

connectToDb();
const app = express();
const port = 3000;

app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());
app.use(routes)

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`)
);
