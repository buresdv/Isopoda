// TODO: Zprovoznit tohle. Kód funguje a správně rozpoznává pozici myši, ale je třeba přidat, aby kód poznal, kdy je myš nad isopodem
canvas.addEventListener('mousemove', function(e) {
    let mouseX = Math.round(e.clientX - canvasDimensions.left);
    let mouseY = Math.round(e.clientY - canvasDimensions.top);
})

canvas.addEventListener('click', function (e) {
    let mouseX = Math.round(e.clientX - canvasDimensions.left);
    let mouseY = Math.round(e.clientY - canvasDimensions.top);

    drawFood(mouseX, mouseY);
    // addFood(mouseX, mouseY);
})

function openMenu() {
    document.querySelector('aside').classList.add('active');
    let randomIsopod : number = storedIsopods[Math.floor(Math.random() * 50)]
    document.querySelector('isopodStatus').innerHTML = `
    <h2>Name: ${randomIsopod.name}</h2>
    <p>Age: ${randomIsopod.age}</p>
    <p>Happiness: ${randomIsopod.happiness}</p>
    <p>Hunger: ${randomIsopod.hunger}</p>
    `
}
function closeMenu() {
    document.querySelector('aside').classList.remove('active');
}

/*function addFood(mouseX, mouse Y) {
    drawFood();
}*/