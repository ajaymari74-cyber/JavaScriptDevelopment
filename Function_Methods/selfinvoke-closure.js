    // function normal(){
    //     console.log("this is normal funciton");
        
    // }
    // normal()
    // normal()
    // normal()


    //IIFE - Immediately Invoked Function Expression
//    (function (username, age) {
//     console.log("selfInvoke function", username, age);
// })("Ajay", 20);

//Closure

function outerFunction(){
    let outervariable="Im outerFunction scope "
         function innerFunction (){
            console.log(outervariable);
        }
        return innerFunction
    }
        let inner = outerFunction();
        inner()