var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/devour", function (req, res) {
    console.log(req.body)
    burger.updateOne(req.body.burgerId, function (data) {
        console.log(data)
        res.json(data)

    })

})
router.post("/insertBurger", function (req, res) {
    console.log(req.body)
    burger.insertOne(req.body.burgerAdded, function (data) {
        console.log(data)
        res.json(data)

    })

})















module.exports = router;

