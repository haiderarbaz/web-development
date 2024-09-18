'use strict';

console.log('Hey! How You Doing?')

//API:
    //Application Programming Interface.
        //Interface: 
            //a point where two systems, subjects, organizations, etc. meet and interact.
            //In Computing
            //a device or program enabling a user to communicate with a computer.
        //An API (Application Programming Interface) is a set of rules and protocols that allow software applications to communicate with each other. APIs are like an interface that defines how two applications interact with each other by exchanging requests and responses.
        //For example, the weather bureau’s software system contains daily weather data. The weather app on your phone “talks” to this system via APIs and shows you daily weather updates on your phone.
    //What does API stand for?
        //API stands for Application Programming Interface. In the context of APIs, the word Application refers to any software with a distinct function. Interface can be thought of as a contract of service between two applications. This contract defines how the two communicate with each other using requests and responses. Their API documentation contains information on how developers are to structure those requests and responses.
    //How do APIs work?
        //API architecture is usually explained in terms of client and server. The application sending the request is called the client, and the application sending the response is called the server. So in the weather example, the bureau’s weather database is the server, and the mobile app is the client.
    //If we talk about the architectures, API’s architectures are: 
        //REST (Representational State Transfer)
        //SOAP (Simple Object Access Protocol)
            //Both define a standard communication protocol for the exchange of messages in XML (Extensible Markup Language).
    //Steps followed in the working of APIs –
        //The client initiates the requests via the APIs URI (Uniform Resource Identifier)
        //Then the server sends the response back to the API with the information
        //The API makes a call to the server after receiving the request
        //Finally, the API transfers the data to the client
    //How is an API Different From a Web Application?
        //An API acts as an interface that allows proper communication between two programs whereas a web application is a network-based resource responsible for completing a single task. Also, it’s important to know that “All web services are APIs, but not all APIs are web”.
        //The difference between an API and a web application is that API allows two-way communication and web applications are just a way for users to interact through a web browser. A web application may have an API to complete the requests.

    //What are REST APIs?
        //REST stands for Representational State Transfer, and follows the constraints of REST architecture allowing interaction with RESTful web services. It defines a set of functions (GET, PUT, POST, DELETE) that clients use to access server data.
        //The functions used are:
            //GET (retrieve a record)
            //PUT (update a record)
            //POST (create a record)
            //DELETE (delete the record)
            //Its main feature is that REST API is stateless, i.e., the servers do not save clients’ data between requests.

//Promise:
    //The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
    //OR
    //a promise lets you keep working with your code while waiting for something else to finish, like loading data from a server. When the data is ready, the promise will deliver it.
    //We use promise for parallel execution in background.
    //And it's a async code.

    //A promise can be in one of three states:
        //Fulfilled: The promise has been completed successfully. The data you were waiting for is now available.
        //Rejected: The promise has failed. Maybe there was a problem, like the server not responding.
        //Pending: initial state, neither fulfilled nor rejected.

        //When you create a promise, you write some code that will eventually tell the promise whether it was successful (fulfilled) or not (rejected).
    
    //Syntax:
        //let promise = new Promise(function(resolve, reject){
                //do something
        //});
    
    //Creating a Promise
        //Here we have created a new promise using the Promise constructor. Inside the promise, there are two functions: resolve and reject. If everything goes well, we call resolve and pass the result. If something goes wrong, we call reject and pass an error message.
            //let myPromise = new Promise(function(resolve, reject) {
                // some code that takes time, like loading data
                //let success = true; // change this to false to check error
            
                //if (success) {
                //resolve("The data has loaded successfully!");
                //} else {
                //reject("There was an error loading the data.");
                //}
            //});

    //Using a Peromise:
        //Once you have a promise, you can use it to do something when it’s fulfilled or rejected. You can do this using two methods: then and catch.
           //myPromise.then(function(message) {
                // This runs if the promise is fulfilled
                //console.log(message); 
                //}).catch(function(error) {
                // This runs if the promise is rejected
                //console.log(error); 
                //});

    //Here’s what’s happening:
        //The then method is called when the promise is fulfilled. It takes a function as an argument, which will run when the promise is successful.
        //The catch method is called when the promise is rejected. It also takes a function, which will run if there’s an error.
        //So, if the promise is successful, you will see “The data has loaded successfully!” in the console. If there’s an error, you will see “There was an error loading the data.”

    //Example of Using Promise
        //We will create a promise comparing two strings. If they match, resolve; otherwise, reject. Then, log success or error accordingly. Simplifies asynchronous handling in JavaScript.
            //let promise = new Promise(function (resolve, reject) {
                //const x = "arbazhaider";
                //const y = "haiderarbaz"
                //if (x === y) {
                    //resolve();
                //} else {
                    //reject();
                //}
            //});
            
            //promise.
                //then(function () {
                    //console.log('Success, You are hired');
                //}).
                //catch(function () {
                    //console.log('Some error has occurred');
                //}); 
        
            //Output:
                //Success, You are hired
        
    //Promises can be consumed by registering functions using .then and .catch methods.
    //Promise Consumers
        // 1.) Promise then() Method
            //Promise method is invoked when a promise is either resolved or rejected. It may also be defined as a carrier that takes data from promise and further executes it successfully.

            //Parameters: It takes two functions as parameters.
                //The first function is executed if the promise is resolved and a result is received.
                //The second function is executed if the promise is rejected and an error is received. (It is optional and there is a better way to handle error using .catch() method

            //Syntax:
                //.then(function(result){
                    //handle success
                //}, function(error){
                    //handle error
                //}
            
            //Example 1: This example shows how the then method handles when a promise is resolved
                //let promise = new Promise(function (resolve, reject) {
                    //resolve('JS For JavaScript');
                //})

                //promise
                    //.then(function (successMessage) {
                        //success handler function is invoked 
                        //console.log(successMessage);
                    //}, function (errorMessage) {
                        //console.log(errorMessage);
                    //}); 

                //Output:
                    //JS For JavaScript

            //Example 2: This example shows the condition when a rejected promise is handled by second function of then method
                //let promise = new Promise(function (resolve, reject) {
                    //reject('Promise Rejected')
                //})
            
                //promise
                    //.then(function (successMessage) {
                        //console.log(successMessage);
                    //}, function (errorMessage) {
                    //error handler function is invoked 
                        //console.log(errorMessage);
                    //}); 

                //Output:
                    //Promise Rejected
        
        // 2.) Promise catch() Method
            //Promise catch() Method is invoked when a promise is either rejected or some error has occurred in execution. It is used as an Error Handler whenever at any step there is a chance of getting an error.

            //Parameters: It takes one function as a parameter.
                //Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )
            
            //Syntax:
                //.catch(function(error){
                    //handle error
                //})

            //Examples 1: This example shows the catch method handling the reject function of promise.
                //let promise = new Promise(function (resolve, reject) {
                    //reject('Promise Rejected')
                //})
                
                //promise
                    //.then(function (successMessage) {
                        //console.log(successMessage);
                    //})
                    //.catch(function (errorMessage) {
                        //error handler function is invoked 
                        //console.log(errorMessage);
                    //}); 

                    //Output:
                        //Promise Rejected

        //Example:
            // let myPromise = new Promise(function(resolve, reject){ 
            //     console.log('I am inside promise');
            //     resolve(1998)
            // });
            // console.log('First');
            // //inside promise we have to give call back function and inside this function we have to pass 2 input parameter resolve & reject.

            // //resolve
            // let myPromise1 = new Promise(function(resolve, reject){ 
            //     setTimeout(function() {
            //         console.log('Hey! Where are you?');
            //     }, 8000);
            //     resolve(1997);
            // });
            // console.log('Second');

            // //reject
            // let myPromise2 = new Promise(function(resolve, reject){ 
            //     setTimeout(function() {
            //         console.log('Hey! Are you there?');
            //     }, 8000);
            //     reject(new Error('rejected'));
            // });
            // console.log('Third');

            // //two code parallel
            // let myPromise4 = new Promise(function(resolve, reject){ 
            //     setTimeout(function() {
            //         console.log('Hey! When you will be here?');
            //     }, 2000);
            // });

            // let myPromise5 = new Promise(function(resolve, reject){ 
            //     setTimeout(function() {
            //         console.log('Hey! Are you coming?');
            //     }, 5000);
            // });
            // console.log('Fourth');
        
        //when we run promise we get two things, successful execution i.e; fullfiled state and second rejection i.e; rejected state.

    //We can run two methods on promise
        // 1.) then():  in fullfied state the output return some value it is handle by then
        // 2.) catch(): error handle

        //Example:
            //  let myPromise6 = new Promise(function(resolve, reject){ 
            //     setTimeout(function() {
            //         console.log('Hey! Promise Fullfiled');
            //     }, 5000);
            //     resolve(2002)
            // });
            // myPromise6.then((value) => {console.log(2002)});

            // let myPromise7 = new Promise(function(resolve, reject){ 
            //     setTimeout(function() {
            //         console.log('Hey! Promise Not Fullfiled');
            //     }, 5000); 
            //     reject(new Error('Error is there'));
            // });
            // myPromise7.then((value) => {console.log(value)});
            // myPromise7.catch((error) => {console.log('Recieved an Error')});

        //Using then method we can work on an value and we can respond an error.
        //Example:
            // let myPromise8 = new Promise(function(resolve, reject){
            //     setTimeout(() => console.log('Alternate Way'), 5000),
            //     reject(new Error('Error Found'))});
            // myPromise8.then((value) => console.log(value), (error) => console.log('Error Was Caught'))
    
    //Why Use Promises?
        //Before promises, handling code that took time to complete, like loading data, was more difficult. You had to use something called callbacks, which could get messy and hard to follow, especially when you had to do several things in a row. Promises make this easier by providing a clear way to work with asynchronous code (code that doesn’t run right away). They help you write code that is easier to read and maintain.

    //Promise Chaining:
        //Sometimes, you need to do several things one after another, like load some data, process it, and then display it. With promises, you can do this by chaining then methods:

        //Question: let there is 3 task and there is dependency in them and i want to run them in background in parellaly, when the first task get complete then i want to run the second task in background and when the second task get complete then i want to run the third task in background.
            let task1 = new Promise(function(resolve, reject){
                setTimeout(function(){
                    console.log('Task 1 started');
                },4000);
                resolve (true);
            })
            let task3 = task1.then(function(){
                let task2 = new Promise(function(resolve, reject){
                    setTimeout(function(){
                        console.log('Task 2 started');
                    }, 5000);
                    resolve (true);     
                })
                return task2;
            })
            task3.then(function(value){
                console.log(value);
            });

            //Arrow Function
            let task4 = new Promise ((resolve, reject) => {setTimeout(() => console.log('Task 1 Executed'),7000)
                resolve ('haiderarbaz');
            })
            let task6 = task4.then(() => {
                let task5 = new Promise ((resolve, reject) => {setTimeout(() => console.log('Task 2 Executed'),9000)
                    resolve('Arbaz Haider');
                })
                return task5;
            })
            task6.then ((value) => console.log(value));

        //Question:
            //fetchData().then(function(data) {
                //console.log("Data received:", data);
                // Suppose this is another function that returns a promise
                //return processData(data); 
            //}).then(function(processedData) {
                //console.log("Processed data:", processedData);
            //}).catch(function(error) {
                //console.log("Error:", error);
            //});

            //In the above question:
                //The first then gets the data and passes it to processData.
                //processData returns another promise.
                //The second then handles the result of processData.
                //If anything goes wrong along the way, the catch handles the error.
        
        //How do Promises work in JavaScript?
            //Promises use then() and catch() methods to handle asynchronous results, allowing chaining of operations.

        //What are the states of a Promise?
            //Promises have three states: pending (initial state), fulfilled (successful completion), and rejected (failure).

        //How do you create a Promise in JavaScript?
            //Promises are created using the new Promise() constructor, which takes an executor function with resolve and reject parameters

        //What is Promise chaining?
            //Promise chaining is the practice of sequentially executing asynchronous operations using multiple then() calls on a Promise.

        //Can Promises be canceled in JavaScript?
            //Promises cannot be canceled natively, but techniques like using an external flag or a custom implementation can simulate cancellation.

    //Read these docs for Promise>
        //https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

    //Async & Await:
        //Async and Await in JavaScript is used to simplify handling asynchronous operations using promises. By enabling asynchronous code to appear synchronous, they enhance code readability and make it easier to manage complex asynchronous flows.
        //Special syntax used to work with promises.
        //It always return promise.
        //We can make any function async and can make any function await.

        //Async Function
            //The async function allows us to write promise-based code as if it were synchronous. This ensures that the execution thread is not blocked.

                //Promise Handling: Async functions always return a promise. If a value is returned that is not a promise, JavaScript automatically wraps it in a resolved promise.

            //Async Syntax
                //async function myFunction() {
                //return "Hello";
                //}

            //Example:
                //const getData = async () => {
                    //let data = "Hello World";
                    //return data;
                //}

                //getData().then(data => console.log(data));

                //Output
                    //Hello World
        
        //Await Keyword
            //The await keyword is used to wait for a promise to resolve. It can only be used within an async block.

                //Execution Pause: Await makes the code wait until the promise returns a result, allowing for cleaner and more manageable asynchronous code.
            
            //Syntax
                //let value = await promise;
            
            //Example
                //const getData = async () => {
                    //let y = await "Hello World";
                    //console.log(y);
                //}

                //console.log(1);
                //getData();
                //console.log(2);

                //Output:
                    //1
                    //2
                    //Hello World

        //The async keyword transforms a regular JavaScript function into an asynchronous function, causing it to return a Promise.

        //The await keyword is used inside an async function to pause its execution and wait for a Promise to resolve before continuing.

        //Async/Await Example:
            function asynchronous_operational_method() {
                let first_promise = 
                    new Promise((resolve, reject) => resolve("Hello"));
                let second_promise = 
                    new Promise((resolve, reject) => {
                    setTimeout(() => {
                        resolve(" How you doing..?");
                    }, 1000);
                });
                let combined_promise = 
                    Promise.all([first_promise, second_promise]);
                return combined_promise;
            }
            
            async function display() {
                let data = await asynchronous_operational_method();
                console.log(data);
            }
            
            display();

            //Output:
                //[ 'Hello', ' How you doing..?' ]

            //Explanation:
                // 1.) Promise Creation:
                    //Two promises are created: one resolve immediately with “Hello”, and the other resolves after 1 second with ” How you doing..?”.
                // 2.)Combining Promises:
                    //The Promise.all() method combines both promises into a single promise, combined_promise.
                // 3.)Asynchronous Function:
                    //The display() function is declared as async, indicating it contains asynchronous operations.
                // 4.)Awaiting Promise Resolution:
                    //The await keyword pauses execution until combined_promise is resolved.
                // 5.)Logging Result:
                    //The resolved array from combined_promise is logged to the console.

                //Note
                //To resolve and reject are predefined arguments by JavaScript.

                    //resolve function is used when an asynchronous task is completed and returns the result.
                    //reject function is used when an asynchronous task fails and returns reasons for failure.
        
        //Async/Await Example:
            async function run() {
                return 7;
            }
            console.log(run());
            
            async function utility(){
            let bengaluruWeather = new Promise (function(resolve, reject){
                setTimeout(function(){
                    resolve('The weather of Bengaluru is Good')
                }, 10000);
            });

            let delhiWeather = new Promise (function(resolve, reject){
                setTimeout(function(){
                    resolve('The weather of Delhi is not Good')
                }, 20000);
            });

            let bW = await bengaluruWeather;
            let dW = await delhiWeather;

            return[bW, dW];
            }   
            console.log(utility());

        //Error Handling in Async/Await
            //JavaScript provides predefined arguments for handling promises: resolve and reject.

                //resolve: Used when an asynchronous task is completed successfully.
                //reject: Used when an asynchronous task fails, providing the reason for failure.
            //EXam[ple:
                async function fetchData() {
                    try {
                    let response = await fetch('https://api.example.com/data');
                    let data = await response.json();
                    console.log(data);
                    } catch (error) {
                    console.error('Error fetching data:', error);
                    }
                }
        
        //Advantages of Async and Await
            //Improved Readability: Async and Await allow asynchronous code to be written in a synchronous style, making it easier to read and understand.
            //Error Handling: Using try/catch blocks with async/await simplifies error handling.
            //Avoids Callback Hell: Async and Await prevent nested callbacks and complex promise chains, making the code more linear and readable.
            //Better Debugging: Debugging async/await code is more intuitive since it behaves similarly to synchronous code.

        //Conclusion
            //Async and Await in JavaScript have revolutionized asynchronous programming by making code more readable and maintainable. By allowing asynchronous code to be written in a synchronous style, they reduce the complexity associated with callbacks and promise chaining. Understanding and using async and await effectively can significantly enhance your JavaScript programming skills, making it easier to handle asynchronous operations in your projects.


    //Fetch API:
        //It returns a promise.
        //get call using fetch api.
            async function userDetail(){
                let user = await fetch ('https://jsonplaceholder.typicode.com/posts/1');
                let output = await user.json(); //converting user into json javascript object notation (json).
                console.log(output);
            }
            userDetail();
        
            //fetch('url', options) we can send object in options.

        //post call using fetch api.
            async function helper(){
                let options = {
                    method: 'POST',
                    body: JSON.stringify({
                      title: 'North',
                      body: 'Bihar',
                      userId: 1,
                      population: '3 crore',
                    }),
                    headers: {
                      'Content-type': 'application/json; charset=UTF-8',
                    },
                  }
    
                let user1 = await fetch ('https://jsonplaceholder.typicode.com/posts', options);
                let response = user1.json()
                return response;
            }
            async function utilities(){
                let ans = await helper();
                console.log(ans);
            }
            utilities();

    //Closures
            
            function init(){
                var name = "Mozilla" //name is a local vriable created by init
                function displayName(){
                    //displayName() is the inner function, that forms the closure
                    console.log(name); //use variable declared in the parent function
                }
                displayName();
            }
            init();
            
            


            