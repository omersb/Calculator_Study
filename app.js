//* ======================================================
//*                     IOS CALCULATOR
//* ======================================================

const prevDisp = document.querySelector(".previous-display");
const currDisp = document.querySelector(".current-display");

const btnContainer = document.querySelector(".buttons-container");

let currOperand = ""
let previousOperand = ""

//! Butonları taşıyan container için event tanımlanması
btnContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("num")) {
        appendNumber(e.target.textContent);
        updateDisplay();
    }
});

const appendNumber = (num) => {
    console.log(num);
};

const updateDisplay = () => {
    currDisp.textContent = 
};