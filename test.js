let zero = document.getElementById("number0");
let one = document.getElementById("number1");
let two = document.getElementById("number2");
let three = document.getElementById("number3");
let four = document.getElementById("number4");
let five = document.getElementById("number5");
let six = document.getElementById("number6");
let seven = document.getElementById("number7");
let eight = document.getElementById("number8");
let nine = document.getElementById("number9");
let equal = document.getElementById("equal");
let addtition = document.getElementById("addition");
let subtraction = document.getElementById("subtraction");
let multiplication = document.getElementById("multiplication");
let division = document.getElementById("division");

let field = document.getElementsByClassName("nuhuh")[0];

let ac = document.getElementById("ac");

zero.addEventListener("click", () => {
    field.textContent += 0;
})

one.addEventListener("click", () => {
    field.textContent += 1;
})

two.addEventListener("click", () => {
    field.textContent += 2;
})

three.addEventListener("click", () => {
    field.textContent += 3;
})

four.addEventListener("click", () => {
    field.textContent += 4;
})

five.addEventListener("click", () => {
    field.textContent += 5;
})

six.addEventListener("click", () => {
    field.textContent += 6;
})

seven.addEventListener("click", () => {
    field.textContent += 7;
})

eight.addEventListener("click", () => {
    field.textContent += 8;
})

nine.addEventListener("click", () => {
    field.textContent += 9;
})

addtition.addEventListener("click", () => {
    field.textContent += "+";
})

subtraction.addEventListener("click", () => {
    field.textContent += "-";
})

multiplication.addEventListener("click", () => {
    field.textContent += "*";
})

division.addEventListener("click", () => {
    field.textContent += "/";
})

ac.addEventListener("click", () => {
    field.textContent = "";
})

equal.addEventListener("click", () => {
    field.textContent = eval(field.textContent);

    if (field.textContent == "") {
        field.textContent = "Unexpected Error";
    }
});