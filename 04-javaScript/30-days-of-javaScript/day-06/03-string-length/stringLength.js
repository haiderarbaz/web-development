/*
  String length:
    The 'length' property has the string length:
*/

const userName = "Arhan";
console.log(userName.length);

const str = "My\n";
console.log(str.length);
/*
Note that \n is a single “special” character, so the length is indeed 3.
*/

/*
  length is a property
    People with a background in some other languages sometimes mistype by calling str.length() instead of just str.length. That doesn’t work.

  Please note that:
    - str.length is a numeric property, not a function. 
    - There is no need to add parenthesis after it. 
    - Not .length(), but .length.
*/
