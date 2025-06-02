/** What will be the result of ORed Operations */
console.log(3 || 2 || 1); //3
console.log("" || 0 || 2); //2
console.log("" || 0 || undefined); //undefined
console.log("" || null || 2); //2
console.log("" || "null" || 2); //null

/**What will be the result of ANDed operations */
console.log(3 && 2 && 1); //1
console.log("" && 0 && 2); //""
console.log(0 && "" && 2); //0
console.log(undefined && null && ""); //undefined
console.log("undefined" && "null" && ""); //""
