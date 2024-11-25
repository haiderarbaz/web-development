"use strict";

console.log("Modern JS and DOM 1");

//Window:
//It is a global object and we can acsess it anywhere, this is created by browser and it represent a browser window.
//DOM, BOM and JS core function (like arrays, objects, functions) lies inside this window object.
//It is a top level entity.
//By this window object we can control browser window.

//DOM:
//DOM stands for Document Object Model.
//We conevrt all the webpage of html code into JavaScript Object and it is called document and the whole model is call Document object Model.
//document: by using this keyword we can see document of a webpage.
//document.body: by using this keyword we can see body of a webpage.

//BOM:
//BOM is a Browser Object Model.
//It allows JavaScripts to talk to browser about matters other than content of page.
//If you want to communicate to browser about matters other than content of page then we can say we are using BOM.

//DOM: DOCUMENTS OBJECT MODEL
//It's a tree like structure.

//getElementById() Method:
//Returns the element having the given id value.
//The getElementById() method returns the elements that have given an ID which is passed to the function. This function is a widely used HTML DOM method in web designing to change the value of any particular element or get a particular element. If the passed ID to the function does not exist then it returns null.

//Note: Each ID needs to be unique. If there are multiple elements with the same ID, only the first one will be returned.

//Syntax:
//document.getElementById( element_ID )

//Parameter: This function accepts single parameter element_ID which is used to hold the ID of the element.
//Return Value: It returns the object of the given ID. If no element exists with the given ID then it returns null.

//Eg:
//document.getElementById("specifications")
//It will return the element whose id will be "specifications".

//document.getElementById("")
//It will return null.

//Note:
//It is called on document object.
//It returns a single object.

//getElementsByClassName() Method
//Returns all the elements having the given class name.
//The getElementsByClassName() method in Javascript returns an object containing all the elements with the specified class names in the document as objects. Each element in the returned object can be accessed by its index. The index value will start with 0. This method can be called upon by any individual element to search for its descendant elements with the specified class names.

//Syntax:
//document.getElementsByClassName(classnames);

//Parameters: This is a required method that takes only one parameter, which is a string containing space-separated class names of the elements that are to be searched for. For searching with multiple class names, it must be separated with space.

//Eg:
//getElementsByClassName("hidden")
//It will return the multiple elements (array like object/HTML Collection) which have classname "hidden"

//Note:
//It will return an array like object (not array)(HTML Collection) and we can itrate it using for loop.
//We can use the length property that returns the collection of all HTML elements in a document for the specified class name & then by looping through the HTML elements, we can take the information that wants.

//getElementsByTagName() Method
//Returns all the elements having the given tag name.
//The getElementsByTagName() method in the HTML DOM allows the selection of elements by their tag name. It returns a collection of elements with the specified tag name within the specified document or element.
//To extract any info just iterate through all the elements using the length property.

//Syntax:
//let elements = document.getElementsByTagName(name);

//Parameters:
//Elements is a collection of all the found elements in the order they appear with the given tag name.
//Name is a string representing the name of the elements. The special string “*” represents all elements.

//NOTE: Things to keep in mind for getElementsByClassName() Method & getElementsByTagName() Method
//Both method use document object
//Both return multiple items
//The list return is not an array, it's an HTML Collection.
//We can itrate it using lenth property or using loop.

//$0 ==> If we select an particular element or we hover on it and the we write $0 on console then we can equate that particular with any variable.
//Eg:
//$0
//it will return return, <span class="text_textpara"></span>
//let para = $0; we equate the above element in para.
//and when we will write "para" then it will return the same element.

//querySelector() Method:
//It will always return single object output.

//querySelector("#header"); //it will return the id name header
//querySelector(".header"); //it will return the calss name header and it will return single element.
//querySelector("header"); //it will return the tag name header and it will return only the first tag whose name is header.

//Eg:
//document.querySelector(".text-textpara");

//and we can quate this
//let a = document.querySelector(".text-textpara")

//querySlectorAll() Method:
//It will return multiple element in output.

//We can Update Existing Content of Webpage by using these below properties
// A.) .innerHtML
//It will gets an element OR return all of it's descendents
//And it will set an element's of HTML content.

//Eg:
//first we wiil fetch
//let codingEx = document.querySelector(".code-examle"); (it's a class name)
//codingEx; //then we print it

//then we will use .innerHTML property
//codingEx.innerHTML; //this will show all the inner HTML which is present in the calss.
//codeingEX.innerHTML = ' '; we can emptly it by using this.

// B.) .outerHTML
// C.) .textContent
// D.) .innerText

//Adding new element/content
// A.)createElement();
//first we will fetch
//let content = document.querySelector(".paraClass");
//then we will create an element
//let newPara = document.createElement("p");
//then we will add this element in the content using appendChild ();
//content.appendChild(newPara);

//Note:
//appendChild method will always add at the end of the element.

//Creating A Text-Node:
//First Method
//first we will create an element
//let newPara = document.createElement("p");
//then we add a text in the newPara
//let textPara = document.createTextNode("I am the Text");
//then we will add this text node in the newPara
//newPara = appendChild(textPara):
//the we will add this newPara in the content
//content.appendChild(newPara); //this create always lat sibling

//Second Method (Easy Method)
//first we will create the element
//let newPara = document.createElement("p");
//then we will change the text content of newPara
//newPara.textContent = "I am the text";
//the we will add this newPara in the content
//content.appendChild("newPara"); //this create always lat sibling

//insertAdjacentHTML();
//by using this method we can position our newly created elements.

//Thing to be keep in mind while using this method.
//It has to be called with 2 arguments
//where you want to locate/Position the newly created element
//which HTML text/content you want to add/insert

//for positioning the content we have 4 properties
// a.) beforebegin
//It insert HTML text as previous sibling
// b.) afterbegin
//It insert HTML text as first child.
// c.) beforeend
//It insert HTML text as Last child.
// d.) afterend
//It insert HTML text as following sibling.

//Eg:
//first we will find an element
//$0;
//then we will equate it with content
//let content = $0;

//then we will prepare the HTML content which we want to add
//then we will create an element
//let newText = document.createElement("h3");
//then we will create a Text Node
//newText.textContent = "abcd";
//we want this tag to add beforebegin
//content.indsertAdjacentHTML("beforeBegin, newText")

//Removing an element
//removeChild() Method
//Thing to be keep in mind while using this method.
//We should know the parent element of the element which are going to remove.
//And we sholud the child element which we are going to remove.
//Syntax:
//content.removeChild(childElement);

//parent = childElement.parent
//By using this we can get parent element.

//Eg:
//

//Style page content
//we can style page content by using these properties
//.style
//.cssText
//.setAttribute
//.className
//.classList
