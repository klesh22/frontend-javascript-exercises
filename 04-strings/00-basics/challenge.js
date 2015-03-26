module.exports.formLetter = function(firstName, senderName, message) {
return formLetter="Hello John,\n\nI think I have this figured out now.\n\nSincerely, Karen"
};

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) { 
var bigString = "This is a long string.";
var subStringA = bigString.substring(0,5);
var subStringA;
  subStringA= bigString.substring(startA,endA);
  var subStringB = bigString.substring(7,9);
  var subStringB;
  subStringB = bigString.substring(startB, endB);
  return subStringA + subStringB;
};

var text = "John is my mentor.";
var searchString = "my ";
module.exports.findFirstMatch = function(text, searchString) {
  return text.IndexOf(searchString);
};


var text = "John is my mentor.";
var searchString = "my";
module.exports.findLastMatch = function(text, searchString) {
 return text.lastIndexOf(searchString);
};


var text = "roses are red violets are blue";
var searchString = "violets";
module.exports.substringBetweenMatches = function(text, searchString) {
  return text.substring(14,21);
};

