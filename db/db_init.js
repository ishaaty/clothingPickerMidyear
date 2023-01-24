// userAesthetic, userClothingType, userColor, userPrice;


const db = require("./db_connection");

/**** Read the sample items inserted ****/

const read_stuff_table_sql =  "select link, img_name from items_xref as ix, links, imgs, aesthetics, prices, clothing_type as ct, colors";

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
