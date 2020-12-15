const isopodNumber : number = 50
const isopodNames : any = ['Roly-Poly', 'Cheesy Bug', 'Billy Baker', 'Doodlebug', 'Pea Bug', 'Cheesy Bobs'];
let isopodDrawSize : number = 3;

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
    isopodDrawSize : number;
    locX : number;
    locY : number

    constructor(name, age, happiness, hunger, isopodDrawSize, locX, locY) {
        this.name = name;
        this.age = age;
        this.happiness = happiness;
        this.hunger = hunger;
        this.isopodDrawSize = isopodDrawSize;
        this.locX = locX;
        this.locY = locY;
    }
    drawIsopod() {
        c.beginPath();
        c.arc(this.locX, this.locY, this.isopodDrawSize, 0, 2 * Math.PI);
        c.fillStyle = evaluateIsopodColor(this.happiness);
        c.fill();
        c.stroke();
    }
    calcDistance() {
        let deltaX : number = mouse.x - this.locX;
        let deltaY : number = mouse.y - this.locY;
        let distance : number = Math.hypot(deltaX, deltaY);

        let runawaySpeed = {x: deltaX / distance, y: deltaY / distance};
        let runawayRadiusLimit = mouse.radius;
        let force = (runawayRadiusLimit - distance) / runawayRadiusLimit;
        // let direction = runaway

        if (distance < 50) {
            this.isopodDrawSize = 10;
            this.locX += runawaySpeed.x;
            this.locY += runawaySpeed.y;
        } else {
            this.isopodDrawSize = 3;
        }
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

const randomHumidity : number = getRandomNumber(0, 100);
const humidity = randomHumidity;
const randomDarkness : number = getRandomNumber(0, 100);
const darkness = randomDarkness;
const randomCleanliness : number = getRandomNumber(0, 100);
const cleanliness = randomCleanliness;

let environment = new Environment(humidity, darkness, cleanliness);

console.log(`Created environment with
Humidity: ${environment.humidity} (${evaluateEnvironmentViability(environment.humidity)})
Darkness: ${environment.darkness} (${evaluateEnvironmentViability(environment.darkness)})
Cleanliness: ${environment.cleanliness} (${evaluateEnvironmentViability(environment.cleanliness)})`)

let storedIsopods = [];

let i : number;
for (i = 0; i < isopodNumber; i++) {
    let randomName : string = isopodNames[getRandomNumber(0, isopodNames.length)];
    let name = randomName;

    let randomAge : number = getRandomNumber(0, 5);
    let age = randomAge;

    let randomHappiness : number = getRandomNumber(0, 100);
    let happiness = randomHappiness;

    let randomHunger : number = getRandomNumber(0, 100);
    let hunger = randomHunger;

    let locX : number = getRandomCoordinate().x;
    let locY : number = getRandomCoordinate().y;

    let isopod = new Isopod(name, age, happiness, hunger, isopodDrawSize, locX, locY);

    //console.log(isopod);
    //console.log(`Isopod located on X: ${isopod.locX} and Y: ${isopod.locY}`)

    //console.log(`Pushing isopod ${isopod.name} into storage array at position ${i}`);
    storedIsopods.push(isopod);
    //console.log(`Pushed.`);
}

//console.log(`storedIsopods after iteration:`)
//console.table(storedIsopods);

function drawFood(x, y) {
    const foodSize : number = 30;
    const foodCenter : number = foodSize / 2;

    console.log(`Attempting to place food with the following properties
    ${x}, ${y}
    Food size: ${foodSize}
    Food center: ${foodCenter}`);

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
    c.clearRect(0, 0, playgroundWidth, playgroundHeight);

    let i : number;
    for (i = 0; i < storedIsopods.length; i++) {
        const thisIsopod = storedIsopods[i];

        thisIsopod.drawIsopod();
        thisIsopod.calcDistance();
    }

    requestAnimationFrame(draw);
}

draw();
