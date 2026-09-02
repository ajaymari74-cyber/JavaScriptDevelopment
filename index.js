// let uName ="ECMA Script"

// console.log(uName);

// let lName="javascript"
// let LName="javascript"
// console.log(lName,LName);

// let $Lname="single page Application"
// let _lName="mulit page application"
// console.log($Lname ,_lName);


// //camel case
// // pascal case
// //under case

// let newemployeid=10;
// let newEmployeId= 10; // camel case
// let new_employe_id = 10; //under case
// let New_Employe_Id= 10 ; // under case
// let NewEmployeId= 10 ; // pascal case


// var age =30 ; //Diclaration and Initialization

// var age ; //Declaration
//  age = 54; // Initialization or Assign 

//  var age = 70; //re Initialization

//  age = " Eighty" // re Assign

//  console.log(age);


//  //let newAge = 54; // Declaration and Initialization;

//  let newAge = 54; // Declaration
//  newAge =54; //initalization

//  //let newAge =30 // re declaration is not possible

// newAge = 30; // re Assign is possible
// console.log(newAge);

 

// const employeeName= "ajay";
// //const employeeName= "Arun";// redeclaration is not possible block scope 
// //employeeName ="arun"
// console.log(employeeName);

// //printing Statements 

// //alert(employeeName)
// // document.write(newAge); // for renderning screen UI
// // confirm(age) //same alert but addition cancel button 

// // let userAge=prompt( "Entet Your Age:")// get the input from the user
// // console.log(userAge)

// let userAge;
// console.error(userAge);
// console.warn(userAge)
// console.clear()



//primitve Datatype

//Number
var num = 120;
var num = 1.24;
console.log(num);


//String
let userName="JavaScript is a Scripting Language";
userName='javascript is a signle threaded language';
userName= `java script is a dynaic language`;
console.log(userName)

//Boolean 
let condition =true;
condition =false;


//undefined
let noValue = undefined;

//null
let emptyValue = null;

console.log(condition, noValue ,emptyValue);

//Single line Comment

/* multi line comment */


//Non-Primitive Datatype or Reference type

//Array

let multipleUsers =["React js", "javascript", "facebook" , "instagram"]
        //index       0             1           2            3            
console.log(multipleUsers);
console.log(multipleUsers[0] ,multipleUsers[1]);
console.log(multipleUsers.length);// for vale calculate
console.log(multipleUsers.length-1);// for identify the last index
console.log(multipleUsers[multipleUsers.length-1]); // identify the last value

//object  behaviurs and properties
// key value pair
let vehicle ={ vehicleType :"four Wheeler" , Brand : "BMW"
               ,price :"1000000" ,feulType : "Petrol"
}
console.log(vehicle);
console.log(vehicle.Brand);
console.log(vehicle.feulType);
console.log(vehicle.price);
