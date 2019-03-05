//Global variables
var Balls = [];
var toggle = true;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(500);
}
function draw() {
  if (toggle){
    background(25, 25, 25, 20);
    for (i = 0; i < Balls.length; i++){
    Balls[i].run();
    }
  }
}
function loadBalls(numBalls){
  for (i = 0; i < numBalls; i++){
      var loc = createVector(400, 400);
      var r = 10;
      var vel = createVector(random(-3, 3), random(-3, 3));
      var col = color(random(0), random(200), random(150));
      var id = i;
  Balls.push(new Ball(loc, r, col, i, vel, id))
}
}
function mousePressed(){
  toggle = !toggle;
}
