const enterBtn = document.querySelector("button") as HTMLButtonElement;
const testBtn = document.getElementById("test") as HTMLParagraphElement;
let userAesthetic;
let userClothingType;
let userColor;
let userPrice;

enterBtn.addEventListener("click", getClothes);

function getClothes() {
    userAesthetic = getAesthetic();
    userClothingType = getClothingType();
    userColor = getColor();
    userPrice = getPrice();
}

function getAesthetic() {
    let indieInput = document.getElementById("indie") as HTMLInputElement;
    if (indieInput.checked == true) {
        return 
    }
}

function getClothingType() {

}

function getColor() {

}


function getPrice() {

}