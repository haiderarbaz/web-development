function doSomething(callback) {
  console.log("Doing something......");
  callback();
}
doSomething(function () {
  console.log("Done with callback functions");
});

/* Arrow function */

let doingSomething = (callback) => {
  console.log("Learning callback function.....");
  callback();
};

doingSomething = () => console.log("Done with callbackFunction!");
