/*
** Anthony Rebuelta
** Lab 118
** 18 January 2019
*/

// global variables
var data;
// preload function
function preload(){
  data = loadJSON("data.json");
}
// setup function
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
}
// draw function
function draw(){
  background(0);
  console.log(data.crime[0].state);
}
