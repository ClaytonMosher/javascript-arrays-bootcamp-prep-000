var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray(array, element){
 return [element, ...array];
}
function destructivelyAddElementToBegginningOfArray(array, element){
  array.unshift(element);
  return array
}
function accessElementInArray(array, index){
  return array[index]
}
function destructivelyRemoveElementFromBegginingOfArray(array){
  array.shift()
  return array
}
function removeElementFromBeginningOfArray(array){
  array.slice(1)
  return array
}
destructivelyRemoveElementFromEndOfArray(array){