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

    //Promise Chaining:
        //

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

    //Async Await:
        //Special syntax used to work with promises.
        //It always return promise.
        //We can make any function async and can make any function await.
        
        //How to create async function
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
            
            


            