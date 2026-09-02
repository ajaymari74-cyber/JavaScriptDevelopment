// let hobbies = ["cricket","football","coding"]
// let hobbies2 = ["singing","dancing","reading"]

// let alhobbies =[...hobbies,...hobbies2]
// // console.log(alhobbies)
// hobbies[0]="chess"
// // console.log(hobbies)
// console.log(hobbies)


// let empDetails=
// {
//     empId:101,
//     empName:"Ajay M",
//     empRole:"software Engineer",
//     empSalary:25000,
//     empAddress:{
//         street:"123 Main St",
//         city:"Anytown",
//         state:"CA",
//         zip:"12345"
//     }
// }
// let empDetailsNew ={...empDetails,empSalary:100000}
// console.log(empDetailsNew)

//Rest Operator or Rest Parameter
function restParameter(a,b,...c){
    console.log(a,b,c);
    console.log(a+b)

}
restParameter(10,20,30,40,50,60,70,80)