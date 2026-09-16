let newPromise=new Promise((fullfilled, Failure) => {
    let DataRecived=false
    if(DataRecived){
        fullfilled("Data Recived is Successfully")
    }
    else{
        // Failure("Data Not Found")
        throw new Error ("Serarch Proper Data")
    }
})
// newPromise.then(message=>console.log(message));

async function executuedFunction(){
try{
// let message = await newPromise //'await' expressions are only allowed within async functions and at the top levels of modules.
// console.log(message);
let message = await newPromise
let newMessage = await newPromise
console.log(message);
console.log(`Next Message:${newMessage}`);



// console.log("last");
}
catch(error){
    console.log(error.message);
    
}
finally{
    console.log("end");
    
}
}
executuedFunction()
console.log("last");
