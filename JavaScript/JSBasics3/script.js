'use strict';

console.log('Hey Arbaz');

//In-Built Object

  //Math Object:

    //It's generates a Random Number
      Math.random();

    //It's generates PI Value  
      Math.PI

    //It's will round off a number
      Math.round(1.8); //2
      Math.round(1.2); //1
      Math.round(1.6); //2

    //It will give max number from a group of number
      Math.max(2,8,4,6,5,9);
      Math.max(20,800,48,6000,5.9,99999.9999);

    //It will give min number from a group of number
      Math.min(5,4,9,2,3,1);

    //It will give absolute value of a number
      Math.abs(2);
      Math.abs(-2);

//String-------------------------------------------------------------------------------------------------------------------------------------
  //JavaScript have 2 types of string 1)Primitive, 2)Object

    //1) Primitive String
      let lastName = 'Haider';
      console.log(typeof(lastName)); //object
      console.log(lastName[0]); //H

      //we can change primitive string into object string by using dot notations. JavaScript will treat this string as a object internally beacuse of JavaScript behaviour.
      console.log(lastName.length); //6
      console.log(lastName.includes('de')); //True
      console.log(lastName.startsWith('Ha'));
      console.log(lastName.startsWith('ha')); //output will be false because H is capital and here we give the input as small h.
      console.log(lastName.endsWith('er')); //True
      console.log(lastName.indexOf('d')); //3
      console.log(lastName.toUpperCase()); //HAIDER
      console.log(lastName.toLowerCase()); //haider

      let lastName1 = '  Suleman ';
      console.log(lastName1.trim()); //Suleman //it will trim the spaces(starting and ending both)
      console.log(lastName1.replace('Sule', 'Us')); //'  Usman '

    //2) Object String
      let firstName = new String ('Arbaz'); //used string constructor function
      console.log(typeof(firstName));
      console.log(firstName.length);

      let messsage = 'Hey! How You Doing?';
      let words = messsage.split(' ');
      console.log(words); // (4) ['Hey!', 'How', 'You', 'Doing?']
      let wordss = messsage.replace('You','U');
      console.log(wordss);
      

//Template literal (We use backtick)---------------------------------------------------------------------------------------------------------------------------
      
      let message = 'This is \n my \n first \n Message';
      console.log(message);

      let message0 = 'This is \n my \n \' "first" \n Message';
      console.log(message0);
      
      let messsage1 = 
     `This 
      is 
      my 
      first 
      message`;
      console.log(messsage1);
      
      let text = 
      `Hello Arbaz

      How You Doing? 

      From 
      Nasim`;

      console.log(text);

      let text2 = `Hey ${firstName}

      How's your study going On?
      How's your Healyh?

      From
      Nasim`

      console.log(text2);

//Date and Time Object-------------------------------------------------------------------------------
      let date = new Date();
      console.log(date);

      let date1 = new Date('May 18 1997 10:20')
      console.log(date1);
      date1.getFullYear();
      console.log(date1);

      let date2 = new Date(1997, 4, 18, 10);//indexing of month is starting from 0.
      console.log(date2);

      let date3 = new Date(1997, 11, 12, 12);
      console.log(date3);
      date3.setFullYear(1998);
      console.log(date3);
      date3.setDate(24);
      console.log(date3);
      date3.getDate();
      console.log(date3);