const orm = require("../config/orm");

const burber = {
    all: function (cb) {
        orm.selectAll("burgers", (res) => {
            cb(res);
        })
    },
    create: function (name, cb) {
        orm.insertOne("burgers", "burger_name", "devoured", name, false, (res) => {
            cb(res);
        })
    },
    update: function (colValuesObj, condition, cb) {
        orm.updateOne("burgers", colValuesObj, condition, (res) => {
            cb(res);
        })
    },
}