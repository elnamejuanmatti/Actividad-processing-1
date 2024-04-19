let currentColor; // Variable para almacenar el color actual del rectángulo

function setup() {
  createCanvas(400, 200);
  currentColor = color(random(255), random(255), random(255)); // Color inicial aleatorio
  setInterval(changeColor, 2000); // Cambiar color cada 2 segundos
}

function draw() {
  background(255); // Fondo negro
  fill(currentColor); // el color actual
  rect(100, 50, 200, 100); //  rectángulo en la posición deseada
}

function changeColor() {
  currentColor = color(random(255), random(255), random(255)); // nuevo color aleatorio
}
