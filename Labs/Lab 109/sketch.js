/*
** Anthony Rebuelta
** Lab 109: Sort
** 9 January 2019
*/

// global variables
var array = [];
var Smallsub;

// setup function
function setup(){
  // for loop that gives the array a value
  for (var i = 0; i < 10; i++){
  array[i] = random(10);
  }
  sort(array);
  console.log(array);
}

// sort function
function sort(array){
  for (var i = 0; i < array.length-1; i++){
    var Smallsub = i;
    for (var j = i+1; j < array.length-1; i++){
    if (array[j] < array[Smallsub]){
    Smallsub = j
      }
    }
    var temp = array[i];
    array [i] = array[Smallsub];
    array[Smallsub] = temp;
  }
}
