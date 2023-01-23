"use strict";
const enterBtn = document.querySelector("button");
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
    console.log(userAesthetic);
}
function getAesthetic() {
    let aestheticInput;
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true) {
            aestheticInput = styleInput;
        }
        if (styleInput.name = "Cottagecore") {
            return aestheticInput.name;
        }
    });
    // @ts-ignore
    return aestheticInput.name;
}
function getClothingType() {
}
function getColor() {
}
function getPrice() {
}
