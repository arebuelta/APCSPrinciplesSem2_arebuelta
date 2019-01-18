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
	// swaps array value if the first value is greater than the next value
    if (array[i] > array[i+1]){
		var temp = array[i]; // temp variable holding array[i]
		array[i] = array[i+1];
		array[i+1] = temp
	}
  }
  // checks if the array is sorted and if it is not it starts the sort function again
  for (var i = 0; i < array-length-1; i++){
	  if (array[i] > array[i+1]){
		  sort(array); // calls sort function
	  }
  }
}
