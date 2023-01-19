const enterBtn = document.querySelector("button") as HTMLButtonElement;
enterBtn.addEventListener("click", getClothes);
const testBtn = document.getElementById("test") as HTMLParagraphElement;

function getClothes() {
    console.log("It worked!");
}