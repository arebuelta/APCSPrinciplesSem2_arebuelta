/*
** Anthony Rebuelta
** Lab 118
** 18 January 2019
*/

// global variables
var data;
var reverseSorted1;
var reverseSorted2;
var reverseSorted3;
var sortType;
var overWord1;
var overWord2;
var overWord3;
// preload function
function preload(){
  data = loadJSON("data.json");
}
// setup function
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  reverseSorted1 = false;
  console.log(overWord1)
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
      overWord1 = true;
  }
  else{
    overWord1 = false;
  }
  if (mouseX > 250 && mouseX < 250+200 &&
    mouseY > 15 && mouseY < 15+15) {
     overWord2 = true;
    }
  else {
    overWord2 = false;
  }
  if (mouseX > 550 && mouseX < 550+200 &&
    mouseY > 15 && mouseY < 15+15) {
      overWord3 = true;
    }
  else {
    overWord3 = false;
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
      reverseSorted1 = false;
    }
    else if (sortType = "Population"){
      if (data.crime[j].UrbanPop < data.crime[small].UrbanPop){
        small = j
      }
      reverseSorted2 = false;
      }
    else if (sortType = "Murder"){
      if (data.crime[j].Murder < data.crime[small].Murder){
        small = j
      }
      reverseSorted3 = false;
      }
    }
  }
    var temp = data.crime[i]; // temp variable holding array[i]
    data.crime[i] = data.crime[small]; // array[i] is assigned array[small]
    data.crime[small] = temp; // array[small] is assigned temp
}

function reverseSort(){
  // for loop that sorts values in array
  for (var i = 0; i < data.crime.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < data.crime.length; j++){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (sortType = "State"){
      if (data.crime[j].state > data.crime[small].state){
        small = j
      }
      reverseSorted1 = true;
    }
    else if (sortType = "Population"){
      if (data.crime[j].UrbanPop > data.crime[small].UrbanPop){
        small = j
      }
      reverseSorted2 = true;
      }
    else if (sortType = "Murder"){
      if (data.crime[j].Murder > data.crime[small].Murder){
        small = j
      }
      reverseSorted3 = true;
      }
    }
    var temp = data.crime[i]; // temp variable holding array[i]
    data.crime[i] = data.crime[small]; // array[i] is assigned array[small]
    data.crime[small] = temp; // array[small] is assigned temp
    }
    reverseSorted1 = true;
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
  if(overWord1 === true) {
    reverseSorted2 = false;
    reverseSorted3 = false;
    if (reverseSorted1 === false){
      sortType = "State";
      reverseSort();
    }
    else if (reverseSorted1 === true){
      sortType = "State";
      selectSort();
    }
  }
  else if (overWord2 === true){
    reverseSorted1 = false;
    reverseSorted3 = false;
    if (reverseSorted2 === false){
      sortType = "Population";
      reverseSort();
    }
    else if (reverseSorted2 === true){
      sortType = "Population";
      selectSort();
    }
  }
  else if (overWord3 === true){
    reverseSorted1 = false;
    reverseSorted2 = false;
    if (reverseSorted3 === false){
      sortType = "Murder";
      reverseSort();
    }
    else if (reverseSorted3 === true){
      sortType = "Murder";
      selectSort();
    }
  }
}
