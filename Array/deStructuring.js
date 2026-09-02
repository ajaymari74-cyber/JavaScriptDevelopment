// let arr =[10,20,30,40,50,60,70,80,90,100]
// // let Val =arr[0];
// // let [a,b,c,d,e,f,g,h,i,j]=arr
// // console.log(a,b,c,d,e,f,g,h,i,j)
// let  [a,b,c,...rest]=arr
// console.log(a,b,c,rest)


let arr =[10,20,30,40,[50,60,70,80,[90,100]]]
let [a,b,c,d,[e,f,g,h,[i,j]]]=arr
console.log(a,b,c,d,e,f,g,h,i,j)
// let deStructuring =()=>{
//     let arr =[10,20,30,40,[50,60,70,80,[90,100]]]
//     let [a,b,c,d,[e,f,g,h,[i,j]]]=arr
//     console.log(a,b,c,d,e,f,g,h,i,j)
// }