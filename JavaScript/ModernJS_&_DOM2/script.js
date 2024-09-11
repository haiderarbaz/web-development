"use strict";

console.log("Browser Events");

//Events OR Browser Events:
    //Events are fired inside the browser window, and tend to be attached to a specific item that resides in it. 
    //This might be a single element, a set of elements, the HTML document loaded in the current tab, or the entire browser window.
    //JavaScript Events are actions or occurrences that happen in the browser. They can be triggered by various user interactions or by the browser itself.
    //Common events include mouse clicks, keyboard presses, page loads, and form submissions.
    //For Example:
        //The user selects, clicks, or hovers the cursor over a certain element.
        //The user chooses a key on the keyboard.
        //The user resizes or closes the browser window.
        //A web page finishes loading.
        //A form is submitted.
        //A video is played, paused, or ends.
        //An error occurs.

    //monitorEvents():
        //By using this method we can see the events which is triggered.
        //By using this we can turn on the events.

        //For Example:
            //monitorEvents(document);

    //unMonitorEvents();
        //By using this method we can turned off the events.

    //Classes are like blue print.
    //Objects are like reality.
    //Interface in javascript are like blue print.
    //eventTarget:
        //It is a top level entity/interface which don't have any parent.
        //Node inherit from eventTarget.
        //Elements inherit from node.
            //inherit:

        //eventTarget is like a interface which provides blueprint, implemented by objects that can recieve events and may have listeners for them.
        //Methods in eventTarget:
            // a.) addEventListener();
            // b.) removeEventListener();
            // c.) dispatchEvent();
        
            //listeners:
                //listeners defines that how to respond an events after recieveing it.)
                //For Example:
                    //When browser throws an event like the user has click an button then listners will decide after clicking the button what will happen.

        // a.) addEventListener:
            //we can listen to event OR we can respond to event OR we can hook into event.
            //pseudocode:
                //<event-target>.addEventListener(<event-to-listen-for>,<function-to-run-when-event-happened>)
            //things we need to addEventListener
                // i.) event-target
                    //this tells for which component you want to apply listener.
                // ii.) event-type
                    //click, doubleclick, scroll.
                // iii.) function
                    //define what to do when event happen.

                //for example.

                //first example:
                    //  document.addEventListener("click", function(){
                    //      console.log("I clicked on event");
                    //  });
                    //here document is event-target/component.
                
                //second example:
                    // let content = document.querySelector("h1");
                    //  content;
                    //  content.addEventListener("click", function(){
                    //  content.style.backgroundcolor = "red";
                    //  });

        // b.) removeEventListener()
            //This method requires you to pass the same exact listener function to it as the one you have pass to addEvenetListener.
            //removeEventListener will work when these 3 condition will be fullfill
                // a.) same event target
                // b.) same event type
                // c.) same function

                // == Loose equality
                    //In loose any one is same either value or type then it will retturn True.
                    //It allows type coercion.
                        //Type Coercion:
                            //Type coercion is the automatic conversion of values from one data type to another. It's often used to make data types compatible when performing operations or comparisons.
                // === strict equality
                    //In strict equality both value and type should be same then it will return true else it will return false.     
                    //It prevent from type coercion.
        
            //for example:
                // function eventFunction(){
                //     console.log("I clicked on the document");
                // };

                // document.addEventListener("click", eventFunction);

                // document.removeEventListener("click", eventFunction);
        
        // c.) dispatchEvent();
    
    //monitorEvent()
        //by using this method we can check the active events. 

    //Phases of an event:
        //There are 3 pahses of an event:
                // a.) Capturing phase
                // b.) At target phase
                // c.) Bubbling phase 
                //Note: By default event execute in bubbling phase if want to control the event then you have to pass "true" as a third argument in addEventListener.
    
    //The Event Object:
        //When an event occurs, addEventListener function will get an event object and inside this event object there is a lot of information about event.

                //if you want to see event object then you can pass event in function and then log it.
                    //for example:
                        const content = document.querySelector('p');

                        content.addEventListener('click', function(event) {
                            console.log(event); 
                        });

    //How to change the Default Action by using Event.preventDefault() Method.
        let links = document.querySelectorAll('a');
        let thirdLink = links[2];

        thirdLink.addEventListener('click', function(event){
            event.preventDefault();
            console.log("Darr ke aagey jeet hai");
            
        });
    
    //How to avoid too many events

        // let myDiv = document.createElement('div'); //creation of div using createElement

        // for(let i=1; i<=100; i++){
        //     let newElement = document.createElement('p'); //creation of new element and added a pragraph using createElement
        //     newElement.textContent = 'This is para ' + i; //added a text content in para usinng textContent

        //     newElement.addEventListener('click', function(event) {  //apply a event listener using addEventListener
        //         console.log('I have clicked on para');
                
        //     });
        //     myDiv.appendChild(newElement); //we added the newElement in myDiv
        // }
        // document.body.appendChild(myDiv); //we added the myDiv in document body

        //first we created a div and we are running 100 itration and inside every one iteration we created a paragraph element and then add into Div. We attach an event listener with every single paragraph element and then we attach the div to document.

    //can we optimize the above code?
    //Event Target & Node Name

        let myDiv1 = document.createElement('div'); //creation of div using createElement

        //first we will take out the function from "for loop" and then we will name the function 
        function paraStatus(event) {
            console.log('Para' + event.target.textContent); //the element on which event will occur their text should be print.
                //by doing this after applying eventListener to div we can access the individual paragraph using event.target property.
            };
        
        //second we will remove the event listener from newElement and add it to the div and take it out from "for loop". By doing it We created a single maping for div rather than 100 maping to paragraph because all paragraph are coming inside div.
        myDiv1.addEventListener('click', paraStatus);

        //but there is one issue; earlier we can access the paragraph individually but now by adding listener to the div when we will click anywhere inside the div the listener will execute. By doing it we will loose the paragraphs individuality and now we can access the whole div and when we wiil click inside the div the listener will execute.
        //to overcome this and make it to paragraph specific we will go inside the function and we will use target phase.

        for(let i=1; i<=100; i++){
            let newElement = document.createElement('p'); 
            newElement.textContent = 'This is para ' + i; 

            myDiv1.appendChild(newElement);
        }
        document.body.appendChild(myDiv1); //we added the myDiv in document body

    //Para & Span

        //In the below code we want that the function and eventListener should be execute when we click on span not on para.
            // let element = document.querySelector('article')
            // element.addEventListener('click', function(event){
            //     console.log('click on span' + event.target.textContent);
                
            // });
        //But the above code is running for both cases either we click Para or Span and we want to stop it for Para.
        //to overcome from this type of issue we have property a nodeName.

            let element1 = document.querySelector('article')
            element1.addEventListener('click', function(event){
                if(event.target.nodeName === 'SPAN')
                console.log('click on span' + event.target.textContent);
                
            });
            
            //By doing it we can do filtering on specific tags using JS.

                        
