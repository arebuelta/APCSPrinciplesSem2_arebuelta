/*
** ArtTwo
** Anthony Rebuelta
** March 3, 2019
*/

function Ball(x, y, id, col){
  // Instance variables
  this.x = x;
  this.y = y;
  this.id = id;
  this.col = col;
  // This function calls other functions
  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
  }
  // render() draws the ball at the new location
  this.render = function(){
  noFill();
  push();
  translate(width / 2, height / 2);
  strokeWeight(2);
  stroke(col);
  rotate(radians(frameCount));
  ellipse(this.x, this.y, 50, 50);
  pop();
  }
}
