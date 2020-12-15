// TODO: Zprovoznit tohle. Kód funguje a správně rozpoznává pozici myši, ale je třeba přidat, aby kód poznal, kdy je myš nad isopodem
const mouse = {
    x: null,
    y: null,
    radius: 150
};
canvas.addEventListener('mousemove', function (e) {
    mouse.x = Math.round(e.clientX - canvasDimensions.left);
    mouse.y = Math.round(e.clientY - canvasDimensions.top);
    // console.log(`${mouse.x} ${mouse.y}`)
})

/*canvas.addEventListener('mousemove', function(e) {
    let mouseX = Math.round(e.clientX - canvasDimensions.left);
    let mouseY = Math.round(e.clientY - canvasDimensions.top);
});*/