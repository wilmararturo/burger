const orm = require("../config/orm");

const burger = {
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
    update: function (id, cb) {
        const condition = `id=${id}`;
        const colValuesObj = { devoured: true };
        orm.updateOne("burgers", colValuesObj, condition, (res) => {
            cb(res);
        })
    },
}

module.exports = burger;