/*
** ArtTwo
** Anthony Rebuelta
** March 3, 2019
*/

function Ball(loc, rad, col, id, acc){
  // Instance variables
  this.loc = loc;
  this.vel = createVector(random(-1.0, 1.0),  random(-1.0, 1.0));
  this.rad = rad;
  this.id = id;
  this.acc = acc;
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
    this.vel.add(this.acc);
	  this.loc.add(this.vel);
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 200) this.vel.x = -this.vel.x;
    if(this.loc.x > 600) this.vel.x = -this.vel.x;
    if(this.loc.y < 200) this.vel.y = -this.vel.y;
    if(this.loc.y > 600) this.vel.y = -this.vel.y;
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(255);
    noStroke();
    ellipse(this.loc.x, this.loc.y, rad, rad);

  }
}
