let arr=[10,29,200,100,30,6,4,5]
// let newArr = arr.sort((a,b)=>{return a-b})
// console.log(newArr);

//a-b => positive => Swapping
//a -b => negative => no Swapping

//a-b = 10 -5 => 5=> swapping =>[5,10,100,30]
//a-b = 10 -100 => -90=> noswapping =>[5,10,100,30]
//a-b = 100 -30 => 70=> swapping =>[5,10,30,100]

//Decending Sort
//b-a => positive ,b>a=> swappind
//b-a => negatibe ,b<a=> noSwappig
// let newArr = arr.sort((a,b)=>{
//     return b-a
// })
// console.log(newArr);

//some &every
let arr1=[10,30,20,50,5]
let val =arr1.some((value,index,arr)=>{
    return value%2==0
})

let val1 =arr1.every((value,index,arr)=>{
    return value%2==0
})
console.log(val,val1);

