// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketh');
const ctx = canvas.getContext('2d');
const shakeButton = document.querySelector('.shake');

// Setup our canvas for drawing
// Make a variable called height and witdth from the same properties on our canvas
const { width, height } = canvas;

// Create random x and y starting points on the canvas

ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = '10';
ctx.beginPath(); // Start the drawing
ctx.moveTo(200, 200);
ctx.lineTo(200, 200);
ctx.stroke();

// Write a draw function

// Write a handler for the keys

// Clear / shake function

// Listen for arrow keys
