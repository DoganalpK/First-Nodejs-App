const mysql = require("mysql2");
const config = require("../config");

let connection = mysql.createConnection(config.db);

connection.connect((err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("connected to db");
    }
});

module.exports = connection.promise();