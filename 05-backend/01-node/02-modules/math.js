function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

/*
  First way:
    Default Exports
*/
module.exports = {
  addFunction: add,
  subtractFunction: sub,
};

/* 
  You can only use this once, because it's overrides the value.
*/
