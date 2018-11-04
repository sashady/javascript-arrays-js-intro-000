var chocolateBars = ["snickers" , "hundred grand" , "kitkat" , "skittles"];

function addElementToBeginningOfArray (array, N) {
  array = [N,...array];
  return array;
}
addElementToBeginningOfArray(chocolate bars, 4);
function destructivelyAddElementToBeginningOfArray (array , N) {

  array.unshift(N);
  return array;
}

function addElementToEndOfArray (array, N) {
  var array2 = [...array, N];
  return array2;
}

function destructivelyAddElementToEndOfArray (array, N) {
 array.push(N);
 return array;
}

function accessElementInArray () {

}

function destructivelyRemoveElementFromBeginningOfArray () {

}

function removeElementFromBeginningOfArray () {

}

function destructivelyRemoveElementFromEndOfArray () {

}
