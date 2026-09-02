// //Arithmetic Operators

// console.log(10 + 3); //Addition
// console.log(10 - 3);//Subtraction
// console.log(10 * 3);//Multiplication
// console.log(9 / 3);//diviton quotient => 3 
// console.log(10 % 3);// madulus -- Remainder => 1
// console.log(3 **  3);// Expoential 9

// // Increment - Decrement
// //let num = 10;

// // num = num +1 // 10 + 1;

// // console.log(num);

// // Increment
// let num = 15 ;
// num ++; //post increment => num = num +1 = 15 +1 = 16
// ++num ; // preincrement  => num = 1 + num  = 1+ 16 = 17


// console.log(num);

// //Decrement
// let  num1 = 20;
// num1--;// num1 -1 => 20 -1 =19;
// --num1;// numq1 -1 = 19 -1 = 18;
// console.log(num1);




//post Increment

/*
  1. Substitute
  2. Operation
  3. Increment
*/
// let num = 20;
// let num1= num ++ + num++

// // num1 = 20 ++
// // num = 20 

//  console.log(num , num1)

//pre Increment

/* 
  1. Substitute with Increment
  2. Operation
*/

// let newNum = 40;
// // let newNum1= ++ newNum;
//  //newNum1 == ++40 = 1+40 = 41; 

//  let newNum2 = ++newNum + ++newNum
//  //          = 41 + => 41 + 1 = 42 --> 83

// console.log(newNum, newNum2);

// // Pre Decrement & Post Decrement  

// let num4 =10;
// // let num5 = -- num4 + num4--
// //              10  -9 - 8
// let num6 = --num4 + num4--
// console.log(num4 ,num6)



//  Assignment Operator
//addition
// let age1 = 20;
// let additionaVal = 100;
// // age1 += 20 // 20 + 20 = 4
// //  age1 = age1 +20
// //age1 += additionalVal // 40 + 100

// // age1 -= 10

// //age1 *= 3;
// // age1 /= 2;
// age1 %=2;


// console.log(age1);


// Relational Operator or Comparisional operator
 
// console.log( 20 < 20)
// console.log( 20 <= 20)
// console.log( 20 > 20)
// console.log( 20 >= 20)
// console.log( 20 == 20)
// console.log( 20 === "20")
// console.log( 20 != 20)
// console.log( 20 !== "20")

// Logical Operator

// Logical And &&
/* con1    con2    result
   true    ture     true 
   true    false    false
   false   false    false
   false   true     false
*/
// let age = 18;
// age = 30;
// console.log(age>= 18 && age<= 30);

// let idProof = "Aadhaar";
// console.log( idProof == "pancard" && idProof == "Driving License");

// Logical OR (||)

/* con1    con2    result
   true    ture     true 
   true    false    true
   false   false    false
   false   true     true
*/

// let pwd_input ="12345"

// // console.log( pwd_input =="12345" || pwd_input ==  "54321")

// pwd_input = "54321"

// console.log( pwd_input =="12345" || pwd_input ==  "54321")

// let userName ="abc"
// console.log( pwd_input =="12345" || userName ==  "xus")


//Logical Not (!)

// console.log( ! 10 < 5) 
console.log(! false)