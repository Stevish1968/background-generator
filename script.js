var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("grad");
var randomCOlor = document.getElementById("randomColor");

console.log(color2.value)

document.onload = function () {
    CSS.textContent = body.style.background + ";";
}

document.addEventListener("DOMContentLoaded", function () {
    getcolor();
})

function getcolor() {
    console.log("linear-gradient(to right, " + color1.value + ", " + color2.value + ")");
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background + ";";
    console.log(css);
}

function randomNumber() {
    return (Math.random().toString(16) + '0000000').slice(2, 8)
}

randomCOlor.addEventListener("click", function () {
    console.log(randomNumber());
    body.style.background = "linear-gradient(to right, #" + randomNumber() + ", #" + randomNumber() + ")";
    css.textContent = body.style.background + ";";
})


color1.addEventListener("input", getcolor);

color2.addEventListener("input", getcolor);

const array = ["1", 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20];
const sameHolder = [];
const obj = {};
const sortedArray = array.sort();
let len = array.length;

const group1 = array.reduce((acc, num) => {

}, {});

const group = array.reduce((acc, num) => {
    if (!(num in acc)) acc[num] = num;
    else {
        const value = acc[num];
        console.log(typeof value[0]);
        console.log(typeof num);

        if (Array.isArray(value)) {
            if ((typeof num) === (typeof value[0])) {
                console.log(`num is ${num} the value of first element in value is ${value[0]}`)
                value.push(num);
            }
        } else {
            acc[num] = [num, num];
        }
    }
    return acc;
}, {});

const newArray = Object.keys(group).map(k => group[k]);
console.log(newArray); 0