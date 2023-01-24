const db = require("./db_connection");

/**** Read the sample items inserted ****/

const read_stuff_table_sql = "SELECT link, img_name, FROM colors where color_name like 'b%'";

db.execute(read_stuff_table_sql, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Table 'colors' initialized with:")
        console.log(results);
        console.log(results[0].color_name);
    }
);

db.end();
