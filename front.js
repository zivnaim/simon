var TIME = 500;
var button = document.getElementById("butDiv");
var wrong = document.getElementById("wrongDiv");

var blue = document.getElementById("blue");
var yellow = document.getElementById("yellow");
var red = document.getElementById("red");
var green = document.getElementById("green");

var list = [];
var place = 0;

var colors = new Object();
// colors["name"] = [object, usual-color, clicked-color, audio]
colors["blue"] = [blue, "#00ccff", "#1affff", new Audio("sounds/d0.wav")];
colors["yellow"] = [yellow, "#ffff80", "#fffb00", new Audio("sounds/d1.wav")];
colors["red"] = [red, "rgb(219, 86, 86)", "red", new Audio("sounds/d2.wav")];
colors["green"] = [green, "rgb(71, 206, 71)", "green", new Audio("sounds/d3.wav")];

function mark(color) {
    // colors[color][3].pause();
    colors[color][3].play();
    colors[color][0].style.backgroundColor = colors[color][2];
    setTimeout(toOriginal, TIME, color);
}

function toOriginal(color) {
    // document.body.style.backgroundColor = "white";
    colors[color][0].style.backgroundColor = colors[color][1];
}

function markList(list, num = 0) {
    if (list.length <= num)
        return;
    mark(list[num]);
    setTimeout(markList, 1.25 * TIME, list, num + 1);
}

function start() {
    // list = ["blue", "blue", "yellow", "yellow", "green", "green", "red", "red"];
    // markList(list);
    button.style.display = "none";
    wrong.style.display = "none";
    list = [];
    place = 0;
    addColor();
}

function check(color) {
    mark(color);
    if (list[place] != color) {
        button.style.display = "block";
        wrong.style.display = "block";
    } else {
        place++;
        if (place == list.length) {
            place = 0;
            setTimeout(addColor, 3 * TIME);
        }
    }
}

/* this function choose a random color and add it to the list*/
function addColor() {
    x = Math.floor(Math.random() * 4);
    switch (x) {
        case 0:
            list.push("blue");
            break;
        case 1:
            list.push("yellow");
            break;
        case 2:
            list.push("red");
            break;
        case 3:
            list.push("green");
            break;
    }
    markList(list);
}