//Global variables
var Balls = [];
var toggle = true;
var a = 0;
var r = 50;
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
      var x = r * cos(a);
      var y = r * sin(a);
      a += 0.1;
      r += 1;
  Balls.push(new Ball(x, y))
}
}
function mousePressed(){
  toggle = !toggle;
}
