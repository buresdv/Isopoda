const isopodNumber : number = 50
const isopodNames : any = ['Roly-Poly', 'Cheesy Bug', 'Billy Baker', 'Doodlebug', 'Pea Bug', 'Cheesy Bobs'];

const canvas = document.querySelector('#playground');
const c = canvas.getContext('2d');

let canvasDimensions = canvas.getBoundingClientRect();
canvas.width = canvasDimensions.width * devicePixelRatio;
canvas.height = canvasDimensions.height * devicePixelRatio;
c.scale(devicePixelRatio, devicePixelRatio);

canvas.style.width = canvasDimensions.width + 'px';
canvas.style.height = canvasDimensions.height + 'px';

let playgroundWidth = canvas.getBoundingClientRect().width;
let playgroundHeight = canvas.getBoundingClientRect().height;
console.log(`Playground found: ${canvas} with width ${playgroundWidth} and height ${playgroundHeight}`);

/*class Creature {
    type: string;
    ages: boolean;

    constructor(type, ages) {
    }
}*/

class Isopod {
    name : string;
    age : number;
    happiness : number;
    hunger : number;
    locX : number;
    locY : number

    constructor(name, age, happiness, hunger, locX, locY) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.hunger = hunger;
        this.locX = locX;
        this.locY = locY;
    }
}

class Environment {
    humidity : number;
    darkness : number;
    cleanliness : number;
    constructor(humidity, darkness, cleanliness) {
        this.humidity = humidity;
        this.darkness = darkness;
        this.cleanliness = cleanliness;
    }
}

const randomHumidity : number = Math.floor(Math.random() * 100);
const humidity = randomHumidity;
const randomDarkness : number = Math.floor(Math.random() * 100);
const darkness = randomDarkness;
const randomCleanliness : number = Math.floor(Math.random() * 100);
const cleanliness = randomCleanliness;

let environment = new Environment(humidity, darkness, cleanliness);


function evaluateEnvironmentViability(param) {
    if (param <= 100 && param >= 80) {
        return 'Good';
    } else if (param <= 79 && param >= 30) {
        return 'Okay';
    } else if (param <= 30) {
        return 'Poor';
    }
}
function evaluateIsopodColor(param) {
    if (param <= 100 && param >= 80) {
        return '#374047';
    } else if (param <= 79 && param >= 30) {
        return '#dee1e3';
    } else if (param <= 30) {
        return '#d2202f';
    }
}

console.log(`Created environment with
Humidity: ${environment.humidity} (${evaluateEnvironmentViability(environment.humidity)})
Darkness: ${environment.darkness} (${evaluateEnvironmentViability(environment.darkness)})
Cleanliness: ${environment.cleanliness} (${evaluateEnvironmentViability(environment.cleanliness)})`)

function getRandomCoordinate() {
    const randomCoordinate = {x: Math.floor(Math.random() * playgroundWidth), y: Math.floor(Math.random() * playgroundHeight)};
    return randomCoordinate;
}

/*function random(from, to) {
    return Math.floor(Math.random() * to + from);
}*/

let storedIsopods = [];

let i : number;
for (i = 0; i < isopodNumber; i++) {
    let randomName : string = isopodNames[Math.floor(Math.random() * isopodNames.length)];
    let name = randomName;

    let randomAge : number = Math.floor(Math.random() * 5);
    let age = randomAge;

    let randomHappiness : number = Math.floor(Math.random() * 100);
    let happiness = randomHappiness;

    let randomHunger : number = Math.floor(Math.random() * 100);
    let hunger = randomHunger;

    let locX : number = getRandomCoordinate().x;
    let locY : number = getRandomCoordinate().y;

    let isopod = new Isopod(name, age, happiness, hunger, locX, locY);

    //console.log(isopod);
    //console.log(`Isopod located on X: ${isopod.locX} and Y: ${isopod.locY}`)

    //console.log(`Pushing isopod ${isopod.name} into storage array at position ${i}`);
    storedIsopods.push(isopod);
    //console.log(`Pushed.`);
}

//console.log(`storedIsopods after iteration:`)
//console.table(storedIsopods);


function drawIsopods() {
    let i : number;
    for (i = 0; i < storedIsopods.length; i++) {
        const thisIsopod = storedIsopods[i];

        c.beginPath();
        c.arc(thisIsopod.locX, thisIsopod.locY, 2, 0, 2 * Math.PI);
        c.fillStyle = evaluateIsopodColor(thisIsopod.happiness);
        c.fill();
        c.stroke();
    }
}
function drawFood(x, y) {
    const foodSize : number = 30;
    const foodCenter : number = foodSize / 2;

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
