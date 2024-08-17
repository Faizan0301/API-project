const express = require("express");
const bodyParser = require('body-parser');
const db = require("./config/database");
const user_router = require("./routers/user.router");

const port = 8086;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.use(user_router);
app.listen(port, (err) => {
    if (!err) {
        db();
        console.log("server start at \nhttp://localhost:" + port);
    }
})