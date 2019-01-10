/*
** Anthony Rebuelta
** Lab 109: Sort
** 9 January 2019
*/

// global variables
var array = [];

// setup function
function setup(){
  // for loop that gives the array a value
  for (var i = 0; i < 10; i++){
  array[i] = random(10);
  }
  sort(array); // calls sort function
  console.log(array);
}

// sort function
function sort(array){
  // for loop that sorts values in array
  for (var i = 0; i < array.length-1; i++){
    var SmallSub = i; // variable holding i value
	// for loop that compares the values in the array
    for (var j = i+1; j < array.length-1; i++){
    // if the value in the array is smaller than the previous value, SmallSub is assigned j
	if (array[j] < array[SmallSub]){
    SmallSub = j
      }
    }
    var temp = array[i]; // temp variable holding array[i]
    array[i] = array[SmallSub]; // array[i] is assigned array[SmallSub]
    array[SmallSub] = temp; // array[SmallSub] is assigned temp
  }
}
