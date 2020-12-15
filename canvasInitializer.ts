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
