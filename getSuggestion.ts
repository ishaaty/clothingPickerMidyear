const enterBtn = document.querySelector("button") as HTMLButtonElement;
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
}

function getAesthetic() {
    let aestheticInput : HTMLInputElement;
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q1") {
            aestheticInput = styleInput;
        }
    });
    // @ts-ignore
    return aestheticInput.name;
}

function getClothingType() {
    let clothingInput : HTMLInputElement;
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q2") {
            clothingInput = styleInput;
        }
    });
    // @ts-ignore
    return clothingInput.name;
}

function getColor() {

}


function getPrice() {

}