// //Deep Copy

// let a = 10;
// let b = a;
//  a =30;
// console.log(a,b);

// let obj1 ={
//     name1:"Ajay M",
//     role: "Software Developer"

// }
// obj2 = {...obj1}
// obj2.name1 = "Mari"
// console.log(obj1,obj2);

//object-Shallow Copy
// let person ={
//     name1 :"Arun Nathan",
//     role :"Developer",
//     Hobbies:{
//         Cricket : "T20",
//         footBall: "WorldCup"
//     }
// }

// let person1 ={...person, Hobbies:{...person.Hobbies}}
// person.role="Architeche"
// person.Hobbies.Cricket="ODI"

// console.log(person,person1);

// let person3 = JSON.stringify(person)
// console.log(person3);


// let normalinitial = JSON.parse(person3)
// console.log(normalinitial);

//Array Shallow -copy
let arr =[1,2,3,4,[5,6,7]]
let arr1 =[...arr]

//deep copy
let newArr = JSON.parse(JSON.stringify(arr))
arr[0]='one'
arr[4][0]="five"
newArr[3][1]
console.log(arr,arr1);
