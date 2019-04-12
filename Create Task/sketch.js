var data;
var totalPop = 0;
var reverseSorted = [];
var sortType; // variable that determine what to sort
var overColumn = [];

function preload(){
  data = loadJSON("population.json");
}

function setup(){
  var cnv = createCanvas(1000, 1000);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  sum();
  assign(); // assigns the reverseSorted array as false
}

function draw(){
  background(0);
  display();
  mouseCheck();
}

function mouseCheck(){
  if (mouseX > 0 && mouseX < 200 && mouseY > 0 && mouseY < 925){
    overColumn[0] = true;
  }
  else{
    overColumn[0] = false;
  }
  if (mouseX > 200 && mouseX < 370 && mouseY > 0 && mouseY < 925){
    overColumn[1] = true;
  }
  else{
    overColumn[1] = false;
  }
  if (mouseX > 370 && mouseX < 700 && mouseY > 0 && mouseY < 925){
    overColumn[2] = true;
  }
  else{
    overColumn[2] = false;
  }
  if (mouseX > 700 && mouseX < 1000 && mouseY > 0 && mouseY < 925){
    overColumn[3] = true;
  }
  else{
    overColumn[3] = false;
  }
}

function Sort(){
  // for loop that sorts values in array
  for (var i = 0; i < data.usPopulationData.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < data.usPopulationData.length; j++){
      // checks how to sort array based on "sortType"
      if (sortType === "State"){
      // if the value in the array is smaller than the previous value, small is assigned j
        if (data.usPopulationData[j].state < data.usPopulationData[small].state){
          small = j;
      }
      reverseSorted[0] = false;
    }
      else if (sortType === "Population"){
      // if the value in the array is smaller than the previous value, small is assigned j
        if (data.usPopulationData[j].population < data.usPopulationData[small].population){
          small = j
        }
      reverseSorted[1] = false;
      }
      else if (sortType === "Growth"){
      // if the value in the array is smaller than the previous value, small is assigned j
        if (data.usPopulationData[j].growth < data.usPopulationData[small].growth){
          small = j
        }
      reverseSorted[2] = false;
      }
      else if (sortType === "PercentPop"){
      // if the value in the array is smaller than the previous value, small is assigned j
        if (data.usPopulationData[j].USPercent < data.usPopulationData[small].USPercent){
          small = j
        }
      reverseSorted[3] = false;
      }
    }
    var temp = data.usPopulationData[i]; // temp variable holding array[i]
    data.usPopulationData[i] = data.usPopulationData[small]; // array[i] is assigned array[small]
    data.usPopulationData[small] = temp; // array[small] is assigned temp
  }
}

function reverseSort(){
  // for loop that sorts values in array
  for (var i = 0; i < data.usPopulationData.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < data.usPopulationData.length; j++){
      // checks how to sort array based on "sortType"
      if (sortType === "State"){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.usPopulationData[j].state > data.usPopulationData[small].state){
        small = j;
      }
      reverseSorted[0] = true;
    }
    else if (sortType === "Population"){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.usPopulationData[j].population > data.usPopulationData[small].population){
        small = j
      }
      reverseSorted[1] = true;
      }
    else if (sortType === "Growth"){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.usPopulationData[j].growth > data.usPopulationData[small].growth){
        small = j
      }
      reverseSorted[2] = true;
      }
    else if (sortType === "PercentPop"){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (data.usPopulationData[j].USPercent > data.usPopulationData[small].USPercent){
        small = j
      }
      reverseSorted[3] = true;
      }
    }
    var temp = data.usPopulationData[i]; // temp variable holding array[i]
    data.usPopulationData[i] = data.usPopulationData[small]; // array[i] is assigned array[small]
    data.usPopulationData[small] = temp; // array[small] is assigned temp
  }
}

function display(){
  stroke(255);
  line(0, 35, 1000, 35);
  line(200, 0, 200, 925);
  line(0, 925, 1000, 925);
  line(370, 0, 370, 925);
  line(700, 0, 700, 925);
  line(690, 920, 690, 930);
  line(475, 920, 475, 930);
  line(375, 920, 375, 930);
  line(750, 920, 750, 930);
  line(990, 920, 990, 930);
  noStroke();
  fill(255);
  textSize(20);
  text("State", 35, 30);
  text("Population", 250, 30);
  text("% of Population Growth", 450, 30);
  text("% of total US Population", 725, 30);
  textSize(15);
  text("-0.97%", 355, 945);
  text("0%", 472, 945);
  text("2.15%", 670, 945);
  text("0%", 747, 945);
  text("12.13%", 950, 945);
  for (var i = 0; i < data.usPopulationData.length; i++){
    fill(255);
    text(data.usPopulationData[i].state, 35, 75+(17*(i-1)));
    text(data.usPopulationData[i].population, 265, 75+(17*(i-1)));
    fill(0, 255, 0);
    rect(750, 60+(17*(i-1)), data.usPopulationData[i].USPercent*20, 15);
    if (data.usPopulationData[i].growth < 0){
      fill(255, 0, 0);
      rect((475+data.usPopulationData[i].growth*(100)), 60+(17*(i-1)), data.usPopulationData[i].growth*(100), 15);
    }
    else {
      fill(0, 255, 0);
      rect(475, 60+(17*(i-1)), data.usPopulationData[i].growth*(100), 15);
    }
  }
  fill(0, 255, 0);
  rect(0, 930, 25, 25);
  noStroke();
  fill(255);
  text("= Positive Percentage", 30, 950);
  fill(255, 0, 0);
  rect(0, 960, 25, 25);
  fill(255);
  text("= Negative Percentage", 30, 975);
  textSize(20);
  text("- Click on a column to sort the data in reverse or in order", 300, 975);
}

function assign(){
  for (var i = 0; i < 4; i++){
    reverseSorted[i] = false;
  }
}

function sum(){
  for (var i = 0; i < data.usPopulationData.length; i++){
    totalPop = totalPop + data.usPopulationData[i].population;
  }
}

function mousePressed(){
  // if statements that runs if the mouse is within the range of pixels as determined by the overWord variables
  if(overColumn[0] === true) {
    // makes the other reverseSorted variables as false due to only one array being sorted in reverse
    reverseSorted[1] = false;
    reverseSorted[2] = false;
    reverseSorted[3] = false;
    if (reverseSorted[0] === false){
      sortType = "State";
      reverseSort();
    }
    else if (reverseSorted[0] === true){
      sortType = "State";
      Sort();
    }
  }
  else if (overColumn[1] === true){
    // makes the other reverseSorted variables as false due to only one array being sorted in reverse
    reverseSorted[0] = false;
    reverseSorted[2] = false;
    reverseSorted[3] = false;
    // sorts the array backwards if it isn't
    if (reverseSorted[1] === false){
      sortType = "Population";
      reverseSort();
    }
    // sorts the array in order if it isn't
    else if (reverseSorted[1] === true){
      sortType = "Population";
      Sort();
    }
  }
  else if (overColumn[2] === true){
    // makes the other reverseSorted variables as false due to only one array being sorted in reverse
    reverseSorted[0] = false;
    reverseSorted[1] = false;
    reverseSorted[3] = false;
    // sorts the array backwards if it isn't
    if (reverseSorted[2] === false){
      sortType = "Growth";
      reverseSort();
    }
    // sorts the array in order if it isn't
    else if (reverseSorted[2] === true){
      sortType = "Growth";
      Sort();
    }
  }
  else if (overColumn[3] === true){
    reverseSorted[0] = false;
    reverseSorted[1] = false;
    reverseSorted[2] = false;
    // sorts the array backwards if it isn't
    if (reverseSorted[3] === false){
      sortType = "PercentPop";
      reverseSort();
    }
    // sorts the array in order if it isn't
    else if (reverseSorted[3] === true){
      sortType = "PercentPop";
      Sort();
    }
  }
}
