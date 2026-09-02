let arr =[1,2,3,4,5,6,7,8,9]
let totalVal =0;
for(let i =0; i<arr.length;i++){
     totalVal = totalVal +arr[i]
}
console.log(totalVal);

let totalval = arr.reduce((acc,cElemtnt,index,arr)=>{return acc+cElemtnt},0)
console.log(totalval);

//[1,2,3,4,5,6,7,8,9]

//1st => acc +cElement => 0+1 => 1
//2st => acc +cElement => 1+2 => 3
//9st => acc +cElement => 36+9 => 45

let employees =[
    { eName: "Ajay",salary:10000},
    { eName: "Arun",salary:20000},
    { eName: "Ajith",salary:30000}
]
let totsal = employees.reduce((acc,cElemnt)=>{
    return acc+ cElemnt.salary
},0)
console.log(totsal);
