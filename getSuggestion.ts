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
    console.log(userColor);
    console.log(userPrice);
}

function getAesthetic() {
    let aestheticInput : String[] = [];
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q1") {
            aestheticInput.push(styleInput.name);
        }
    });
    return aestheticInput;
}

function getClothingType() {
    let clothingInput : String[] = [];
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q2") {
            clothingInput.push(styleInput.name);
        }
    });
    return clothingInput;
}

function getColor() {
    let colorInput : String[] = [];
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.id == "q3") {
            colorInput.push(styleInput.name);
        }
    });
    return colorInput;
}


function getPrice() {
    let priceInput : HTMLInputElement;
    document.querySelectorAll("input").forEach((styleInput) => {
        if (styleInput.checked == true && styleInput.name == "q4") {
            priceInput = styleInput;
        }
    });
    // @ts-ignore
    return priceInput.id;
}

