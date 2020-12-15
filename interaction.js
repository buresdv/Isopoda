canvas.addEventListener('click', function (e) {
    drawFood(mouse.x, mouse.y);
    console.log(`Food placed at ${mouse.x}, ${mouse.y}`);
    // addFood(mouseX, mouseY);
});
function openMenu() {
    document.querySelector('aside').classList.add('active');
    let randomIsopod = storedIsopods[Math.floor(Math.random() * 50)];
    document.querySelector('isopodStatus').innerHTML = `
    <h2>Name: ${randomIsopod.name}</h2>
    <p>Age: ${randomIsopod.age}</p>
    <p>Happiness: ${randomIsopod.happiness}</p>
    <p>Hunger: ${randomIsopod.hunger}</p>
    <h3>I am at ${randomIsopod.locX}, ${randomIsopod.locY}</h3>
    `;
}
function closeMenu() {
    document.querySelector('aside').classList.remove('active');
}
//# sourceMappingURL=interaction.js.map