const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


const x = 50;
const y = 50;
const width = 200;
const height = 100;
const color = "blue";

function drawRectangle(x, y, width, height, color) {

    // Clear canvas before drawing
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = color;

    // Draw rectangle
    ctx.fillRect(x, y, width, height);
}

drawRectangle(x, y, width, height, color);