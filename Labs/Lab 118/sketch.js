/*
** Anthony Rebuelta
** Lab 118
** 18 January 2019
*/

// global variables
var data;
var reverseSorted1; // variable that notes whether the first array is sorted backwards
var reverseSorted2; // variable that notes whether the second array is sorted backwards
var reverseSorted3; // variable that notes whether the third array is sorted backwards
var sortType; // variable that determine what to sort
var overWord1; // true or false variable that checks if the mouse is over the the text "State"
var overWord2; // true or false variable that checks if the mouse is over the text "Urban Population"
var overWord3; // true or false variable that checks if the mouse is over the text "Murder Rate"
// preload function
function preload(){
  data = loadJSON("data.json");
}
// setup function
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  // sets the reverse variables as false
  reverseSorted1 = false;
  reverseSorted2 = false;
  reverseSorted3 = false;
}
// draw function
function draw(){
  background(0);
  display();
  mouseCheck();
}
// selectSort function that sorts array
function selectSort(){
  // for loop that sorts values in array
  for (var i = 0; i < data.crime.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < data.crime.length; j++){
      // checks how to sort array based on "sortType"
      if (sortType === "State"){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.crime[j].state < data.crime[small].state){
        small = j;
      }
      reverseSorted1 = false;
    }
    else if (sortType === "Population"){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.crime[j].UrbanPop < data.crime[small].UrbanPop){
        small = j
      }
      reverseSorted2 = false;
      }
    else if (sortType === "Murder"){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.crime[j].Murder < data.crime[small].Murder){
        small = j
      }
      reverseSorted3 = false;
      }
    }
    var temp = data.crime[i]; // temp variable holding array[i]
    data.crime[i] = data.crime[small]; // array[i] is assigned array[small]
    data.crime[small] = temp; // array[small] is assigned temp
  }
}
// reverseSort function that sorts array backwards
function reverseSort(){
  // for loop that sorts values in array
  for (var i = 0; i < data.crime.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < data.crime.length; j++){
      // checks how to sort array based on "sortType"
      if (sortType === "State"){
      // if the value in the array is bigger than the previous value, small is assigned j
      if (data.crime[j].state > data.crime[small].state){
        small = j;
      }
      reverseSorted1 = true;
    }
    else if (sortType === "Population"){
      // if the value in the array is bigger than the previous value, small is assigned j
      if (data.crime[j].UrbanPop > data.crime[small].UrbanPop){
        small = j;
      }
      reverseSorted2 = true;
      }
    else if (sortType === "Murder"){
      // if the value in the array is bigger than the previous value, small is assigned j
      if (data.crime[j].Murder > data.crime[small].Murder){
        small = j;
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
// display function that displays the text and rectangles representing the data
function display(){
  textSize(30);
  fill(255);
  text("State", 75, 30);
  text("Urban Population", 250, 30);
  text("Murder Rate", 550, 30);
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
// mouseCheck function that checks where the mouse is touching
function mouseCheck(){
  // if statement that marks the overWord variable as true if the mouse's location is within the range of pixels
  if (mouseX > 75 && mouseX < 75+70 &&
    mouseY > 5 && mouseY < 5+30) {
      overWord1 = true;
  }
  else{
    overWord1 = false;
  }
  if (mouseX > 250 && mouseX < 250+240 &&
    mouseY > 5 && mouseY < 5+30) {
     overWord2 = true;
    }
  else {
    overWord2 = false;
  }
  if (mouseX > 550 && mouseX < 550+170 &&
    mouseY > 5 && mouseY < 5+30) {
      overWord3 = true;
    }
  else {
    overWord3 = false;
  }
}
// mousePressed function that runs when mouse is pressed
function mousePressed(){
  // if statements that runs if the mouse is within the range of pixels as determined by the overWord variables
  if(overWord1 === true) {
    // makes the other reverseSorted variables as false due to only one array being sorted in reverse
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
    // makes the other reverseSorted variables as false due to only one array being sorted in reverse
    reverseSorted1 = false;
    reverseSorted3 = false;
    // sorts the array backwards if it isn't
    if (reverseSorted2 === false){
      sortType = "Population";
      reverseSort();
    }
    // sorts the array in order if it isn't
    else if (reverseSorted2 === true){
      sortType = "Population";
      selectSort();
    }
  }
  else if (overWord3 === true){
    // makes the other reverseSorted variables as false due to only one array being sorted in reverse
    reverseSorted1 = false;
    reverseSorted2 = false;
    // sorts the array backwards if it isn't
    if (reverseSorted3 === false){
      sortType = "Murder";
      reverseSort();
    }
    // sorts the array in order if it isn't
    else if (reverseSorted3 === true){
      sortType = "Murder";
      selectSort();
    }
  }
}
