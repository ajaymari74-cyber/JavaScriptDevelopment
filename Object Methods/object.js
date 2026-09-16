

// let userProfile={
//     username : 'Ajay',
//     age : 20,
//     hairColor: "black",
//     eyeColor : "brown",
//     eat :function(){
//         console.log("Im gonna eat ice creame");
//         return "vanilla Ice Creame"
        
//     }
// }
// console.log(userProfile.age,userProfile.username,userProfile.hairColor);
// let iceCreameType = userProfile.eat()
// console.log(iceCreameType);


//Property in String type

// let vehicle={
//     "vehicleType": "four-wheeler",
//     "price" : 20000, 
//     fuelType: "petrol",
//     "seater Type" :["two","three","four"]
// }
// console.log(vehicle.vehicleType);
// console.log(vehicle["vehicle type"]);
// console.log(vehicle.price);
// console.log(vehicle["fuelType"]);
// console.log(vehicle["seater Type"][2]);


// shorthand Assigned Properties
//Dynamic Property
let uName =" Ajay";
let age = 20

let dynamicProp = "employeeid"
let person1 ={
    uName,age,[dynamicProp]:"ifc239845"
}
console.log(person1);
console.log(person1.uName,person1.age,person1[dynamicProp]);

