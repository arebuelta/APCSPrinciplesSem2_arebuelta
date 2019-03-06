/*
**  Anthony Rebuelta
**  Art Project: Rule 4
**  6 March 2019
*/

//Global variables
var balls = [];
var balls2 = [];
var toggle = true;
var numBalls = 100;
// setup code
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(20, 20, 20);
  loadBalls();
}
// draw function
function draw() {
  if (toggle){
    background(20, 20, 20, 90);
    for (var i = 0; i < numBalls; i++){
      balls[i].run();
    //  balls2[i].run();
    }
  }
}
// loadBalls function
function loadBalls(){
  for (var i = 0; i < numBalls; i++){
    var locX = width - (width*i)/numBalls;
    var locY = (200*i)/numBalls;
    var locY2 = random(200, 400)
    var rad = random(15, 35);
    var col = color(random(255), random(255), random(255));
    var id = 1;
    var id2 = 2;
  balls[i] = new Ball(locX, locY, rad, col, id);
//  balls2[i] = new Ball(locX, locY2, rad, col, id2);
  }
}
function mousePressed(){
  toggle = !toggle;
}
