/*
- Create a function named **newArray**. This function should:
    - take four arguments
    - return an array with those arguments

*/
module.exports.newArray = function (arg1, arg2, arg3, arg4) {
   return [arg1, arg2, arg3, arg4]
};

/*
- Create a function named **firstAndLast**. This function should:
   - take one argument, an array with at least 3 elements
   - return a new array with the first and last element of the passed array.

   For example::
   
   ```javascript
   var array = ['one', 3, 'cool' 4];
   firstAndLast(array) // should return ['one', 4]
   ```

*/
module.exports.firstAndLast = function (myArray) {
   var returnArray = [];
  var firstItem= myArray[0];
   var lastItemPosition= myArray.length-1;
   var lastItem = myArray[lastItemPosition];
   returnArray.push(firstItem);
   returnArray.push(lastItem);
   return returnArray;
};













