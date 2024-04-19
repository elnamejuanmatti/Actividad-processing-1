function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  // Dibujar la letra J
  stroke(0);
  strokeWeight(5);
  line(200, 100, 200, 300);
  line(160, 100, 200, 100);
  line(100, 300, 200, 300);
  line(100, 300, 100, 260);
  
  // Dibujar la letra M
  line(250, 100, 250, 300);
  line(250, 100, 300, 200);
  line(300, 200, 350, 100);
  line(350, 100, 350, 300);
}
