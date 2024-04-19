let angle = 0;
let radius = 150;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  //  las coordenadas de la punta de la línea
  let x1 = width / 2;
  let y1 = height / 2;
  let x2 = x1 + cos(angle) * radius;
  let y2 = y1 + sin(angle) * radius;

  // una serie de líneas delgadas desde el centro del círculo hasta la punta de la línea
  for (let i = 0; i < radius; i++) {
    let x = x1 + cos(angle) * i;
    let y = y1 + sin(angle) * i;
    let colorR = map(x, 0, width, 0, 255);
    let colorG = map(y, 0, height, 0, 255);
    let colorB = map(sqrt(x * x + y * y), 0, width / 2, 0, 255);
    stroke(colorR, colorG, colorB);
    line(x1, y1, x, y);
  }

  //la línea con el color blanco
  stroke(1);
  line(x1, y1, x2, y2);

  // Incrementamos el ángulo para que la línea rote
  angle += 0.01;

  // Si el ángulo supera los 360 grados, lo reseteamos
  if (angle > TWO_PI) {
    angle = 0;
  }
}
