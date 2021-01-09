let a = 0;
var boxObj;
var sponge = [];
var next = [];
var newBoxes = [];

function setup() {
    createCanvas(displayWidth, displayHeight, WEBGL);
    boxObj = new BoxClass(0, 0, 0, 200);
    sponge.push(boxObj);
}

function mousePressed() {
    for (var i = 0; i < sponge.length; i++) {
        newBoxes = sponge[i].generate();
        for (var j = 0; j < newBoxes.length; j++) {
            next.push(newBoxes[j]);
        }
    }
    sponge = next;
}

function draw() {
    background(51);
    stroke(255);
    noFill();
    lights();

    // translate(50, 50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    for (var b = 0; b < sponge.length; b++)
        sponge[b].showBoxes();
}