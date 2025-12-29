/*
  Searching for a substring:
    
    There are multiple ways to look for a substring within a string.
*/

/*
  "str.indexOf"

    The first method is str.indexOf(substr, pos).

      The second parameter is optional and it allows us to start searching from a given position.

    It looks for the substr in str, starting from the given position pos, and returns the position where the match was found or -1 if nothing can be found.
*/
let str = "Widget with id";
console.log(str.indexOf("id")); // 1, "id" is found at the position 1 (..idget with id)
console.log(str.indexOf("dg")); // 2,
console.log(str.indexOf("with")); // 7
console.log(str.indexOf("Widget")); // 0, because 'Widget' is found at the beginning
console.log(str.indexOf("widget")); // -1, not found, the search is case-sensitive

console.log(str.indexOf("id", 2));
/* 
  The first occurrence of "id" is at position 1. To look for the next occurrence, let’s start the search from position 2:
*/
