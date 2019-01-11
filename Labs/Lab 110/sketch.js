/*
** Anthony Rebuelta
** Lab 110: Sorting
** 10 January 2019
*/

// global variables
var array1 = []; // original unsorted array
var sortedArray1 = []; // mySort
var sortedArray2 = []; // bubbleSort
var sortedArray3 = []; // selectSort

function setup(){
  for (var i = 0; i < 10; i++){
    array1[i] = random(10);
	sortedArray1[i] = sortedArray2[i] = sortedArray3[i] = array1[i];
  }
  mySort(sortedArray1);
  bubbleSort(sortedArray2);
  selectSort(sortedArray3);
}

function mySort(array){
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

function bubbleSort(array){
  for (var i = array.length-1; i >= 1; i--){
    /* for loop that checks if each value in the array is in order
    ** and swaps them if they are not */
    for (var j = 0; j < array.length; j++){
      if (array[j] > array[j+1]){
      var temp = array[j];
      array[j] = array[j+1];
      array[j+1] = temp;
      }
    }
  }
}

function selectSort(array){
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
