const burger = require("../models/burger");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/burgets");
});

router.get("/burgers", (req, res) => {
    burger.all((data) => {
        const hbsObj = {
            burgers: data,
        };
        res.render("index", hbsObj);
    })
        .catch(err => res.json(err.message));

});

router.post("/burgers/create", (req, res) => {
    burger.create(res.body.burger_name, (data) => {
        res.redirect("/");
    })

});

router.put("/burgers/:id", (req, res) => {
    burger.update(res.params.id, (data) => {
        res.sendStatus(200);
    })
});

module.exports = router;