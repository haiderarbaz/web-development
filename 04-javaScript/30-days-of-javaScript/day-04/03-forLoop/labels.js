/*
  Labels for break/continue
*/

/*
  Sometimes we need to break out from multiple nested loops at once.

    For example, 
      in the code below loop over i and j, prompting for the coordinates (i, j) from (0,0) to (2,2);
*/
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // what if you want to exit from here to Done (below)?
  }
}

alert("Done!");
/*
  We need a way to stop the process if the user cancels the input.

  The ordinary break after input would only break the inner loop. 
    For example,
*/
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break;
    console.log(`i=${i}, j=${j}`);
  }
}
/*
  The break in the above code will only exits inner loop, but if you want to exits the outer loop or stops the process? That' where the labels came to the picture.

  Label:
    A label is a name you give to a loop, so you can break or continue that specific loop from inside a nested loop.

    A label is an identifier with a colon before a loop:

    Syntax:
      labelName: for (...) {
        // loop code
      }
*/
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    let input = prompt(`Value at coords (${i},${j})`, "");

    // if an empty string or canceled, then break out of both loops
    if (!input) break outer; // (*)

    // do something with the value...
  }
}

alert("Done!");
/*
  The break <labelName> statement in the loop below breaks out to the label:
  In the code above, break outer looks upwards for the label named outer and breaks out of that loop.
  So the control goes straight from (*) to alert('Done!').
*/

/* 
  You can also move the label onto a separate line:

    outer:
    for (let i = 0; i < 3; i++) { ... }
*/

/* 
  The continue directive can also be used with a label. 
  In this case, code execution jumps to the next iteration of the labeled loop.
*/

/*
  Example 1: Breaking out of nested loops
*/
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer; // Exits BOTH loops!
    console.log(`i=${i}, j=${j}`);
  }
}
console.log("Done!");

/*
  Example 2: Continuing outer loop
*/
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outer; // Exits BOTH loops!
    console.log(`i=${i}, j=${j}`);
  }
}
console.log("Done!");

/*
  Practical example: Finding a value in 2D array
*/
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let found = false;
outer: for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    if (matrix[i][j] === 5) {
      console.log(`Found at [${i}][${j}]`);
      found = true;
      break outer; // Exit both loops immediately
    }
  }
}

/* 
  Important rules: 
*/

/*
  1. Labels must be directly above the loop:

    outer: for (...) { } // ✅ Correct
    
    outer: // ❌ Wrong
    let x = 5;
    for (...) { }

  2. Can't jump to arbitrary labels:
      Labels do not allow us to jump into an arbitrary place in the code.

        // ❌ This doesn't work
        myLabel: {
          break myLabel;  // Not for arbitrary code blocks
        }

        break label; // jump to the label below (doesn't work)
        label: for (...)

        // You cannot put break label before the label definition.

  3. A break directive must be inside a code block.
      label: {
      // ...
      break label; // works
      // ...
      }
  
  4. Label names should be descriptive:
      rowLoop: for (...) {
      columnLoop: for (...) {
       break rowLoop;
      }
    }
*/
