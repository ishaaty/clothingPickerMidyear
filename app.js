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
const read_color_all_sql = `
    SELECT 
        color_id, color_name
    FROM
        colors
`

app.get( "/survey", ( req, res ) => {
    res.sendFile( __dirname + "/pages/survey.html" );
} );

const main_query =  `select link, img_name from items_xref as ix, links, imgs, aesthetics, prices, clothing_type as ct, colors 
                    where ix.aesthetic_id = aesthetics.aesthetic_id and ?  
                     and ix.type_id = ct.type_id and ? 
                     and ix.price_id = prices.price_id and prices.price_val <= ? 
                     and (ix.color1_id = colors.color_id or ix.color2_id = colors.color_id or ix.color3_id = colors.color_id) 
                     and ? 
                     and ix.img_id = img.img_id and ix.link_id = links.link_id 
                     order by img_name";`


app.post("/survey/result", (req, res)=>{
    // Get selected aesthetics
    let selectedAesthetics = [];
    const aestheticObj = [req.body.Indie, req.body.Cottagecore, req.body.Monochromatic, req.body.DarkAcademia, req.body.LightAcademia];
    for (let i = 0; i < aestheticObj.length; i++) {
        if (aestheticObj[i] != undefined) {
            selectedAesthetics.push(aesthetics[i]);
        }
    }

    // Get selected clothing types
    let selectedClothes = [];
    const clothingObj = [req.body.Tshirt, req.body.LongSleeves, req.body.Hoodie, req.body.Dress, req.body.Jeans, req.body.Sweatpants];
    for (let i = 0; i < clothingObj.length; i++) {
        if (clothingObj[i] != undefined) {
            selectedClothes.push(aesthetics[i]);
        }
    }

    // Get selected colors
    let selectedColors = [];
    const colorObj = [req.body.Red, req.body.Orange, req.body.Yellow, req.body.Green, req.body.Blue, req.body.Purple, req.body.Pink, req.body.Grey, req.body.White, req.body.Black, req.body.Brown];
    for (let i = 0; i < colorObj.length; i++) {
        selectedColors.push(colors[i]);
    }

    res.sendFile( __dirname + "/pages/result.html" );

});


// start the server
app.listen( port, () => {
    console.log(`App server listening on ${ port }. (Go to http://localhost:${ port })` );
} );
