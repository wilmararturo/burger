const burger = require("../models/burger");
const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/burgers");
});

router.get("/burgers", (req, res) => {
    burger.all((data) => {
        const hbsObj = {
            burger_data: data,
        };
        res.render("index", hbsObj);
    });

});

router.post("/burgers/create", (req, res) => {
    burger.create(req.body.burger_name, (data) => {
        res.redirect("/");
    })

});

router.put("/burgers/:id", (req, res) => {
    burger.update(req.params.id, (data) => {
        res.sendStatus(200);
    })
});

router.get("*", (req, res) => {
    res.redirect("/burgers");
});


module.exports = router;