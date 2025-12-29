console.log("External Linking");
console.log("This is the Standard way");
console.log(1 + "2");
console.log(2 - "1");
alert("Hi Again, I’m JavaScript!");
alert("Hello");
alert("world");

alert("Hello");
[1, 2].forEach(alert);

alert("Hello")[(1, 2)].forEach(alert);
// If we run this code, only the first Hello shows and there’s an error, TypeError: Cannot read properties of undefined (reading '2'). There are no numbers any more.
// That’s because JavaScript does not assume a semicolon before square brackets [...]. So, the code is treated as a single statement.

// Note: Recommend putting semicolons between statements even if they are separated by newlines.
