//set up the server
const express = require( "express" );
const app = express();
const port = 8080;
const logger = require("morgan");
const db = require('./public/db/db_connection');

// define middleware that logs all incoming requests
app.use(logger("dev"));
app.use(express.static(__dirname + '/public'));


// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/pages/index.html" );
} );

// define a route for the stuff inventory page
const read_color_all_sql = `
    SELECT 
        color_id, color_name
    FROM
        colors
`

app.get( "/survey", ( req, res ) => {
    res.sendFile( __dirname + "/pages/survey.html" );
} );

app.get( "/survey/result", ( req, res ) => {
    res.sendFile( __dirname + "/pages/result.html" );
    // let stuff = getClothes();
    // db.execute(main_query, (error, results) => {
    //     if (error)
    //         res.status(500).send(error); // Internal Server Error
    //     else
    //         res.send(results);
    // });
} );

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );
