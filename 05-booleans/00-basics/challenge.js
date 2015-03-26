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



- Complete the `outsideRanges` function. This function should:
    - take one argument, 'number', which is a number
    - return true when the number is:
        - not between 10 and 20, it also can't be 10 or 20 
        - not between 42 and 75, it also can't be 75. 42 is allowed 
        - not between 1 and 6. 1 and 6 are allowed

    For example:
    
    ```javascript
    outsideRanges(42) // should return true
    outsideRanges(75) // should return false
    ```

var outsideRanges = function(number) {
  if (number>10) && (number<20) {
    return "true";
  }
  else if (number<42) && (number>75) {
    return "true";
  }
  else if (number == 42) {
    return "true";
  }
  else if (number<=1) && (number>=6) {
    return "true";
  }
  else {
    return "false";
  }
};
    

    
    
 - Complete the `nameAndPrice` function. This function should:
    - take two arguments: 'name' which is the name of a newspaper, and 'price' which is a number
    - return true if name is 'NYTimes' or 'LATimes', and price is greater than or equal to 1

    For example:
    
    ```javascript
    nameAndPrice('NYTimes', 1) // returns true
    nameAndPrice('LATimes', 0) // returns false
    nameAndPrice('NYTimes', 0) // returns false
    ```
   
    
var nameAndPrice = function(name, price) {
  if (NYTimes >= 1) {
    return "true"
  }
  else if (LATimes>= 1) {
    return "true"
  }
  else {
    return "false";
  }
};
