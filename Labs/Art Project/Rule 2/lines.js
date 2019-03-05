/*
** ArtTwo
** Anthony Rebuelta
** March 3, 2019
*/

function Ball(loc, rad, col, id, vel, id){
  // Instance variables
  this.loc = loc;
  this.vel = vel;
  this.rad = rad;
  this.id = id;
  this.col = col;
  this.id = id;
  // This function calls other functions
  this.run = function (){
    this.checkEdges();
    this.update();
    this.render();
  }
  // This function changes the location of the ball
  // by adding speed to x and y
  this.update = function(){
    this.loc.x = this.loc.x + this.vel.x;
    this.loc.y = this.loc.y + this.vel.y;
  }
  //checkEdges() reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > 800) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > 800) this.vel.y = -this.vel.y;
  }
  // render() draws the ball at the new location
  this.render = function(){
    fill(col);
    stroke(col);
    if (id < Balls.length-1){
    line(this.loc.x, this.loc.y, Balls[id+1].loc.x, Balls[i+1].loc.y);
    }
  }
}
