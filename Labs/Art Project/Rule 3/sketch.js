//Global variables
var Balls = [];
var toggle = true;
var a = 0;
var r = 20;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  frameRate(60);
  loadBalls(500);
}
function draw() {
  if (toggle){
    background(30, 30, 30, 20);
    for (i = 0; i < Balls.length; i++){
    Balls[i].run();
    }
  }
}
function loadBalls(numBalls){
  for (i = 0; i < numBalls; i++){
	  a += 0.1;
      r += 1;
      var x = r * cos(a);
      var y = r * sin(a);
	  var id = i;
	  var col = color(255, 255-((255*i)/numBalls), 0+((255*i)/numBalls), (255/i)*50)
  Balls.push(new Ball(x, y, id, col));
}
}
function mousePressed(){
  toggle = !toggle;
}
