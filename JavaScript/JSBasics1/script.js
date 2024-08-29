// line below is used to print on the console window
console.log('Assallamo Alaikum');
console.log('Assallamo Alaikum Version 2');
console.log('Hello Jee Version 1');
console.log("Arbaz")

//JavaScript is a Dynamic Typed language.

    //Variable
        //Named memory location is called varibale.
    
    //JavaScript Variables
        //Creating a variable in JavaScript is called "declaring" a variable. You declare a JavaScript variable with the var or the let keyword.

    //How to create/declare variable?
        //By using let & var keyword we can create variable.
         let z = 2;
         console.log(z);

         var y = 9;
         console.log(y);
         
         

            //By using let keyword we can store any type of data.
             let a = 5;
             console.log(a);
            
             let b = 'true';
             console.log(b);

             let nickName = 'Arbuu'
             console.log(nickName);

    //what is difference between let & var?
        //var is global scope and let is local scope.

    //Constants
        //A value that cannot be change is called constants.
        //const num = 12;
        //num = 13;

    //Rules for naming variable
        //cannot be a reserved keyword
        //cannot start with a number
        //cannot contain space or '-'
        //Use of Camelcase eg:- firstName, arbazHaider, ageOfStudent
    
    
    //Datatypes

     //Primitive Datatypes

        //String
         //A sequence of characters

        //Number
         //1,2,3; 1.23, 12.05

        //Boolean
         //True or False

        //Undefined
         //A variable that is not defined it will give the output undefined

        //Null
         //Empty Variable

    //Dynamic Typing
    
     let lastName = 'Haider';
     console.log(lastName);
    
     lastName = 3;
     console.log(lastName);
    
     let firstName = 'Arbaz';
     console.log(firstName);

     firstName = 5;
     console.log(firstName);

    //Reference Types
     //Objects
       //If multiple variables are linked in together then we call it's a objects.
       //Objects have properties & behaviours
       //Eg:- fisrtName = Arbaz; age = 24; then we create an object called person, & it will have property.
       //Syntax
            let person = {
                officialName: 'Arbaz',
                age: 24,
            };
            console.log(person);

       //How to access these properties
         // 1: Dot Notations
            person.age;
         // 2: Bracket Notations
            person ['age'];
       
    
     //Arrays
       //A data structures which is used to contain a list of items.
         //Declarization:
           let names = ['love', 'hate', 'dhoka'];
         //How to access elements on array?
           //By using index values
             names[1], names[0], names[2];
    
    
     //Functions

    //operators
     //Arithmetic
       //Addition(+), Substraction(-), Multiplication(x), Division(/), Reminder Operator(%), Exponantial Operator(xx) 
         let m = 2;
         let n = 4;
         let o = m+n;
         console.log(o);
         console.log(m*n);
         console.log(n-m);
         console.log(n/m);
         console.log(n%m);
         console.log(m**n);
     
     //Pre/Post Increament/Decreament
     
     
     //Assignment
       //

     //Comparision
       // GreaterThan(>), LessThan(<), GreaterThan Equalto(>=), LessThan Equalto(<=), Loose Equality(==), Strict Equality(===), Not Equality(!==)
         console.log(2>3);
         console.log(3<4);
         console.log(3>=3);
         console.log(5<=6);
         console.log(3===4);
         console.log(5===5);
         console.log(4!==5);
        //Equality Operator: 
          //Loose Equality(==), Value Check
          //Strict Equality(===), Data Check as well as Value Check
     
     //Ternary Operator or Conditional Operator     
        let age = 17;
        let status = (age>=18) ? 'Yes Vote' : 'No Vote';
        console.log(status);
        
     //Bitwise
       //Bitwise AND
       //Bitwise OR 

     //Logical
       //AND(&&), All condition have to be true
       //OR(||), Any single condition is true
       //NOT(!)

    //Control Statements
      //if-else
        //Syntax
        //if (condition) (use single time)
          {
            //code--------
          }
        //elseif () (we can use this multiple time)
          {
            //code--------
          }
        //else (use single time)
          {
            //code--------
          }
        //Eg:
        let marks = 98;
        if (marks>=90){
            console.log('A');
        }
        else if (marks>=80){
            console.log('B');
        }
        else if (marks>=70){
            console.log('C');
        }
        else if (marks>=60){
            console.log('D');
        }
        else {
            console.log('E');  
        }
              

      //Switch
        //Syntax
          //Switch (expression){
            //case 1 :
            //break;
            //case 2 :
            //break;
            //case 3 :
            //break;
            //default :
            //break;
            //}
        //Eg:
        let num = 2;

        switch(num) {
            case 1: console.log('A');
            break;
            case 2: console.log('B');
            break;
            case 3: console.log('C');
            break;
            default: console.log(D);
        }

    //Loops:
      //for loop
        //Syntax
        //for (initialization(let i = 0);, condition(i<10);, increament/decreament/updation(i++))
        //{
            //console.log(i);
        //}

        for (let i = 0; i<5; i=i+1)
        {
          console.log(i);
        }
      
      //while loop
        //Syntax
        //initializatio(let i = 0);
        //while(condition (i<10);){

            //code-----------

            //inc/dec/updation(i++);
        //}

        let j = 1;
        while (j<=5){
          console.log(j);
          j++;
        }

      //Do-while loop
        //Syntax
        //initialization(let i = 0);
        //do{

            //code---------------

            //inc/dec/updation (i++);

        //}while (condition (i<10);)

        let k =1;
        do {
          console.log(k);
          k++; 
        } while(k<10);

    //Iterating through object
      //for-in loop
        let rectangle = {
          length: 1,
          breadth: 4
        };
        for(let key in rectangle) {
          //key are reflected through key variable
          //values are reflected through rectangle[key]
          console.log(key, rectangle[key]);
        }
      
      //for-of loop
        let rectangle1 = {
          length: 1,
          breadth: 4
        };
        for(let key of Object.keys(rectangle1)){
          console.log(key);
        }
        for(let key of Object.entries(rectangle1)){
          console.log(key);
        }

    //How to check any properties is exists in any object or not.
        if('color' in rectangle){
          console.log('Present');
        }
        else {
          console.log('Absent');
        }

        if('length' in rectangle){
          console.log('Present');
        }
        else{
          console.log('Absent');
        }
      


