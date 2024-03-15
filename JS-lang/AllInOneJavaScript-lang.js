// // "use strict"


/////VARIABLES
// const accountId = "23ca29vjjbsf" // const once assigned can't be reassignedṇ
// var accountName = "sidduganesh" //var is old style , not good practice
// let accountEmail = "sidduganeshengineer@gmail.com" // let has the block scope
// accountStatus //error: like this also varialbe can be declared. //in modern practice it is not recommended
// // accoutStatus; //accountStatus is not defined
// let account; //undefined

// console.log(accountName); //sidduganesh
// console.log(accountStatus); //ReferenceError: accountStatus is not defined
// console.log(account);//undefined
// console.table([accountId, accountName, accountEmail])

////////////////////
//typeof
//data conversion

// let score = 33
// console.log(score);
// console.log(typeof score); //number
// console.log(typeof(score)); //number

// score = "53"
// console.log(typeof score);
// //for each data type their is an equivalent class
// // number -> Number
// let scoreInNumber = Number(score);
// console.log("typeof score = "+typeof score + " "+score);
// console.log("typeof scoreInNumber = "+typeof scoreInNumber+ " "+score);

////
//const xyz; //SyntaxError: Missing initializer in const declaration//const must has to be declared.
// let xyz;
// console.log(typeof undefined); //undefined
// console.log(typeof null); //object
// console.log(typeof NaN); //number
// console.log(typeof "");
// console.log(typeof ABCD);//undefined //variable ABCD is not declared but typeof shows the undefined.
// // console.log(ABCD);//ReferenceError: ABCD is not defined
// console.log(typeof xyz);//let , var //undefined //declared but not initialized
// console.log(xyz);//undefined means declared but not initialized.

/////
// console.log(2+2);//4
// console.log(2-2);//0
// console.log(2*2);//4
// console.log(2/2);//1
// console.log(2%2);//0
// console.log(2**2);//4


////
// console.log(1+"2");
// console.log("1"+2);
// console.log(2+2+"3");
// console.log(2+"3"+2+1);

////
// console.log(2*3/5);//1.2
// console.log(2/3*5);//3.333333.....
// console.log(1/0);//Infinity
// console.log(); //nothing it print // like a break line
// // console.log(siddu);//ReferenceError: siddu is not defined
// console.log("siddu");


/////OPERATORS
//


////comparision
//when u compare the both types has to be same
//typescript won't allows to compare both of different types

// console.log("2">1);//true
// console.log("02">1);//false
// console.log("02"<"3");//true
// console.log("02"<"a");//true //why //how
// // console.log(2<a);//ReferenceError: a is not defined

/** 
// console.log(null>0);//false
// console.log(null<0);//false
// console.log(null>=0);//true //null is converted to 0
// == equality check operator
//comparision and equality check both are different.

//below all are false //it leads to code lang inconsistence //don't use in development.
console.log(undefined == 0);
console.log(undefined >= 0);
console.log(undefined <= 0);
console.log(undefined === 0);
console.log(null > undefined);
*/

// console.log(+true); //1
// // console.log(true+); SyntaxError
// // console.log(++true);SyntaxError: Invalid left-hand side expression in prefix operation

// let x = 5;
// let y = -6;
// console.log(x);//5
// console.log(-x);//-5
// console.log(-y);//6
// console.log(y);//-6






/////DATA TYPES
//fundamentally datatypes are classified as the two types that are primitive and non primitive
//call by value
//call by reference
//MAINLY like this data categorization of data types are formed.
//how data is stored inside the memory.
//how data is accessed.

//Primitive(7 types)(call by value) : Number, String , Boolean, null , undefined, Symbol, BigInt
// console.log(null); //null

//Non-Primitive or Reference Type : Array, Objects, Functions

//declaring the symbol
// const std1name = Symbol("sai");
// const std2name = Symbol("sai");
// console.log(std1name==std2name);
// console.log(std1name);
// console.log(std2name);
// //bigInt
// const bigNumber = 23442747294472979129947949124917494174987247247n; //suffix n represent it is bigInt
// console.log(bigNumber);

// //non primitive
// //Array
// let gods = ["shiva","parvati","ram","sita","hanuman","ganesh"]

// //Object
// let sg = {
//     name : "sidduganesh",
//     age : 22
// }

// //Function = variable function
// const myFunction = function(){
//     console.log("Hello World");
//}





//////MEMORY AND THREADS IN JS
//in earlier times "c" lang memory using and freeing is our work

//js has automatic garbage collection.


//+++++++++++++++++++++++
//stack = stack memory is used in all places of primitives
//from stack we get direct value

//heap = heap memory is used in all the non primitive/ reference type
//gets the reference of the values


///STRING
// let fName = "siddu"
// let mName = "ganesh"
// let lName = "musa"
// const repoCount = 0;
// //old style of concatination, not recommended in development
// console.log(fName +" "+ mName +" "+ lName);

// //string interpolation is the modern practice
// //it is very readable and reliable.
// console.log(`Welcome ${fName.toUpperCase()} ${mName.toUpperCase()}, `);

// const name2 = new String("ag");
// console.log(name2);



///NUMBER
// const score = 50;
// console.log(score);

// const balance = new Number(25000);
// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toFixed(2));//25000.00
// console.log(balance.toString().length);

// const z = 123.84500;
// console.log(z.toPrecision(3));

// const accountBalance = 23435558000;
// console.log(accountBalance.toLocaleString);//us standard
// console.log(accountBalance.toLocaleString('en-IN'));//23,43,55,58,000


//+++++ MATH math library comes by default in js
// console.log(Math); //Object [Math] {}

// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.7));//5
// console.log(Math.round(4.4));//4
// console.log(Math.round(24.5));//25
// console.log(Math.round(75.1));//75
// console.log(Math.ceil(125.6));//126
// console.log(Math.floor(140.9));//140

// console.log(Math.min(1,25,6,2,0));
// console.log(Math.max(1,25,6,2,0));

// //between 0 and 1
// console.log(Math.random());
// const die = Math.round((Math.random()*10)+1); //range from 1 to 10
// console.log(die);

// const min = 10;
// const max = 20;

// console.log(Math.round((Math.random()*(max - min + 1)) + min ));


////DATE
// console.log(myDate.to); // .to------ has lots of methods in it.
// let myDate = new Date();//starts from Jan 1, 1970
// console.log(myDate); //2024-03-05T23:48:21.536Z
// console.log("myDate.toDateString() : "+myDate.toDateString()); //Wed Mar 06 2024
// console.log("myDate.toISOString() : "+myDate.toISOString()); // 2024-03-05T23:51:12.542Z
// console.log("myDate.toJSON()  : "+myDate.toJSON()); // 2024-03-05T23:51:12.542Z
// console.log("myDate.toLocalDateString()  : "+myDate.toLocaleDateString()); //6/3/2024
// console.log("myDate.toLocaleString()  : "+myDate.toLocaleString()); //6/3/2024, 5:22:39 am
// console.log("myDate.toLocaleTimeString()  : "+myDate.toLocaleTimeString()); //5:23:12 am
// console.log("myDate.toString()  : "+myDate.toString()); // Wed Mar 06 2024 05:19:10 GMT+0530 (India Standard Time)
// console.log("myDate.toTimeString()  : "+myDate.toTimeString()); //05:35:56 GMT+0530 (India Standard Time)
// console.log("myDate.toUTCString()  : "+myDate.toUTCString()); //Wed, 06 Mar 2024 00:06:20 GMT

// // //output
// // myDate.toDateString() : Wed Mar 06 2024
// // myDate.toISOString() : 2024-03-06T00:09:47.472Z
// // myDate.toJSON()  : 2024-03-06T00:09:47.472Z
// // myDate.toLocalDateString()  : 6/3/2024
// // myDate.toLocaleString()  : 6/3/2024, 5:39:47 am
// // myDate.toLocaleTimeString()  : 5:39:47 am
// // myDate.toString()  : Wed Mar 06 2024 05:39:47 GMT+0530 (India Standard Time)
// // myDate.toTimeString()  : 05:39:47 GMT+0530 (India Standard Time)
// // myDate.toUTCString()  : Wed, 06 Mar 2024 00:09:47 GMT


//month in JavaScript starts with 0 Index
// const myBirthDate = new Date(2001, 8, 9, 5, 5);
// console.log(myBirthDate.toLocaleString());
// console.log(myBirthDate.toString());
// console.log(myBirthDate.toDateString());
// console.log(myBirthDate.toISOString());
// console.log(myBirthDate.toUTCString());
// console.log(myBirthDate.getTime());

// let IndependenceDayInIndia = new Date("08-15-1947");
// console.log(IndependenceDayInIndia.toString());

//used for quizes and polls
// let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myTimeStamp.toString());

// let time1 = new time("999992100000");
// console.log(time1.getDate());

// myBirthDate.toLocaleDateString('default',{
//     weekday: 'long',
//     day: '2-digit'
// })

/**
// Assuming myBirthDate is defined as a Date object
// var myBirthDate = new Date('1990-01-01');

// // Formatting options
// var options = {
//     weekday: 'long',
//     day: '2-digit'
// };

// // Format the birthdate
// var formattedDate = myBirthDate.toLocaleDateString('default', options);

// console.log(formattedDate); // Example output: "Monday, 01"
 */

///ARRAY
// let arr = [5,2,1,3,6]
// let arr2 = new Array(0,1,2,3,4);
// console.log(arr2);
// let Heros = ["ironman","spiderman","capitanamerica"]
// console.log(Heros);
// let random = ["1",'sid',365]
// console.log(random);

// console.log("arr",arr);
// console.log(arr.push(7));
// console.log(arr);
// console.log(arr.push(0,2,4));
// console.log("arr",arr);
// arr.pop();//removes last value
// console.log('arr', arr);

// console.log('arr',arr.unshift(8)); //9 elements //adds at front
// console.log(arr);
// console.log('arr',arr.shift());// 8 elems //removes elem at front

//slice and splice in array
//slice
// console.log("arr : ",arr);
// console.log("arr slice(1,2) : ",arr.slice(1,2));
// console.log("arr : ",arr);
// console.log("arr splice(1,2) : ", arr.splice(1,2));//splice removes the range of numbers from the array.
// console.log("arr : ",arr);

// let marvel_heros = ["ironman","thor","spiderman"]
// let dc_heros = ["superman","batman","flash"]

// const all_heros = marvel_heros.push(dc_heros);


// console.log(marvel_heros);
// console.log(dc_heros);
// console.log(all_heros);

///concat operator
// console.log(marvel_heros.concat(dc_heros)); //[ 'ironman', 'thor', 'spiderman', 'superman', 'batman', 'flash' ]

///spread operator
// console.log(...dc_heros, ...marvel_heros); // superman batman flash ironman thor spiderman

// console.log(Array.isArray("siddu"));
// console.log(Array.from("siddu"));
// console.log(Array.from({name: "sidduganesh"})); //interesting


// let score1 = 1000;
// let score2 = 2000;
// let score3 = 3000;
// console.log(Array.of(score1, score2, score3)); //[ 1000, 2000, 3000 ]
// console.log(Array.of({score1, score2, score3})); // [ { score1: 1000, score2: 2000, score3: 3000 } ]


/////OBJECT
//Objects 
//JS objects and events are important
//there are 2 ways to declare the objects in js => literals and constructors

//singleton = 
//Object.create
//with literals singleton doesn't form's
//with constructors singleton objects are formed.

//Object literals
// const JsUser = {
//     // key : value => js treats the keys as strings
//     "full name" : "siddu ganesh musa"

// }
////////declare a symbol and use it as key in the object
// const mySym = Symbol("key1");

// const FSJDevUser = {
//     userId : "2ajfjofoij142ojojojjoijofjoajofjsf",
//     userName : "sidduganesh",
//     "full name" : "siddu ganesh musa",
//     //not acts a symbol (below code)
//     // mySym : "mykey1",

//     //now it acts as symbol 
//     [mySym] : "mykey1",
//     userEmail : "sidduganeshengineer@gmail.com",
//     userPassword : "raN123456",
//     isLoggedIn : false,
//     streakCount : 0,
//     lastLoginDays : ["Monday","Tuesday"]
// }

// console.log(FSJDevUser.userEmail);
// console.log(FSJDevUser["userEmail"]);
// console.log(FSJDevUser["full name"]);
// console.log(typeof FSJDevUser[mySym]);
// console.log(FSJDevUser[mySym]); 
// console.log(typeof FSJDevUser["mySym"]); //undefined


// FSJDevUser.userEmail = "sidhu@gmail.com"
// // Object.freeze(FSJDevUser)
// FSJDevUser.userEmail = "aakash@gmail.com"

// console.log(FSJDevUser);

// //function
// FSJDevUser.greeting = function(){
//     console.log("Hello Java Programmer, Keep Doing...");
// }

// FSJDevUser.greeting();
// console.log(FSJDevUser.greeting); //gives the reference of the greeting function
// console.log(FSJDevUser.greeting()); //executes function and output is "hell...." and undefined.

// //this keyword is used to the refer the current object
// FSJDevUser.greetingTwo = function(){
//     console.log(`Hello, ${this["full name"]} => Your Email is ${this.userEmail}`)
// }

// FSJDevUser.greetingTwo();


// //Object
// const codeItId  = {} //it is  non singleton object.
// const codeItId2 = new Object(); //it is singleton object

// codeItId.userId = "123abc"
// codeItId.userName = "PavanTej"
// codeItId.isLoggedIn = false

// console.log(codeItId);

// const trailUser = {
//     userEmail : "trail123@gmail.com",
//     "full name " : {
//         userFullName : {
//             firstName : "trail",
//             lastName : "explore"
//         }
//     }
// }

// console.log(trailUser["full name "].userFullName);
// // console.log(trailUser["full name "]?.userFullName); //in future like this syntax is used to find the or like

// const obj1 = {1:"a",2:"b"}
// const obj2 = {3:"c",4:"d"}
// const obj4 = {5:"e",6:"f"}

// let obj3 = {obj1, obj2 , obj4}
// console.log(obj3);

// obj3 = Object.assign({},obj1,obj2,obj4)
// console.log(obj3);

// //most of the types spread operator is used
// obj3 = {...obj1,...obj2,...obj3}
// console.log(obj3);

// //users from db we get in the form of array
// //inside array there will be lots of objects
// const users = [
//     {
//         id : "sjdfkjf234k3",
//         userFullName : "shaniya prasad",
//         userEmail : "shan@gmail.com"
//     },
//     {
//         id : "sjdfkjf23aggsg4k3",
//         userFullName : "prasad",
//         userEmail : "n@gmail.com"
//     },
//     {
//         id : "sjdfkjf234k3fasggsg",
//         userFullName : "yaad",
//         userEmail : "yadd@gmail.com"
//     },
//     {
//         id : "sjdfkjf234fsf",
//         userFullName : "niya",
//         userEmail : "shadddn@gmail.com"
//     }

// ]

// console.log(users[1].userEmail);

// console.log(trailUser);

// console.log(Object.keys(trailUser));
// console.log(Object.values(trailUser));
// console.log(Object.entries(trailUser)); //used less

// //sometimes values doesn't exist then it leads to crash
// //to check property
// console.log(codeItId.hasOwnProperty('isLoggedIn'));

/////OBJECTS
//objects discussion further leads to API
///Destructure of arrays and objects (both happens)
//react lib u will get's the objects that values has to be destructure and represented
////DESTRUCTURING OF OBJECTS
// const course = {
//     courseName : "JS in hindi",
//     price : 999, 
//     courseInstructur : "Hitesh Choudary"
// }
//     //traditional approach
// console.log(course.courseName);
// console.log(course.price);
// console.log(course.courseInstructur);

//     //destructure
// // const {courseInstructur} = course
// // console.log(courseInstructur);
// const {courseInstructur: instructor} = course //clean code
// console.log(instructor);

/**
// const Navbar = (props.company){

// }
// Navbar(company = "sgIndustries")
////alt code
// const Navbar = ({company}){

// }
// Navbar(company = "sgIndustries")
*/

///BASICS OF API
//we gets the values from the backend (earlier days we get through the xml, now we get through the JSON)
//JSON
// {
//     name : "sidduganesh",
//     courseName : "JS in hindi",
//     coursePrice : "free"
//     courseAt : "Youtude"
// }

//MOST OF THE TIME WE GET API IN THE FORM OF 
// [
//     {},
//     {},
//     {}
// ]

//API Example
// {
//     "results": [
//       {
//         "gender": "female",
//         "name": {
//           "title": "Miss",
//           "first": "Jennie",
//           "last": "Nichols"
//         },
//         "location": {
//           "street": {
//             "number": 8929,
//             "name": "Valwood Pkwy",
//           },
//           "city": "Billings",
//           "state": "Michigan",
//           "country": "United States",
//           "postcode": "63104",
//           "coordinates": {
//             "latitude": "-69.8246",
//             "longitude": "134.8719"
//           },
//           "timezone": {
//             "offset": "+9:30",
//             "description": "Adelaide, Darwin"
//           }
//         },
//         "email": "jennie.nichols@example.com",
//         "login": {
//           "uuid": "7a0eed16-9430-4d68-901f-c0d4c1c3bf00",
//           "username": "yellowpeacock117",
//           "password": "addison",
//           "salt": "sld1yGtd",
//           "md5": "ab54ac4c0be9480ae8fa5e9e2a5196a3",
//           "sha1": "edcf2ce613cbdea349133c52dc2f3b83168dc51b",
//           "sha256": "48df5229235ada28389b91e60a935e4f9b73eb4bdb855ef9258a1751f10bdc5d"
//         },
//         "dob": {
//           "date": "1992-03-08T15:13:16.688Z",
//           "age": 30
//         },
//         "registered": {
//           "date": "2007-07-09T05:51:59.390Z",
//           "age": 14
//         },
//         "phone": "(272) 790-0888",
//         "cell": "(489) 330-2385",
//         "id": {
//           "name": "SSN",
//           "value": "405-88-3636"
//         },
//         "picture": {
//           "large": "https://randomuser.me/api/portraits/men/75.jpg",
//           "medium": "https://randomuser.me/api/portraits/med/men/75.jpg",
//           "thumbnail": "https://randomuser.me/api/portraits/thumb/men/75.jpg"
//         },
//         "nat": "US"
//       }
//     ],
//     "info": {
//       "seed": "56d27f4a53bd5441",
//       "results": 1,
//       "page": 1,
//       "version": "1.4"
//     }
//   }

///FUNCTION
//FUNCTIONS places crucial role in programming. functions are used as the reusables.
//with functions in js we need to study the memory mgmt and call stack.
//scope of function.


// function sayMyName(){
// //function defination
// console.log("siddu");
// console.log("ganesh");
// console.log("musa");
// }
// //function reference
// sayMyName
// //function execution or function calling
// sayMyName();

                    //parameter
// function addTwoNumber(number1, number2){
//     console.log(number1 + number2);
// }
// function addTwoNumber(number1,number2){
//     let result = number1 + number2;
//     return result;
// }
// function addTwoNumber(number1, number2){
//     return number1 + number2;
// }
// addTwoNumber();//NaN
// addTwoNumber(2,4)//6
// addTwoNumber(2,null)//2
// addTwoNumber(2,"4")//24
// addTwoNumber(3,"a")//3a

// const result = addTwoNumber(5,7);
// console.log("Results : ",result);

//login
// function userLogin(userName){
//     // if(userName===undefined){
//     //     return `please enter your name`
//     // }
//     // if(!userName){
//     //     return `please enter your name`
//     // }
//     return `${userName} is just loggedin`
// }
            //default value
// function userLogin(userName = "sam"){
//     // if(userName===undefined){
//     //     return `please enter your name`
//     // }
//     // if(!userName){
//     //     return `please enter your name`
//     // }
//     return `${userName} is just loggedin`
// }
// console.log(userLogin()); // undefined is just loggedin
// console.log(userLogin("jyothi"));


//eg: Cart
//RestOperator or spreadOperator //it depends on the situation of call it.
//                             //RestOperator
// function calculateCartPrices(...itemOnePrice){
//     return itemOnePrice
// }
// console.log(calculateCartPrices(199,173,433,599,677))//[ 199, 173, 433, 599, 677 ]

// function calculateCartPrices2(val1, val2,...itemOnePrice){
//     return itemOnePrice
// }
// console.log(calculateCartPrices2(199,173,433,599,677))//[ 433, 599, 677 ]

// const user = {
//     userName : "ram",
//     age : 10000 //if age is ages then undefined is the answer, so type safety is necessary
// }
// function handleObject(anyobject){
//     return `${anyobject.userName} lived for ${anyobject.age} years`
// }
// console.log(handleObject(user));
// console.log(handleObject({userName:"sham",
//     age:99
// }));

// let arr = [100,200,300,400]
// function acceptArr(getArr){
//     return getArr; // getArr[1]
// }
// console.log(acceptArr(arr));

/**21 SCOPE */
// Global and local scope in javascript
//other topics that comes under scope are closure


//global scope
// var v = 100;
// let l = 20;
// const c = 30;

// if(true){
//     //block scope
//     var v = 100;
//     let l = 20;
//     const c = 30;
// }

// console.log(v);
// // console.log(l);
// // console.log(c);

// //below is called as the scope //block
// {}


// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
    
// }


//to understand closure better you need to know about the dom manipulation
// function one(){
//     const username = "sidduganesh"
//     function two(){
//         const subname = "sidhu"
//         console.log(username);
//     }
//     two();
//     // console.log(subname);   //error
// }
// one();

// if(true){
//     const username = "hitesh"
//     if (true) {
//         const website = "hiteshlco.com"
//         console.log(username);
//     }
//     console.log(website);//error
// }
// console.log(username);//error


//HOISTING (basic)

// addOne(2);
// //regular function
// function addOne(num1){
//     console.log(num1);
//     return num1 + 100;
// }

// // addTwo(3);//ReferenceError: Cannot access 'addTwo' before initialization
// //variable function or expression 
// const addTwo = function(num1){
//     console.log(num1);
//     return num1 + 200;
// }
// addTwo(5);


// const user = {
//     username : "sidduganesh",
//     price : 999,

//     welcomeMessage : function() {
//         //this refers to the current context.
//         console.log(`${this.username}  , welcome to website`);
//     }

// }

// user.welcomeMessage()

// //change the context
// user.username = "sam"
// console.log(user.welcomeMessage());

// console.log(this);

// function chai(){
//     console.log(this);
// }
// chai();

// function tea(){
//     let username = "sid"
//     console.log(this.username);
// }
// tea();


//this with params won't works in arrow function
// const teatea =  () => {
//     console.log(this); //{} output //this is the global object
// }

// teatea();

// const addTwo = () => {
//     return "hello Two" //return is must if { } used. //explicit return
// }

// const addThree = () => "hello Three"
// const hello = () => ("hello Three") //mostly used in react //implicit return 
// console.log(addThree());



// const returningObj = (num1,num2) => ({username : "sidduganesh"})
// console.log(returningObj(3,4));

// const myArray = [5,2,1,3,4]
// myArray.forEach(function(){})
// myArray.forEach(()=>{return ""})
// myArray.forEach(()=>(""))
// myArray.forEach(()=>"")


///Immediately Invoked Function Expressions (IIFE)
// (function chai(){
//     console.log(`DB CONNECTED`);
// })() 
//INTERVIEW answer = sometimes pollution happens in global scope and variables, to get ride of it. IIFE is used.

//named IIFE
// (function chai(){
//        console.log(`DB CONNECTED`);
// })(); //IIFE doesn't knows where to stop so use the ';' to stop it
// (function aurchai(){
//     console.log(`DB CONNECTED Two`);
// })();

//parameters in IIFE
// ((name)=>{
//     console.log(`hello, ${name}`);
// })('sidduganesh');


////HOW DOES JS execute code + call stack
//JS EXECUTION CONTEXT
//{} ==> GLOBAL EC (this)
//Function EC
//Eval EC

// // {} -> MEMORY CREATION PHASE
// //     -> EXECUTION PHASE

// let var1 = 10;
// let var2 = 20;
// function addNum(num1,num2){
//     let total = num1 + num2
//     return total;
// }
// console.log( addNum(var1,var2) );
// console.log(addNum(4,5));


// //call stack (run it in browser source code snippets with breakpoints)
// function one(){
//     console.log("one")
//     two();
// }
// function two(){
//     console.log("two")
//     three();
// }
// function three(){
//     console.log("three")
   
// }
// one()
// two()
// three()

/////++++++++++++CONTROL FLOW++++++++++++++++++ in JS entire code need not to be executed. required code has to execute at specific time.

// //if
// const isUserLoggedIn = true

// if(isUserLoggedIn){

// }

// const temp = 21
// if(temp < 50){
//     console.log("less than 50");
// }
// else{
//     console.log("greater than 50");
// }

// // < , > , <= , >= , == , != , ===

// const minBalance = 1000;
// if(minBalance < 1000){
//     console.log("Please maintain minimun balance in the account.");
// }

// //implicit scope
// if(minBalance > 500) console.log(`your balance is ${minBalance}`),console.log("greater than 500");;

// const creditCardSpent = 15200;
// const limit = 30000;
// if(creditCardSpent>=15000)
// {
//     console.log("you have used 50% limit of the card");
// }
// else if(creditCardSpent>=30000){
//     console.log("you have exceeded the limit");
// }
// else
// {
//     console.log("you can use your card.");
// }


// const loggedInFromGoogle = true
// const loggedInFromEmail = false


// if(loggedInFromGoogle || loggedInFromEmail){
//     console.log("allowing user to login");
// }

// const month = 9

// switch (month) {
//     case 1 :
//         console.log("JANUARY");
//         break;
//     case 2 :
//         console.log("FEBRARY");
//         break;
//     case 3 :
//         console.log("MARCH");
//         break;
//     case 4 :
//         console.log("APRIL");
//         break;
//     case 5 :
//         console.log("MAY");
//         break;
//     case 6 :
//         console.log("JUNE");
//         break;
//     case 7 :
//         console.log("JULY");
//         break;
//     case 8 :
//         console.log("AUGUST");
//         break;
//     case 9 :
//         console.log("SEPTEMBER");
//         break;
//     case 10 :
//         console.log("OCTOBER");
//         break;
//     case 11 :
//         console.log("NOVEMBER");
//         break;
//     case 12 :
//         console.log("DECEMBER");
//         break;

//     default:
//         break;
// }

// //falsy values
// false , 0 , -0 ,  0n , "", null , undefined , NaN
// //truthy values
// "0" , 'false' , " ", [] , {} , function(){}

// //fetch from db
// const userEmail = []
// if(userEmail.length === 0){
//     console.log("Array is empty");
// }


// const emptyObj = {}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is empty");
// }


// //(new operator)
// //Nullish coalescing Operator (??): null undefined
// let val1 = 5 ?? 10
// val1 = null ?? 20
// val1 = undefined ?? 30
// val1 = null ?? undefined ?? 100 ?? 200
// //when u call values from db like firebase,appwrite or ... u will get
// console.log(val1);

// //Terniary operator
// //condition ? true : false 
// const iceTeaPrice = 100
// iceTeaPrice >= 80 ? console.log("greater than 80") : console.log("less than 80");


//for
// for(let i = 0;i<10;i++){
//     console.log(i);
// }

// //while
// let index = 0
// while(index<10){
//     console.log(`value of index is ${index}`);
//     index++
// }

// let arr = ['flash', 'batman', 'superman']

// let i = 0
// while(i<arr.length){
//     console.log(`values in arr are ${arr[i]}`);
//     i++
// }

// let score = 11
// do{
//     console.log(`Score is ${score}`);
//     score++;
// }while (score<=10) 

//for of
//this loop is mostly used to iterate over an array
// ['','','']
// [{},{},{}]
// for (const i of arr) {
//     console.log(i);
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }

// // Map (map is object and it's just like the array.)
// //in JS everything is the object
// //map object holds the key:value pairs and remebers the insertion order
// //map stores the unique keys
// const map = new Map(); //for in won't iterates.
// map.set('IN', "India")
// map.set('USA',"United States of America");
// map.set('FR', "France")

// console.log(map);

// for (const i of map) {
//     console.log(i);
// }

// for (const [key,value] of map) {
//     console.log(key," : ",value);
// }

// //objects are not iteratable through the for of
// // const myObject2 = {
// //     game1 : "Neso Island",
// //     game2 : "super contra"
// // }
// // for (const m of myObject2) {
// //     console.log(m);
// // }


// const myObject3 = {
//     js : 'javascript',
//     cpp : "C++",
//     rb : "ruby",
//     swift : "swift by apple",
//     py : "python"
// }
// //for in is used for the objects
// for (const key in myObject3) {
//     console.log(`${key} is shortcut of ${myObject3[key]}`);
// }


// const prgmLang = ['js','java','python','typescript']
// for(const key in prgmLang){
//     // console.log(key);//gives the keys of the array
//     console.log(prgmLang[key]);
// }


// const coding = ['js','java','python']
// coding.forEach( function (item) {
//     console.log(item);
// } )

// coding.forEach((val)=>{
// console.log(val);
// })

// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr)=>{
//     console.log(item, index, arr);
// })

// const myCoding = [
//     {
//         languageName : "Java",
//         languageExtension : "java"
//     },
//     {
//         languageName : "JavaScript",
//         languageExtension : "js"
//     },
//     {
//         languageName : "TypeScript",
//         languageExtension : "tsx"
//     },
//     {
//         languageName : "Python",
//         languageExtension : "py"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })


// const prgmLangs = ['js','java','HTML5','CSS3','SQL']
// const toolsAndOS = ['git','github','vscode','eclipse','windows','linux']


// //foreach won't returns 
// const values = prgmLangs.forEach((elems)=>{
//     // console.log(elems);
//     return elems;
// })
// console.log(values);


// const myNums = [1,2,3,4,5,6,7,8,9,0]

// // const newNums = myNums.filter((num)=> num > 4)
// // console.log(newNums);
// const newNums = [];

// myNums.forEach((num)=>{
//     if(num > 4){
//         newNums.push(num)
//     }
// })

// console.log(newNums);

// //filter map and reduce
// //map chaining
// const anNums = myNums
//                 .map((num)=> num * 10)
//                 .map((num)=> num + 1)
//                 .filter((num)=> num >= 40)

// console.log(anNums);

//reduce js mdn to see docs in mdn
//accumulator takes the empty value


//it is used for shopping cart
// const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc,currval) {
//     console.log(`acc ${acc} and currval : ${currval}`);
//     return acc + currval
// }, 0)

// console.log(myTotal);

// const myTotal = myNums.reduce((acc, currval )=> acc + currval ,0)

// const shoppingCart = [
//     {
//         itemName : "js course",
//         price : 2999
//     },
//     {
//         itemName : "java course",
//         price : 4999
//     },
//     {
//         itemName : "py course",
//         price : 7999
//     },
//     {
//         itemName : "mobile course",
//         price : 8999
//     },
//     {
//         itemName : "datascience course",
//         price : 9999
//     },
// ]

// const priceToPay = shoppingCart.reduce((acc,item)=>acc+item.price,0)
// console.log(priceToPay);


//  let books = [
//         {
//             "isbn":"9781593279509",
//             "title":"Eloquent JavaScript, Third Edition",
//             "subtitle":"A Modern Introduction to Programming",
//             "author":"Marijn Haverbeke",
//             "published":"2018-12-04T00:00:00.000Z",
//             "publisher":"No Starch Press",
//             "pages":472,
//             "description":"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications.",
//             "website":"http://eloquentjavascript.net/"
//         },
//         {
//             "isbn":"9781491943533",
//             "title":"Practical Modern JavaScript",
//             "subtitle":"Dive into ES6 and the Future of JavaScript",
//             "author":"Nicolás Bevacqua",
//             "published":"2017-07-16T00:00:00.000Z",
//             "publisher":"O'Reilly Media",
//             "pages":334,
//             "description":"To get the most out of modern JavaScript, you need learn the latest features of its parent specification, ECMAScript 6 (ES6). This book provides a highly practical look at ES6, without getting lost in the specification or its implementation details.",
//             "website":"https://github.com/mjavascript/practical-modern-javascript"
//         },
//         {
//             "isbn":"9781593277574",
//             "title":"Understanding ECMAScript 6",
//             "subtitle":"The Definitive Guide for JavaScript Developers",
//             "author":"Nicholas C. Zakas",
//             "published":"2016-09-03T00:00:00.000Z",
//             "publisher":"No Starch Press",
//             "pages":352,
//             "description":"ECMAScript 6 represents the biggest update to the core of JavaScript in the history of the language. In Understanding ECMAScript 6, expert developer Nicholas C. Zakas provides a complete guide to the object types, syntax, and other exciting changes that ECMAScript 6 brings to JavaScript.",
//             "website":"https://leanpub.com/understandinges6/read"
//         },
//         {
//             "isbn":"9781449365035",
//             "title":"Speaking JavaScript",
//             "subtitle":"An In-Depth Guide for Programmers",
//             "author":"Axel Rauschmayer",
//             "published":"2014-04-08T00:00:00.000Z",
//             "publisher":"O'Reilly Media",
//             "pages":460,
//             "description":"Like it or not, JavaScript is everywhere these days -from browser to server to mobile- and now you, too, need to learn the language or dive deeper than you have. This concise book guides you into and through JavaScript, written by a veteran programmer who once found himself in the same position.",
//             "website":"http://speakingjs.com/"
//         },
//         {
//             "isbn":"9781449331818",
//             "title":"Learning JavaScript Design Patterns",
//             "subtitle":"A JavaScript and jQuery Developer's Guide",
//             "author":"Addy Osmani",
//             "published":"2012-08-30T00:00:00.000Z",
//             "publisher":"O'Reilly Media",
//             "pages":254,
//             "description":"With Learning JavaScript Design Patterns, you'll learn how to write beautiful, structured, and maintainable JavaScript by applying classical and modern design patterns to the language. If you want to keep your code efficient, more manageable, and up-to-date with the latest best practices, this book is for you.",
//             "website":"http://www.addyosmani.com/resources/essentialjsdesignpatterns/book/"
//         },
//         {
//             "isbn":"9798602477429",
//             "title":"You Don't Know JS Yet",
//             "subtitle":"Get Started",
//             "author":"Kyle Simpson",
//             "published":"2020-01-28T00:00:00.000Z",
//             "publisher":"Independently published",
//             "pages":143,
//             "description":"The worldwide best selling You Don't Know JS book series is back for a 2nd edition: You Don't Know JS Yet. All 6 books are brand new, rewritten to cover all sides of JS for 2020 and beyond.",
//             "website":"https://github.com/getify/You-Dont-Know-JS/tree/2nd-ed/get-started"
//         },
//         {
//             "isbn":"9781484200766",
//             "title":"Pro Git",
//             "subtitle":"Everything you neeed to know about Git",
//             "author":"Scott Chacon and Ben Straub",
//             "published":"2014-11-18T00:00:00.000Z",
//             "publisher":"Apress; 2nd edition",
//             "pages":458,
//             "description":"Pro Git (Second Edition) is your fully-updated guide to Git and its usage in the modern world. Git has come a long way since it was first developed by Linus Torvalds for Linux kernel development. It has taken the open source world by storm since its inception in 2005, and this book teaches you how to use it like a pro.",
//             "website":"https://git-scm.com/book/en/v2"
//         },
//         {
//             "isbn":"9781484242216",
//             "title":"Rethinking Productivity in Software Engineering",
//             "subtitle":"",
//             "author":"Caitlin Sadowski, Thomas Zimmermann",
//             "published":"2019-05-11T00:00:00.000Z",
//             "publisher":"Apress",
//             "pages":310,
//             "description":"Get the most out of this foundational reference and improve the productivity of your software teams. This open access book collects the wisdom of the 2017 \"Dagstuhl\" seminar on productivity in software engineering, a meeting of community leaders, who came together with the goal of rethinking traditional definitions and measures of productivity.",
//             "website":"https://doi.org/10.1007/978-1-4842-4221-6"
//         }
//     ]

//  console.log(books);  
//  let pages = books.filter((bk)=>bk.pages >= 500 ); //[]
//  console.log(pages);

//  let yr = books.filter((bk)=>{ return bk.published = bk["title"]})
//  console.log(yr);

// let titles = books.forEach((bk)=>{
//          if(bk.pages >= 350){
//             console.log(bk.title);
//          }
// })

// let time = books.forEach((bk)=>{
//     // console.log(bk.published);
//    let year = new Date(bk.published).getFullYear();
//    if(year>=2019){
//     console.log(bk.title);
//    }
    
// })

// let selectedBooks = books.filter((bk)=> new Date(bk.published).getFullYear >= 2019);
// console.log(selectedBooks.title);

//////////////////DOM
document.getElementById()
document.getElementsByClassName()
document.getElementsByName()

