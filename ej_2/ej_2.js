let angle = 0;
let radius = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // Calculamos las coordenadas del centro del círculo
  let centerX = width / 2;
  let centerY = height / 2;

  // Dibujamos el fondo del círculo
  background(220);
  noFill();
  stroke(0);
  ellipse(centerX, centerY, radius * 2);

  // Calculamos las coordenadas de la punta de la línea
  let x2 = centerX + cos(angle) * radius;
  let y2 = centerY + sin(angle) * radius;

  // Dibujamos la línea
  stroke(0);
  line(centerX, centerY, x2, y2);

  // Incrementamos el ángulo para que la línea rote
  angle += 0.01;

  // Si el ángulo supera los 360 grados, lo reseteamos
  if (angle > TWO_PI) {
    angle = 0;
  }
}
