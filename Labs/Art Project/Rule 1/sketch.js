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
      var negative = Math.pow(-1, i)
      var negative2 = Math.pow(-1, i+1)
      if (i < (numBalls/4)){
        var acc = createVector(-.1, .1);
      }
      else if (i > (numBalls/4) && i < (numBalls/2)){
        var acc = createVector(.1, -.1);
      }
      else if (i > (numBalls/2) && i < (3*numBalls/4)){
        var acc = createVector(.1, .1);
      }
      else{
        var acc = createVector(-.1, -.1);
      }
      var col = color(random(200), random(0), random(200));
  Balls.push(new Ball(loc, r, col, i, acc))
}
}
function mousePressed(){
  toggle = !toggle;
}
