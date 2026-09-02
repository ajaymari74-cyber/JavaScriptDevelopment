//Named Functions

// function addd(uName){
//     console.log("Named Function "+ uName);

    
// }
// addd("I am fucntion")

// //Ananomous Function 

// let anafun = function(){
//     console.log("Ananoumus Function");
        
// }
// anafun()

// //Arrow funtion

// let fatArrow = (a,b) => console.log("Arrow Function" +(a*b));
// fatArrow(20,30)

// let newFun=naem1 => console.log(naem1);
// newFun("Ajay")


// //
// let firstName ="Ajay"

// let returnedFunction =(fName)=> fName
// let finalOutput = returnedFunction(firstName)
// console.log(finalOutput);


//Higher Order Function

// function function1(){
//     console.log("I am a HigherOrder Function");
    
// }
// function funciton2() {
//     console.log("I am a CallBack Function");
    
    
// }
// function1(funciton2())

function add( callback , a, b){
    console.log(a+b);
    callback(200,300)
    
}
function sub(num ,num1){
    console.log(num +num1);
    
}
add(sub, 10,20)