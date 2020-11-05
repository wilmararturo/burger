const connection = require("./connection.js");

const objToSql = (obj) => {
    const conditionArr = [];


    for (const key in obj) {
        let value = obj[key];

        if (Object.hasOwnProperty.call(obj, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            conditionArr.push(key + "=" + value);
        }
    }

    return conditionArr.toString();
}

const orm = {

    selectAll: (tableInput, cb) => {
        const query = `SELECT * FROM ${tableInput}`;
        connection.query(query, (err, res) => {
            if (err) throw err;
            return cb(res);
        });
    },
    insertOne: (tableInput, colOne, colTwo, valueOne, valueTwo, cb) => {
        const query = `INSERT INTO ${tableInput} (?,?) VALUES (?,?)`;
        connection.query(query, [colOne, colTwo, valueOne, valueTwo], (err, res) => {
            if (err) throw err;
            return cb(res);
        })

    },
    updateOne: (tableInput, colValuesObj, condition, cb) => {
        const queryCondition = objToSql(colValuesObj);
        const query = `UPDATE ${tableInput} SET ${queryCondition} WHERE ${condition}`
        connection.query(query, (err, res) => {
            if (err) throw err;
            cb(result);
        })
    },


}

module.exports = orm;