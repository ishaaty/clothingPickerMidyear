"use strict";
const enterBtn = document.querySelector("button");
enterBtn.addEventListener("click", getClothes);
const testBtn = document.getElementById("test");
function getClothes() {
    let indieInput = document.getElementById("indie");
    if (indieInput.checked == true) {
        console.log("It worked!");
    }
}
