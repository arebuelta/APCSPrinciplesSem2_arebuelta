/*
** Anthony Rebuelta
** Lab 110: Sorts
** 10 January 2019
*/

// global variables
var array = [];

function setup(){
  for (var i = 0; i < 10; i++){
    array[i] = random(10);
  }
}

function mySort(){

}

function bubbleSort(){
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

function selectSort(){
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
