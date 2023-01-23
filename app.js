//set up the server
const express = require("express");
const logger = require("morgan");
const app = express();
const port = 8080;

// define middleware that logs all incoming requests
app.use(logger("dev"));
app.use(express.static(__dirname + '/public'));


// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/pages/index.html" );
} );

// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );
