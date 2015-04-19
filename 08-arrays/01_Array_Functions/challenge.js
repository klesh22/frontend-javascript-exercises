- Create a function named `reversePlusOne`. This function should:
    - Take one argument, an array of at least two numbers.
    - This function should return:
        - the array *reversed* with a `1` added at the front

    For example:
    
    ```javascript
    reversePlusOne([1,2]); // returns [1,2,1]
    reversePlusOne([5,4,3,2]); // returns [1,2,3,4,5]
    ```

module.exports.reversePlusOne = [1,2];
module.exports.reversePlusOne.push(1);
module.exports.reversePlusOne;

module.exports.reversePlusOne = [5,4,3,2,1];
module.exports.reversePlusOne.splice(1,4);
module.exports.reversePlusOne.unshift(1,2,3,4);
module.exports.reversePlusOne;







- Create a function named `plusesEverywhere`. This function should:
	- Take one argument, an array of at least two  numbers.
	- This function should return:
		- a String made of all the values in the array separated by `+`
		
	For example:
	
	```javascript
	plusesEverywhere([1,2,3]); // returns "1+2+3"
	plusesEverywhere([18,24]); // returns "18+24"
	
	
module.exports.plusesEverywhere = undefined;
	```
	
	
	
	
	
	
- Create a function named `arrayQuantityPlusOne`. This function should:
	- Take one argument, an array of numbers.
	- This function should return:
		- one greater than the number of items in the array

	For example: 
	
	```javascript
	arrayQuantityPlusOne([0,0,1,0,2,1]); // returns 7
	arrayQuantityPlusOne([42]); // returns 2
	```



module.exports.arrayQuantityPlusOne = [0,0,1,0,2,1];
module.exports.arrayQuantityPlusOne.length +1;

module.exports.arrayQuantityPlusOne = [42];
module.exports.arrayQuantityPlusOne.length+1;
