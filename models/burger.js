var orm = require("../config/orm.js");
var burger = {
    selectAll: function (callBack) {
        orm.selectAll("burgers", function (results) {
            callBack(results)

        })

    },
    updateOne: function (burgerId, callBack) {
        orm.updateOne("burgers", burgerId, function (results) {
            callBack(results)

        })

    },
    insertOne: function (burgerName, callBack) {
        orm.insertOne("burgers", burgerName, function (results) {
            callBack(results)

        })
    }

}









module.exports = burger;
