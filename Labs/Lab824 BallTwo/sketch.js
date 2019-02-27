//Global variables
var Balls = [];
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(150);
}
function draw() {
  background(20, 20, 20, 20);
  for (i = 0; i < Balls.length; i++){
  Balls[i].run();
  }
}
function loadBalls(numBalls){
  for (i = 0; i < numBalls; i++){
      var loc = createVector(random(800), random(800));
      var r = 10;
      var col = color(random(255), random(255), random(255));
  Balls.push(new Ball(loc, r, col, i))
}
}
