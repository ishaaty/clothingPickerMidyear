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
}

function getAesthetic() {
    // CURRENTLY READS THROUGH ALL INPUT ELEMENTS, CORRECT THIS
    let aestheticInput : HTMLInputElement;
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true) {
            aestheticInput = styleInput;
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