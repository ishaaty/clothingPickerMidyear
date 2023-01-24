// vars from getSuggestion: userAesthetic, userClothingType, userColor, userPrice;

const db = require("./db_connection");

let aestheticsQuery = "";
for (let i = 0; i < userAesthetic.length() - 1; i++){
    aestheticsQuery += "(aesthetics.aesthetic_name = " + userAesthetic[i] + "or";
}   
aestheticsQuery += "aesthetics.aesthetic_name = " + userAesthetic[userAesthetic.length()-1] + ")";


let typesQuery = "";
for (let i = 0; i < userClothingType.length() - 1; i++){
    typesQuery += "(clothing_type.type_name = " + userClothingType[i] + "or";
}   
typesQuery += "clothing_type.type_name = " + userClothingType[userClothingType.length()-1] + ")";


let colorQuery = "";
for (let i = 0; i < userColor.length() - 1; i++){
    colorQuery += "(color.color_name = " + userColor[i] + "or";
}   
colorQuery += "color.color_name = " + userColor[userColor.length()-1] + ")";



const main_query =  "select link, img_name from items_xref as ix, links, imgs, aesthetics, prices, clothing_type as ct, colors" + 
                    "where ix.aesthetic_id = aesthetics.aesthetic_id and " + aestheticsQuery + 
                    " and ix.type_id = ct.type_id and " + typesQuery; +
                    " and ix.price_id = prices.price_id and prices.price_val <= " + userPrice +
                    " and (ix.color1_id = colors.color_id or ix.color2_id = colors.color_id or ix.color3_id = colors.color_id)" + 
                    " and " + colorQuery + 
                    " and ix.img_id = img.img_id and ix.link_id = links.link_id " +
                    " order by img_name";

db.execute(main_query, 
    (error, results) => {
        if (error) 
            throw error;

        console.log("Results")
        console.log(results);
        // console.log(results[0].color_name);
    }
);

db.end();
