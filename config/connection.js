const mysql = require("mysql");
const dotenv = require("dotenv");

dotenv.config();

const connection = mysql.connection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.MYSQL_PASSWORD || "",
    database: "burgers_db",

})


connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;
