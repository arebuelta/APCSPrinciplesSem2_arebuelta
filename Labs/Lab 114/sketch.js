/*
** Anthony Rebuelta
** Lab 114: Sorting
** 14 January 2019
*/

// global variables
var array1 = []; // sorted array
var arr = []; // unsorted array
var swaps = [];
var milliseconds = [];
var compares = [];
// setup function
function setup(){
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadNumbers(array1, arr);
  milliseconds[0] = millis();
  mySort(array1);
}
// draw function
function draw(){
	background(0);
	textSize(45);
	fill(255);
	text("Sorting Metrics", 250, 75);
	textSize(25);
	text(milliseconds[1]-milliseconds[0], 175, 220); // mySort time
	text(milliseconds[2]-milliseconds[1], 175, 260); // bubbleSort time
	text(milliseconds[3]-milliseconds[2], 175, 300); // insertSort time
	text(milliseconds[4]-milliseconds[3], 175, 340); // selectSort time
	text("mySort:", 20, 220)
	text("Bubble Sort:", 20, 260);
	text("Insert Sort:", 20, 300);
	text("Select Sort:", 20, 340);
	text("Time (ms)", 200, 175);
	text("Swaps", 475, 175);
	text("Compares", 600, 175);
	for (var i = 0; i < 4; i++){
		text(swaps[i], 475, 220+(i*40));
		text(compares[i], 600, 220+(i*40));
	}
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
  milliseconds[1] = millis();
  reSort(array);
  bubbleSort(array);
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
  milliseconds[2] = millis();
  reSort(array);
  insertSort(array);
}
// selectSort function
function selectSort(array){
  // for loop that sorts values in array
  for (var i = 0; i < array.length-1; i++){
    var small = i; // variable holding i value
    // for loop that compares the values in the array
    for (var j = i+1; j < array.length; j++){
      compares[3] = compares[3]+1;
      // if the value in the array is smaller than the previous value, small is assigned j
      if (array[j] < array[small]){
        small = j
      }
    }
    var temp = array[i]; // temp variable holding array[i]
    array[i] = array[small]; // array[i] is assigned array[small]
    array[small] = temp; // array[small] is assigned temp
    swaps[3] = swaps[3]+1;
    }
	milliseconds[4] = millis();
}

// insertSort function
function insertSort(array){
  var temp;
  // for loop that sorts values in array
  for (var  i = 1; i < array.length; i++){
    // for loop that swaps values if they are not in order
    for (var  j = i ; j > 0 ; j--){
      compares[2] = compares[2]+1;
      if(array[j] < array[j-1]){
            temp = array[j];
            array[j] = array[j-1];
            array[j-1] = temp;
            swaps[2] = swaps[2]+1;
          }
      }
   }
   milliseconds[3] = millis();
   reSort(array);
   selectSort(array);
}
// loadNumbers function
function loadNumbers(array, array2){
  for (var i = 0; i < 100; i++){
    array[i] = random(100);
	array2[i] = array[i]
    if (i < 4){
      swaps[i] = 0;
      compares[i] = 0;
    }
  }
}
// reSort function
function reSort(array){
	for (var i = 0; i < array.length; i++){
		array[i] = arr[i];
	}
}
