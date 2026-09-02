let Fruites = ["apple", "watermelon","MuskMelon","Banana"]
// Fruites.forEach(PrintFruites)
// function PrintFruites(currentElement, index, totalArry){
// console.log(currentElement,index,totalArry);

// }

// Fruites.map(function(currentElement, index, totalArry){
// console.log(currentElement,index,totalArry);}
// )


// let newArr1 = Fruites.map((Elemtnt,index)=>{
//     // return Elemtnt;
//     return {id:index+1,Fruites :Elemtnt}
// } )
// console.log(newArr1);

// let newArr = Fruites.forEach((Elemtnt)=>{
//     console.log(Elemtnt.toUpperCase());
    
//     return Elemtnt;
// } )
// console.log(newArr);




// let newArr1 = Fruites.map((Element) => {
//     return Element;
// });
// console.log(newArr1);

// let newArr = []; 
// Fruits.forEach((Element) => {
//     newArr.push(Element); 
// });
// console.log(newArr);


//Chaining Method
let newArr2 = ["Apple","Orange","Banana", "WaterMelon"]
// let newfruit= newArr2.map(cEle =>cEle.toLocaleUpperCase()).sort()
// console.log(newfruit);


let newfruit1= newArr2.forEach((cEle) =>{ return cEle=="Apple"})
console.log(newfruit1);

//conditionbased Statement
let newfruit= newArr2.map((cEle) =>{ return cEle=="Apple"})
console.log(newfruit)

let newfruit3= newArr2.forEach((val) =>{ return val=="Apple"})
console.log(newfruit3)