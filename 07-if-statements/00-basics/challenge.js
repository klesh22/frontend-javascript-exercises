Complete the `favoriteNumber` function. This function should:
    - Take two arguments, the first is the favorite number and the second is a guess at what the favorite number is
    - This function should return:
        - "Too high" if `guess` is greater than `fav` 
        - "Too low" if `guess` is less than `fav` 
        - "You got it!" if `guess` is equal to `fav`

var favoriteNumber = function (fav, guess) {
  if (guess>fav) {
    return "Too high";
  }
  else if (guess<fav) {
    return "Too low";
  }
  else if (guess === fav) {
    return "You got it!";
  }
};



- Complete the `checkLock` function. This function should:
    - have four arguments that are all numbers
    - return "correct" if the four numbers are a valid combination
    - return "incorrect" if the 4 numbers aren't a valid combination
    - a combination is valid if:
        - the first number is a 3, 5, or 7
        - the second number is 2
        - the third number is between 5 and 100. 5 and 100 are both valid numbers
        - the fourth number is less than 9 or greater than 20. 9 and 20 both invalid numbers
    


var checkLock = (first,second,third,fourth) {
  if (first ==3) && (first==5) && (first==7) {
    return "correct";
  }
  else if (second === 2) {
    return "correct";
  }
  else if (third >=5) && (third<=100) {
    return "correct";
  }
  else if (fourth<9) && (fourth>20) {
    return "correct";
  }
  else {
    return "incorrect";
  }
  };
 


- Complete the `canIGet` function. This function should:
    - take two arguments:
        - 'item' should represent what the user wants to buy
        - 'money' should represent how many dollars a user has
        - return 'true' if a user can afford a given item according to the price chart below, false otherwise:
            - 'MacBook Air' - $999
            - 'MacBook Pro' - $1299
            - 'Mac Pro' - $2499
            - 'Apple Sticker' - $1
        - return 'false' if the 'item' is not in the above list apple productsv
        
 var canIGet = function (item,money) {
   if (Macbook Air <=$999) {
     return "true";
   }
   else if (Macbook Pro<=$1299) {
     return "true";
   }
   else if (Mac Pro<=$2499) {
     return "true";
   }
   else if (Apple Sticker<=$1) {
     return "true";
   }
   else {
     return "false";
   }
 };