const db = require("./db_connection");

stuff = db.execute("select * from colors");

console.log(stuff);

db.end();