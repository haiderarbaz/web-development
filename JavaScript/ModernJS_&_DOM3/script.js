"use strict";

console.log("Hi ! How you doing?");
console.log("Today Topic is about Peformance & Event Loop");

//Performance
    //How to measure speed of code? if we have two snippets of code we have to find out, which snippets of code will run fast.
    //How to write efficient and performing code? Best Practice

    //standard way to measure how long your code takes to run
        //for this we use method performance.now()
            //performance.now() method return a time stamp and on the basis of this time stamp we can know how much time the code is taking to run. 

    //adding 100 para

        const t1 = performance.now();
        for (let i=1; i<=100; i++){
            let newElement = document.createElement('p');
            newElement.textContent = 'This is para ' + i;

            document.body.appendChild(newElement);
        }
        const t2 = performance.now();
        console.log("Time took " + (t2-t1) + " ms");
        

    //optimising a bit
        
        const t3 = performance.now();
        let myDiv = document.createElement('div');

        for(let i=1; i<=100; i++){
            let newElement1 = document.createElement('p');
            newElement1.textContent = 'This is about ' + i;
            
            myDiv.appendChild(newElement1);
        }
        document.body.appendChild(myDiv); // 100 Reflow & 100 Repaint
        const t4 = performance.now()
        console.log("Time took " + (t4-t3) + " ms");

    //Reflow
        //Reflow happens when a browser recalculates the position and geometry of certain parts of a webpage, such as after an update on an interactive site. 
        //It is the process of calculating the dimensions and position of page element these are the computationaly intensive task. 

    //Repaint
        //This tends to be followed by repainting, which is when the browser redraws the webpage to show the resulting visual updates.
        //It is the process of drawing pixels to the screen up.
        //Repaint is faster than reflow. 

    //Document Fragement
        //The DocumentFragment interface represents a minimal document object that has no parent.
        //It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is due to the fact that the document fragment isn't part of the active document tree structure. Changes made to the fragment don't affect the document.
        //There is zero/no reflow and repaint for the addition we do in document fragement.
        //When we will add this document fragement in actual document then 1 reflow and 1 repaint will be happen.

    //Using Fragement we can enhance the code
        
        const t5 = performance.now()
        let fragement = document.createDocumentFragment();
        for(let i=1; i<=100; i++){
            let newElement2 = document.createElement('h1');
            newElement2.textContent = "This is heading " + i;

            fragement.appendChild(newElement2);
        }
        document.body.appendChild(fragement); // 1 Reflow & 1 Repaint

        const t6 = performance.now()
        console.log("Time Took " + (t6-t5) + " ms");
        //We can use this in case when have to update the DOM multiple time.
        //This is the optimal practice & best practice, because here the no. of reflow and no. of repaint has less normal case and nearly in negligible.

//Single-Threading
    //A single-threaded language is one that can execute only one task at a time. The program will execute the tasks in sequence, and each task must complete before the next task starts.
    //JavaScript is a single threaded langauage. And it process one command at a time.
        
        function addPara(){
            let para = document.createElement("h2");
            para.textContent = "JS is Single Threaded Language";

            document.body.appendChild(para);
        }
        
        function appendNewMessage(){
            let para = document.createElement("h3");
            para.textContent = "Kya haal tussi";

            document.body.appendChild(para);
        }

        addPara();
        appendNewMessage();  

        //Observation:
            //Run-to-complition nature of code.
            //JS doesn't execute multiple lines/functions at the same time.

//Call Stack
    //A call stack is a mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
    //OR
    //It keeps track of the order in which functions are called and manages the context of each function's execution.
    //Here's what it does: Remembering where to go back: When a function is called, the call stack remembers where to go back to when that function is done.
    //It operates as a Last In, First Out (LIFO) data structure, meaning that the last function called is the first one to be resolved.

    //Points:
    //When a script calls a function, the interpreter adds it to the call stack and then starts carrying out the function.
    //Any functions that are called by that function are added to the call stack further up, and run where their calls are reached.
    //When the current function is finished, the interpreter takes it off the stack and resumes execution where it left off in the last code listing.
    //If the stack takes up more space than it was assigned, a "stack overflow" error is thrown.

    //Example:
        function greeting() {
            let hi = document.createElement("h4");
            sayHi();
            hi.textContent = "Hey ! Where Are You?";
        }
        function sayHi() {
            return "Hi!";
        }
        
        // Invoke the `greeting` function
        greeting();
      
    //The call stack will be empty at the very beginning, and the code above would be executed like this:
        //When the code loads in memory, the global execution context gets pushed in the stack.
        //Ignore all functions, until it reaches the greeting() function invocation.
        //Add the greeting() function to the call stack list, and we have:
            // - greeting
        //Execute all lines of code inside the greeting() function.
        //Get to the sayHi() function invocation.
        //Add the sayHi() function to the call stack list, like:
            // - sayHi
            // - greeting
        //Execute all lines of code inside the sayHi() function, until reaches its end.
        //Return execution to the line that invoked sayHi() and continue executing the rest of the greeting() function.
        //Delete the sayHi() function from our call stack list. Now the call stack looks like:
            // - greeting
        //When everything inside the greeting() function has been executed, return to its invoking line to continue executing the rest of the JS code.
        //Delete the greeting() function from the call stack list. Once again, the call stack become empty.

    //Overall Summary:
        //we start with an empty Call Stack. Whenever we invoke a function, it is automatically added to the Call Stack. Once the function has executed all of its code, it is automatically removed from the Call Stack. Ultimately, the Stack is empty again.

        function a(){
            console.log("Hi");
        }
        function b(){
            console.log("Hello");
            a();
        }
        a();
        b();
    
//Event Loop
    //Read about it on MDN and Geks for Geeks

//setTimeOut() Method
    //
        setTimeout(function(){
            console.log("Hey ! How You Doing"); 
        }), 5000;

        //Majorly Used, Read about this on MDN, Stack Overflow, Median Article and check Philip Robert talk abou this or not in his 26 mminuets video. 
        setTimeout(function(){
            console.log("Hey ! How You Doing"); 
        }), 0;
        //Whenever you're trying to defer something until the stack is clear



