/*
* Funkce vracející náhodná čísla
* */


// Náhodné číslo od - do
function getRandomNumber(from, to) {
    return Math.floor(Math.random() * (to - from + 1) + from);
}

// Náhodná pozice na herní ploše
function getRandomCoordinate() {
    const randomCoordinate = {x: Math.floor(Math.random() * playgroundWidth), y: Math.floor(Math.random() * playgroundHeight)};
    return randomCoordinate;
}

/*
* Funkce vyhodnocující stav hry
* */
// Vhodnost životního prostředí
function evaluateEnvironmentViability(param) {
    if (param <= 100 && param >= 80) {
        return 'Good';
    } else if (param <= 79 && param >= 30) {
        return 'Okay';
    } else if (param <= 30) {
        return 'Poor';
    }
}
// Barva isopodů podle toho, jak dobře jim je
function evaluateIsopodColor(param) {
    if (param <= 100 && param >= 80) {
        return '#374047';
    } else if (param <= 79 && param >= 30) {
        return '#dee1e3';
    } else if (param <= 30) {
        return '#d2202f';
    }
}