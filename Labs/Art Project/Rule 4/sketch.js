//Global variables
var balls = [];
var toggle = true;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls(50);
}
function draw() {
  if (toggle){
    background(20, 20, 20);
    for (var i = 0; i < balls.length; i++){
      balls[i].run();
    }
  }
}
function loadBalls(numBalls){
  for (var i = 0; i < numBalls; i++){
    var locX = random(width);
    var locY = random(height);
    var rad = random(15, 35);
    var col = color(250, 23, 23);
    var id = i;
    balls[i] = new Ball(locX, locY, rad, col, id);
  }
}
function mousePressed(){
  toggle = !toggle;
}
