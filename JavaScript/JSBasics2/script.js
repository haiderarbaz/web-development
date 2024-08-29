'use strict';

//Objects: An object is an entity which has many properties. And object have collection of key value pairs.
  //E.g: Car[Name, colour, weight];

  //objects creation-------------------------------------------
    const rectangle = {
    length: 1,
    breadth: 2,

    //first way
         draw(){
            console.log('drawing rectangle');
         },

    //second way
         draw: function(){
            console.log('drawing rectangleeeeee');
         }
    };


  //factory function--------------------------------------------------------------------------------------

  //Type1--------------------------------
  //Method1
    function createRectangle(len, bre){
     const rectangle = {
         length: len,
         breadth: bre,
         draw: function(){
             console.log('drawing rectangle');
         }
     };
     return rectangle;
     }
     const rectangleObj1 = createRectangle(3,4);
     const rectangle2 = createRectangle(7,8);
     const rectangle3 = createRectangle(6,7);
     let rectangle4 = createRectangle(8,9);
     let rectangleObj2 = createRectangle(3,3);

  //method2
    function createRectanglee(length, breadth){
     const rectangle = {
         length,
         breadth,
         draw: function(){
             console.log('drawing rectangle');
         }
     };
     return rectangle;
     }
     const rectangleObj3 = createRectanglee(4,4);
     const rectangle5 = createRectanglee(7,6);
     const rectangle6 = createRectanglee(6,5);
     let rectangle7 = createRectanglee(8,4);
     let rectangleObj4 = createRectanglee(2,2);

  //Type2---------------------------
    // function createRectangleee(len, bre){
    //  return rectangle = {
    //      length: len,
    //      breadth: bre,
    //      draw: function(){
    //          console.log('drawing rectangle');
    //      }
    //  };
    // } 
    //  const rectangleObj5 = createRectangleee(4,4);
    //  const rectangle8 = createRectangleee(7,6);
    //  const rectangle9 = createRectangleee(6,5);
    //  let rectangle10 = createRectangleee(8,4);
    //  let rectangleObj6 = createRectangleee(2,2);


  //constructor function--------------------------------------------------------------------------------------------
   //It is a function which is initialize or defines the properties or methods
   //constructor function follows pascal notations -> first letter of every word is capital ->eg; NameOfObject
     function Rectangle(leng, bread) {
     this.length = leng;
     this.breadth = bread;
     this.draw = function() {
        console.log('drawing');
     }
    };

  //object creation using constructor function
     let rectangleObject = new Rectangle(2, 4);

  //Dynamic nature of object: we can add and delete any property in object.
     rectangleObject.color = 'yellow';
     console.log(rectangleObject);

     delete rectangleObject.color;
     console.log(rectangleObject);

     let Rectangle1 = new Function (
        'length', 'breadth',
        `this.length = length;
        this.breadth = breadth;
        this.draw = function() {
            console.log('drwaning');
        }` 
    )
     // object creation using Rectangle1
     let rect = new Rectangle1(2,3)
     console.log(rect);

  //below is how we can call/access/invoke function properties/method by using . (dot operator)------------------------------------
     // rectangle.length;
     // rectangle.breadth;
     // rectangle.draw;
     // rectangle.draw();

  //Types in JS
     //Primitive or Value Types
       //Primitive are copied by their values.

     //Refrence or Object Types
       //Refrences are copied by their address/refrence.

     let g = 10;
     let h = g;
     g++;
     console.log(g);
     console.log(h);
     
    //  let a = {value:10};
    //  let b = a;
    //  a.value++;
    //  console.log(a.value);
    //  console.log(b.value);

    //  let e = 10;
    //  function inc (e){
    //     e++;
    //  }
    //  inc (e);
    //  console.log(e);

     let f = {value:11};
     function inc(f){
        f.value++;
     }
     inc(f);
     console.log(f.value);
     

    //const rectangle1 = {
    //     length: 1,
    //     breadth: 2,

    //     draw: function(){
    //         console.log('drawing rectangle');
    //     }
    // };

    // const rectangle2 = {
    //     length: 1,
    //     breadth: 2,

    //     draw: function(){
    //         console.log('drawing rectangle');
    //     }
    // };

  //Object Cloning
    // 1 --> iteration
      let src = {
      a:10,
      b:20,
      c:30
    };
      let dest = {};

      for (let key in src) {
      dest [key] = src [key]
    };
      console.log(dest);

    //How to check cloning is done or not?
      src.a++ //we will increase source(src) key a with (a++) 
      console.log(dest); //and we will check that the destination key is getting changed or not, if it's value is not changing then we have successfully clone the src object to dest object.

    // 2 --> Assign
     let src1 = {
     a:40,
     b:50,
     c:60
    };
     let src2 = {value: 25};

     let dest1 = Object.assign ({}, src1, src2); //we can copy multiple object properties/multiple src properties in one object/one dest by using assign function.

     console.log(dest1);

     src1.a++
     console.log(dest1);

    // 3 --> Spread
     let src3 ={
     a:70,
     b:80,
     c:90
   };
     let dest2 = {...src3};
     console.log(dest2);

     src3.a++;
     console.log(dest2);