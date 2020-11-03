const connection = require("./connection.js");

const burgerTable = "burgers";

const orm = {

    selectAll: (cb) => {
        const query = `SELECT * FROM ${burgerTable};`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            return cb(res);
        });
    },
    insertOne: (burgerName, cb) => {
        const query = `INSERT INTO ${burgerTable} (burger_name,devoured) VALUES (?,?);`;

    },
    updateOne: () => { },


}

module.exports = orm;