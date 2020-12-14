var isopodNumber = 50;
var isopodNames = ['Roly-Poly', 'Cheesy Bug', 'Billy Baker', 'Doodlebug', 'Pea Bug', 'Cheesy Bobs'];
var canvas = document.querySelector('#playground');
var c = canvas.getContext('2d');
var canvasDimensions = canvas.getBoundingClientRect();
canvas.width = canvasDimensions.width * devicePixelRatio;
canvas.height = canvasDimensions.height * devicePixelRatio;
c.scale(devicePixelRatio, devicePixelRatio);
canvas.style.width = canvasDimensions.width + 'px';
canvas.style.height = canvasDimensions.height + 'px';
var playgroundWidth = canvas.getBoundingClientRect().width;
var playgroundHeight = canvas.getBoundingClientRect().height;
console.log("Playground found: " + canvas + " with width " + playgroundWidth + " and height " + playgroundHeight);
/*class Creature {
    type: string;
    ages: boolean;

    constructor(type, ages) {
    }
}*/
var Isopod = /** @class */ (function () {
    function Isopod(name, age, happiness, hunger, locX, locY) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.hunger = hunger;
        this.locX = locX;
        this.locY = locY;
    }
    return Isopod;
}());
var Environment = /** @class */ (function () {
    function Environment(humidity, darkness, cleanliness) {
        this.humidity = humidity;
        this.darkness = darkness;
        this.cleanliness = cleanliness;
    }
    return Environment;
}());
var randomHumidity = Math.floor(Math.random() * 100);
var humidity = randomHumidity;
var randomDarkness = Math.floor(Math.random() * 100);
var darkness = randomDarkness;
var randomCleanliness = Math.floor(Math.random() * 100);
var cleanliness = randomCleanliness;
var environment = new Environment(humidity, darkness, cleanliness);
function evaluateEnvironmentViability(param) {
    if (param <= 100 && param >= 80) {
        return 'Good';
    }
    else if (param <= 79 && param >= 30) {
        return 'Okay';
    }
    else if (param <= 30) {
        return 'Poor';
    }
}
function evaluateIsopodColor(param) {
    if (param <= 100 && param >= 80) {
        return '#374047';
    }
    else if (param <= 79 && param >= 30) {
        return '#dee1e3';
    }
    else if (param <= 30) {
        return '#d2202f';
    }
}
console.log("Created environment with\nHumidity: " + environment.humidity + " (" + evaluateEnvironmentViability(environment.humidity) + ")\nDarkness: " + environment.darkness + " (" + evaluateEnvironmentViability(environment.darkness) + ")\nCleanliness: " + environment.cleanliness + " (" + evaluateEnvironmentViability(environment.cleanliness) + ")");
function getRandomCoordinate() {
    var randomCoordinate = { x: Math.floor(Math.random() * playgroundWidth), y: Math.floor(Math.random() * playgroundHeight) };
    return randomCoordinate;
}
/*function random(from, to) {
    return Math.floor(Math.random() * to + from);
}*/
var storedIsopods = [];
var i;
for (i = 0; i < isopodNumber; i++) {
    var randomName = isopodNames[Math.floor(Math.random() * isopodNames.length)];
    var name_1 = randomName;
    var randomAge = Math.floor(Math.random() * 5);
    var age = randomAge;
    var randomHappiness = Math.floor(Math.random() * 100);
    var happiness = randomHappiness;
    var randomHunger = Math.floor(Math.random() * 100);
    var hunger = randomHunger;
    var locX = getRandomCoordinate().x;
    var locY = getRandomCoordinate().y;
    var isopod = new Isopod(name_1, age, happiness, hunger, locX, locY);
    //console.log(isopod);
    //console.log(`Isopod located on X: ${isopod.locX} and Y: ${isopod.locY}`)
    //console.log(`Pushing isopod ${isopod.name} into storage array at position ${i}`);
    storedIsopods.push(isopod);
    //console.log(`Pushed.`);
}
//console.log(`storedIsopods after iteration:`)
//console.table(storedIsopods);
function drawIsopods() {
    var i;
    for (i = 0; i < storedIsopods.length; i++) {
        var thisIsopod = storedIsopods[i];
        c.beginPath();
        c.arc(thisIsopod.locX, thisIsopod.locY, 2, 0, 2 * Math.PI);
        c.fillStyle = evaluateIsopodColor(thisIsopod.happiness);
        c.fill();
        c.stroke();
    }
}
function drawFood(x, y) {
    var foodSize = 30;
    var foodCenter = foodSize / 2;
    c.beginPath();
    c.rect(x - foodCenter, y - foodCenter, foodSize, foodSize);
    c.strokeStyle = '#599900';
    c.fillStyle = '#599900';
    c.fill();
    c.stroke();
}
function drawEnvironment() {
    drawFood();
}
function draw() {
    drawIsopods();
    drawEnvironment();
    requestAnimationFrame(draw);
}
draw();
