/*
**  Ball Constructor Function
** Anthony Rebuelta
** Aug 21, 2018
*/

function Ball(loc, rad, col, id){
  // Instance variables
  this.locX = locX;
  this.locY = locY;
  this.speedX = random(-3.0, 3.0);
  this.speedY = random(-3.0, 3,0);
  this.rad = rad;
  this.acc = createVector(0, .1);
  this.id = id;
  // this.col = col;
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
    if(this.locX < 0) this.speedX = -this.speedX;
    if(this.locX > width) this.speedX = -this.speedX;
    if(this.locY < 0) this.speedY = -this.speedY;
    if(this.locY > height) this.speedY = -this.speedY;
  }
  // render() draws the ball at the new location
  this.render = function(){
    if (id%2 === 0 ){
      stroke(255, 0, 0);
    }
    else{
      stroke(155, 155, 0);
    }
    line(this.loc.x, this.loc.y, rad, rad, 125);
  }
}
