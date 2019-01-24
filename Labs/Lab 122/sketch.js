/*
** Anthony Rebuelta
** Lab 122: Population Sort
** 22 January 2019
*/

// global variables
var females;
var males;
var countries;
// preload function
function preload(){
  females = loadJSON("population.json");
  males = loadJSON("population.json");
  countries = loadJSON("population.json");
}

// setup function
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  bubbleSort(females.countrydata);
  selectSort(countries.countrydata);
  insertSort(males.countrydata);
  displayLog();
}

// draw function
function draw(){
  background(0);
}

function bubbleSort(array){
  for (var i = array.length-1; i >= 1; i--){
    /* for loop that checks if each value in the array is in order
    ** and swaps them if they are not */
    for (var j = 0; j < i; j++){
      if (array[j].females < array[j+1].females){
      var temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
      }
    }
  }
}
// selectSort function
function selectSort(array){
  // for loop that sorts values in array
  for (var i = 0; i < array.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < array.length; j++){
      // if the value in the array is smaller than the previous value, small is assigned j
      if (array[j].country > array[small].country){
        small = j
      }
    }
    var temp = array[i]; // temp variable holding array[i]
    array[i] = array[small]; // array[i] is assigned array[small]
    array[small] = temp; // array[small] is assigned temp
    }
}

// insertSort function
function insertSort(array){
  var temp;
  // for loop that sorts values in array
  for (var  i = 1; i < array.length; i++){
    // for loop that swaps values if they are not in order
    for (var  j = i ; j > 0 ; j--){
      if(array[j].males > array[j-1].males){
            temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
          }
      }
   }
}
function displayLog(){
  console.log("Countries with most to least females:");
  for (var i = 0; i < females.countrydata.length; i++){
    console.log(females.countrydata[i].country);
  }
  console.log(" ");
  console.log("Countries with the most to least males:");
  for (var i = 0; i < males.countrydata.length; i++){
    console.log(males.countrydata[i].country);
  }
  console.log(" ");
  console.log("Countries: ")
  for(var i = 0; i < countries.countrydata.length; i++){
    console.log(countries.countrydata[i].country);
  }
}
