var mysql = require("mysql");
var connection;

// process.env.JAWSDB_URL lets us plug in your connection details with just one object property. Since the JawsDB provision, Heroku saved the connection info in an environmental variable.
if (process.env.JAWSDB_URL) {
    // If the server contains the JAWSDB_URL environmental variable, it connects to the JawsDB database.
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    // If the server lacks the variable, it falls back on an explicitly defined local database.
    connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "password",
        database: "burgers_db"
    });
};

// Make connection.
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
