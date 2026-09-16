let newPromise = new Promise((resolve, reject) => { 
    let dataRecived = true; 
    if(dataRecived){ 
        resolve("Data Recived"); // Fixed spelling: "Received"
    } else { 
        reject("Data Not Recived"); 
    } 
}); 

// newPromise.then(console.log).catch(console.log);
newPromise.then((messege)=>{
    console.log("Sucess:"+messege)
    return "Next Success"+messege
})
.then((nextMessage)=>{
    console.log(nextMessage);
    
})
.catch((error)=>{
    console.log("Failur"+error);
    
})
.finally(()=>{
    console.log("End");
})

// function fetchProfile(successcallBack , errorCallback){
//     let dataRecived =true
//     if(dataRecived){
//         successcallBack("DataRecived")
//     }
//     else{
//         errorCallback("Data Not Recived")
//     }
// }
// fetchProfile(
// (message)=>{
//     console.log(message)
//     fetchProfile(
        
//     (NextMessage)=>{
// console.log("NextMessage"+NextMessage);

//     },
    
//     (NextError)=>{
//         console.log("NextError"+NextError);
        

//     })
// },

// (error)=>{
//     console.log(error);
    
// })