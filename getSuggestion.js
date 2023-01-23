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
    console.log(userClothingType);
    console.log(userColor);
    console.log(userPrice);
}
function getAesthetic() {
    let aestheticInput = [];
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q1") {
            aestheticInput.push(styleInput.name);
        }
    });
    return aestheticInput;
}
function getClothingType() {
    let clothingInput = [];
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q2") {
            clothingInput.push(styleInput.name);
        }
    });
    return clothingInput;
}
function getColor() {
    let colorInput = [];
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q3") {
            colorInput.push(styleInput.name);
        }
    });
    return colorInput;
}
function getPrice() {
    let priceInput;
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q4") {
            priceInput = styleInput;
        }
    });
    // @ts-ignore
    return priceInput.name;
}
