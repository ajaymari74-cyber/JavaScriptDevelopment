// let arr =[1,2,3,4,5,6]
// let arr2=[4,5,6,7,8]

// //concat method

// let newArr = arr.concat(arr2)
// let newArr1 = arr.concat(10,20,30,40)
// let newArr2 = arr.concat(arr)
//  arr[0] = 1111
// console.log(newArr,newArr1,newArr2,arr)

//slice Method

// let newArr =[10,20,30,40,50,60,70]
// let sliceVal = newArr.slice()
// newArr[0] = 101
// let sliceVal1 =newArr.slice(1)
// let sliceVal12 =newArr.slice(1, 5)
//                         //(start ,end-1)5-1 =4
// console.log(sliceVal,sliceVal1,sliceVal12);


//Flat Methods
// let arr = [1,2,3,4,5,[6,7,[8,9]]]

// let newArr = arr.flat(Infinity)
// console.log(arr, newArr);



//Fill Method
let arr =[10,20,30,40,50]
arr.fill(101,1,5)
console.log(arr);
