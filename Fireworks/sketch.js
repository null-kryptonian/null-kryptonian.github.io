var fireworks = [];
var firework;
var gravity;
var sound;

function preload() {
  sound = loadSound("FireWorks-Sound.mp3");
}

function mousePressed() {
  sound.play();
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  stroke(255);
  strokeWeight(4);
  background(0);
}

function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);

  if (random(2) < 0.3) {
    firework = new FireWork();
    fireworks.push(firework);
  }

  for (var i = fireworks.length - 1; i >= 0; i--) {
    fireworks[i].update(i);
    fireworks[i].show();
    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}
