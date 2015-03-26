var stringOne = "one";
var stringTwo = "two";
var equalStrings = function(stringOne, stringTwo) {
  return (stringOne == stringTwo);
};
equalStrings(stringOne,stringTwo);
John, do I need to change the "module exports to 'var'"????


 var one = 1
 var two = 2
var notEqual = function(one, two) {
  return (one != two);
};
notEqual(one,two);

var lower = 1;
var middle = 9;
var upper = 3;
var inBetween = function(lower, middle, upper) {
  return (lower<middle && middle<upper);
 };
inBetween(lower,middle,upper); 


module.exports.outsideRanges = function(number) {

};

module.exports.nameAndPrice = function(name, price) {

};