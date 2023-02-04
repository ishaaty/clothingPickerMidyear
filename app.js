//set up the server
const express = require( "express" );
const app = express();
const port = 8080;
const logger = require("morgan");
const db = require('./public/db/db_connection');
const bp = require('body-parser');
const aesthetics = ["Indie", "Cottagecore", "Grunge", "Monochromatic", "Dark-Academia", "Light-Academia"];
const clothingTypes = ["Tshirt", "LongSleeves", "Hoodie", "Dress", "Jeans", "Sweatpants"];
const colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Pink", "Grey", "White", "Black", "Brown"];

// define middleware that logs all incoming requests
app.use(logger("dev"));
app.use(express.static(__dirname + '/public'));
app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

// define a route for the default home page
app.get( "/", ( req, res ) => {
    res.sendFile( __dirname + "/pages/index.html" );
} );

// define a route for the stuff inventory page

app.get( "/survey", ( req, res ) => {
    res.sendFile( __dirname + "/pages/survey.html" );
} );

app.post("/survey/result", (req, res)=>{
    // Get selected aesthetics
    let selectedAesthetics = [];
    const aestheticObj = [req.body.Indie, req.body.Cottagecore, req.body.Grunge, req.body.Monochromatic, req.body.DarkAcademia, req.body.LightAcademia];
    for (let i = 0; i < aestheticObj.length; i++) {
        if (aestheticObj[i] != undefined) {
            selectedAesthetics.push(aesthetics[i]);
        }
    }
    console.log(selectedAesthetics);

    // Get selected clothing types
    let selectedClothes = [];
    const clothingObj = [req.body.Tshirt, req.body.LongSleeves, req.body.Hoodie, req.body.Dress, req.body.Jeans, req.body.Sweatpants];
    for (let i = 0; i < clothingObj.length; i++) {
        if (clothingObj[i] != undefined) {
            selectedClothes.push(clothingTypes[i]);
        }
    }

    // Get selected colors
    let selectedColors = [];
    const colorObj = [req.body.Red, req.body.Orange, req.body.Yellow, req.body.Green, req.body.Blue, req.body.Purple, req.body.Pink, req.body.Grey, req.body.White, req.body.Black, req.body.Brown];
    for (let i = 0; i < colorObj.length; i++) {
        if (colorObj[i] != undefined) {
            selectedColors.push(colors[i]);
        }
    }

    // Get selected price
    let selectedPrice = req.body.pricing.substr(1, req.body.pricing.length-1);
    console.log(selectedPrice)


    // formatting lists for query
    let aestheticsQuery = "(";
    for (let i = 0; i < selectedAesthetics.length - 1; i++){
        aestheticsQuery += "aesthetics.aesthetic_name = " + '"' + selectedAesthetics[i] + '"' + " or ";
    }   
    aestheticsQuery += "aesthetics.aesthetic_name = " + '"' + selectedAesthetics[selectedAesthetics.length-1] + '"' + ")";
    console.log(aestheticsQuery);


    let typesQuery = "(";
    for (let i = 0; i < selectedClothes.length - 1; i++){
        typesQuery += "ct.type_name = " +  '"' + selectedClothes[i] + '"' + " or ";
    }   
    typesQuery += "ct.type_name = " + '"' + selectedClothes[selectedClothes.length-1] + '"' + ")";
    console.log(typesQuery);


    let colorQuery = "(";
    for (let i = 0; i < selectedColors.length - 1; i++){
        colorQuery += "colors.color_name = " + '"' + selectedColors[i] + '"' + " or ";
    }   
    colorQuery += "colors.color_name = " + '"' + selectedColors[selectedColors.length-1] + '"' + ")";
    console.log(colorQuery);

    let main_query = `
                    select img_name, link from items_xref as ix, images, links, colors, aesthetics, clothing_type as ct, prices
                    where ix.color1_id = colors.color_id and ` + colorQuery 
                    + ` and ix.aesthetic_id = aesthetics.aesthetic_id and ` + aestheticsQuery 
                    + ` and ix.type_id = ct.type_id and ` + typesQuery 
                    + ` and ix.max_price = prices.price_id and prices.price_val <= ` + selectedPrice 
                    + ` and ix.img_id = images.img_id and ix.link_id = links.link_id
                    order by img_name
                    `

    db.execute(main_query, (error, results) => {
        if (error)
            res.status(500).send(error); //Internal Server Error
        else if (results.length == 0){
            res.send("Vrielle exception!");
        } else {
            console.log(results);
            res.send(results);
        }
    });

});


// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );
