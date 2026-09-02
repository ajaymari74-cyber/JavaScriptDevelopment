//if - statement
/*
if(condition){
    Statement
}
    */

// let uAge =25;
// if (uAge >= 18){
//     console.log("Hi is Eligible to Vote")
// }


//if - else
/*
  if(condition){
      Statement
      }
    else{
        Statement
    }
 */

// let uAge1 = 12;
// if(uAge1 >=18){
//     console.log("He is eligible");

// }
// else {
//     console.log(
//         "he is not eligible"
//     )
// }

// let pwt_input = false;
// if(pwt_input){
//     console.log("Welcome to Website")
// }
// else{
//     console.log("possword is Incorrect")
// }




// if else-if  or else if lader
/*
if(condition){
Statement
}
else if(condition){
statement
}
else if(condition){
 Statement
 }
 else{
    Statement
}
 */


// let hour = 25;
// if(hour>=1 && hour<= 6){
//     console.log("Early Morning!")
// }
// else if(hour>=7 && hour<= 12){
//     console.log("Morning!")
// }
// else if(hour>=1 && hour<= 6){
//     console.log("Noon")
// }
// else if(hour>=1 && hour<= 6){
//     console.log("Night")
// } 
// else{
//     console.log("It is not an Valid");
//     }



//Switch Statement
/*
switch(expression){
case value: statement;
break;
case value L statement;
break;
default : statement;
break;
}
*/
// let trafficlight = "red"
//  switch(trafficlight){
//     case "red" : console.log("stop")
//     break;
//     case "Yellow" : console.log("slow down")
//     break;
//     case "Green" : console.log("go")
//     break;
//     default : console.log("Pay fine")
//  }

//switch fallthrough method
// let day = "jan";
// switch(day){
//     case "monday":
//         case "wednesday":
//         case "friday": console.log("weekday");
//         break;
//         case "saturday":
//             case "sunday": console.log("weekend");
//             break;
//             default: console.log("not a day");

// }


//Nested if
// let age = 18;
// let height = 150;
// let weight = 55;

// if (age >= 18) {
//     if (height >= 150) {

//         if (weight >= 50) {
//             console.log("Your Selected");


//         }
//         else {
//             console.log("Weight is Not Matched");

//         }



//     }
//     else {
//         console.log("Height is not Matched");

//     }

// }
// else {
//     console.log("Age is Not matched")
// }

//Ternary Operator
/*
condition ? "Statement" : "Statement"
*/

let pwd_input = true
pwd_input ? console.log("Welcome to Website") : console.log("password is Incorrect");

