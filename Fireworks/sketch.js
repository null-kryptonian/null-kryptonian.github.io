var fireworks = [];
var gravity;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);

  // for (var i = 0; i < 16; i++) {
  //   fireworks.push(new Firework());
  // }
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);

  if (random(2) < 0.15) {
    fireworks.push(new Firework());
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update(i);
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
