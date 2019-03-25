/*
** Anthony Rebuelta
** Create Task: Population Data
** 19 March 2019
*/

var data;
var totalPop = 0;

function preload(){
  data = loadJSON("population.json");
}

function setup(){
  var cnv = createCanvas(1000, 1000);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  sum();
}

function draw(){
  display();
}

function sort(){
  // for loop that sorts values in array
  for (var i = 0; i < array.length-1; i++){
	// swaps array value if the first value is greater than the next value
    if (array[i] > array[i+1]){
		var temp = array[i]; // temp variable holding array[i]
		array[i] = array[i+1];
		array[i+1] = temp;
	}
  }
  // checks if the array is sorted and if it is not it starts the sort function again
  for (var i = 0; i < array-length-1; i++){
	  if (array[i] > array[i+1]){
		  sort(array); // calls sort function
	  }
  }
  }

function display(){
  stroke(255);
  line(0, 35, 1000, 35);
  line(200, 0, 200, 925);
  line(0, 925, 1000, 925);
  line(370, 0, 370, 925);
  line(700, 0, 700, 925);
  noStroke();
  fill(255);
  textSize(20);
  text("State", 35, 30);
  text("Population", 250, 30);
  text("% of Population Growth", 450, 30);
  text("% of total US Population", 725, 30);
  textSize(15);
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
      rect(475, 60+(17*(i-1)), data.usPopulationData[i].growth*(100), 15)
    }
  }
}

function sum(){
  for (var i = 0; i < data.usPopulationData.length; i++){
    totalPop = totalPop + data.usPopulationData[i].population;
  }
}
