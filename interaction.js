// TODO: Zprovoznit tohle. Kód funguje a správně rozpoznává pozici myši, ale je třeba přidat, aby kód poznal, kdy je myš nad isopodem
canvas.addEventListener('mousemove', function (e) {
    var mouseX = Math.round(e.clientX - canvasDimensions.left);
    var mouseY = Math.round(e.clientY - canvasDimensions.top);
});
canvas.addEventListener('click', function (e) {
    var mouseX = Math.round(e.clientX - canvasDimensions.left);
    var mouseY = Math.round(e.clientY - canvasDimensions.top);
    drawFood(mouseX, mouseY);
    // addFood(mouseX, mouseY);
});
function openMenu() {
    document.querySelector('aside').classList.add('active');
    var randomIsopod = storedIsopods[Math.floor(Math.random() * 50)];
    document.querySelector('isopodStatus').innerHTML = "\n    <h2>Name: " + randomIsopod.name + "</h2>\n    <p>Age: " + randomIsopod.age + "</p>\n    <p>Happiness: " + randomIsopod.happiness + "</p>\n    <p>Hunger: " + randomIsopod.hunger + "</p>\n    ";
}
function closeMenu() {
    document.querySelector('aside').classList.remove('active');
}
/*function addFood(mouseX, mouse Y) {
    drawFood();
}*/ 
