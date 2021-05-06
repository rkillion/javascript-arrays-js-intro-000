var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];
var addElementToBeginningOfArray = (array,element) => {
  var newArray = [element,...array];
  return newArray;
};
