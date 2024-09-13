'use strict';

console.log('Hey! How You Doing?')

//API:
    //Application Programming Interface.
        //Interface: 
            //a point where two systems, subjects, organizations, etc. meet and interact.
            //In Computing
            //a device or program enabling a user to communicate with a computer.

    //get Call
    //post call
    //put call
    //delete call

    //features of async code
        //clean and concise
        //better error handling
        //Eassier debugging

//Promise:
    //We use promise for parallel execution in background.
    //And it's a async code.

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
        //
            


            