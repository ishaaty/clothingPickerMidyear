const db = require("./db_connection");

/**** Read the sample items inserted ****/

const read_stuff_table_sql = "SELECT * FROM colors";

db.execute(read_stuff_table_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'colors' initialized with:")
        console.log(results);
    }
);

db.end();
