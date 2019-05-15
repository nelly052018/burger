var connection = require("../config/connection.js");
var orm = {
    selectAll: function (tableInput, callBack) {
        var queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });


    },
    updateOne: function (tableInput, burgerId, callBack) {
        var queryString = "UPDATE " + tableInput + " SET devoured= true WHERE id=" + burgerId + ";";
        console.log(queryString)
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    },
    insertOne: function (tableInput, burgerName, callBack) {
        //INSERT INTO burgers (burger_name, devoured) VALUES ("veggie burger", false);
        var queryString = "INSERT INTO " + tableInput + "(burger_name, devoured) VALUES ('" + burgerName + "',false) ;";
        console.log("line 27 in orm.js", queryString)
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            callBack(result);
        });
    }

}













module.exports = orm;
