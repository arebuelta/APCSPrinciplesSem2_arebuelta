/*
** Anthony Rebuelta
** Lab 118
** 18 January 2019
*/

// global variables
var data;
var reverseSorted = false;
var sortType;
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
  textSize(30);
  fill(255);
  text("State", 75, 30);
  text("Urban Population", 250, 30);
  text("Murder Rate", 550, 30);
  display();
  if (mouseX > 60 && mouseX < 60+40 &&
    mouseY > 15 && mouseY < 15+15) {
      overBox = true;
  }
}

function selectSort(){
  // for loop that sorts values in array
  for (var i = 0; i < data.crime.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < data.crime.length; j++){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (sortType = "State"){
      if (data.crime[j].state < data.crime[small].state){
        small = j
      }
    }
  }
    var temp = data.crime[i]; // temp variable holding array[i]
    data.crime[i] = data.crime[small]; // array[i] is assigned array[small]
    data.crime[small] = temp; // array[small] is assigned temp
    }
}

function reverseSort(){
  // for loop that sorts values in array
  for (var i = 0; i < data.crime.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < data.crime.length; j++){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.crime[j].state > data.crime[small].state){
        small = j
      }
    }
    var temp = data.crime[i]; // temp variable holding array[i]
    data.crime[i] = data.crime[small]; // array[i] is assigned array[small]
    data.crime[small] = temp; // array[small] is assigned temp
    }
    reverseSorted = true;
}
function display(){
  textSize(15);
  for (var i = 0; i < data.crime.length; i++){
    fill(255);
    text(data.crime[i].state, 50, 75+(15*(i-1)));
    fill(0, 255, 0);
    rect(350, 60+(15*(i-1)), data.crime[i].UrbanPop, 15);
    fill(255, 0, 0);
    rect(600, 60+(15*(i-1)), data.crime[i].Murder*2, 15)
  }
}
function mousePressed(){
  if(overBox) {
    if (reverseSorted = false)
    reverseSort();
    else{
      sortType = "State";
      selectSort;
    }
  }

}
