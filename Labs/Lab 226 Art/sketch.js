//Global variables
var Balls = [];
var toggle = true;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(125);
}
function draw() {
  if (toggle){
    background(175, 175, 175, 20);
    for (i = 0; i < Balls.length; i++){
    Balls[i].run();
    }
  }
}
function loadBalls(numBalls){
  for (i = 0; i < numBalls; i++){
      var loc = createVector(random(800), random(800));
      var r = 10;
      var negative = Math.pow(-1, i)
      var negative2 = Math.pow(-1, i+1)
      var a = 0.1*negative;
      var b = 0.1*negative2;
      if (i < (numBalls/2)){
        var acc = createVector(a, a);
      }
      else {
        var acc = createVector(b, b);
      }
      var col = color(random(200), random(200), random(200));
  Balls.push(new Ball(loc, r, col, i, acc))
}
}
function mousePressed(){
  toggle = !toggle;
}
