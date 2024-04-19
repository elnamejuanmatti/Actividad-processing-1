let img;
let x = 200;
let y = 200;
let speed = 5; // Velocidad 
let xDirection = 0;
let yDirection = 0;

function preload() {
  img = loadImage('1.png'); // Reemplaza 'tu_imagen.png' con la ruta de tu imagen
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(img, x, y, 200, 200); //  tamaño imagen 
  
  // Mover la imagen
  x += xDirection * speed;
  y += yDirection * speed;
}

function keyPressed() {
  if (keyCode === 65 || key === 'a') { // Tecla 'A' o 'a' para mover hacia la izquierda
    xDirection = -1;
  } else if (keyCode === 68 || key === 'd') { // Tecla 'D' o 'd' para mover hacia la derecha
    xDirection = 1;
  } else if (keyCode === 87 || key === 'w') { // Tecla 'W' o 'w' para mover hacia arriba
    yDirection = -1;
  } else if (keyCode === 83 || key === 's') { // Tecla 'S' o 's' para mover hacia abajo
    yDirection = 1;
  }
}

function keyReleased() {
  if (keyCode === 65 || key === 'a' || keyCode === 68 || key === 'd') { // Teclas 'A' o 'D' (izquierda o derecha)
    xDirection = 0;
  } else if (keyCode === 87 || key === 'w' || keyCode === 83 || key === 's') { // Teclas 'W' o 'S' (arriba o abajo)
    yDirection = 0;
  }
}
