/*
** Anthony Rebuelta
** Lab 110: Sorting
** 10 January 2019
*/

// global variables
var array1 = [];
var array = [];
var swaps = [];
var milliseconds = [];
var compares = [];
// setup function
function setup(){
  loadNumbers(array1);
}
// mySort function
function mySort(array){
  for (var i = 0; i < array.length-1; i++){
	// swaps array value if the first value is greater than the next value
  compares[0] = compares[0]+1;
    if (array[i] > array[i+1]){
		    var temp = array[i]; // temp variable holding array[i]
		    array[i] = array[i+1];
		    array[i+1] = temp;
        swaps[0] = swaps[0]+1; // tracks how many times values have swapped
	     }
     }
  // checks if the array is sorted and if it is not it starts the sort function again
  for (var i = 0; i < array1.length-1; i++){
	  if (array1[i] > array1[i+1]){
		  sort(array1); // calls sort function
	  }
  }
}

// bubbleSort function
function bubbleSort(array){
  for (var i = array.length-1; i >= 1; i--){
    /* for loop that checks if each value in the array is in order
    ** and swaps them if they are not */
    for (var j = 0; j < array.length; j++){
      compares[1] = compares[1]+1;
      if (array[j] > array[j+1]){
      var temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
      swaps[1] = swaps[1]+1;
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
    for (var j = i+1; j < array.length-1; i++){
      compares[2] = compares[2]+1;
      // if the value in the array is smaller than the previous value, small is assigned j
      if (array[j] < array[small]){
        small = j
      }
    }
    var temp = array[i]; // temp variable holding array[i]
    array[i] = array[small]; // array[i] is assigned array[small]
    array[small] = temp; // array[small] is assigned temp
    swaps[2] = swaps[2]+1;
    }
}
// insertSort function
function insertSort(array){
  var temp;
  // for loop that sorts values in array
  for (var  i = 1; i < array.length; i++){
    // for loop that swaps values if they are not in order
    for (var  j = i ; j > 0 ; j--){
      compares[3] = compares[3]+1;
      if(array[j] < array[j-1]){
            temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            swaps[3] = swaps[3]+1;
          }
      }
   }
}
// loadNumbers function
function loadNumbers(array){
  for (var i = 0; i < 100; i++){
    array[i] = random(100);
    if (i < 4){
      swaps[i] = 0;
      compares[i] = 0;
    }
  }
}
