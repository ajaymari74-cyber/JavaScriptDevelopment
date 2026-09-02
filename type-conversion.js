let str= "45"
let num = 100
console.log(str + num)
console.log(typeof (str + num))

//String 
// console.log("Hi "+ true)
// console.log("Hi "+ undefined)
// console.log("Hi" + null)
// console.log("Hi" + [1,3,4])
// console.log("Hi" + {})
// String + anythig === anythink +String

//Number
// console.log( 10 + true);

// // true-> 1 false-> 0
// console.log(10 + undefined) // NaN -Not a Number
// console.log(10 +null) //10 + 0 --10
// console.log(10 + [1,3,2]) 
// console.log(typeof(10 + [1]))
// console.log(10 + {})
// console.log(typeof(10 +``))

//boolean

// console.log(10 + true);
// console.log(true + undefined); // NaN
// console.log(true + null)// 1 + 0 = 0
// console.log(10 == "10");
// console.log(10 - `abc`); //NaN
// console.log(10 -``); //10 - 0 =10


//Explicite Conversion

// Number
// console.log(10 + Number("10")); //20
// console.log(Number(""));        //0
// console.log(Number("a,b,c"));   //NaN
// console.log(Number(false));     //0
// console.log(Number(undefined)); //NaN
// console.log(Number[1,3,2]);     //undifined
// console.log(Number({}));        //NaN

//Boolean
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([1]));
console.log(Boolean({}));
console.log(Boolean(Infinity));
console.log(Boolean(-Infinity));
console.log(Boolean(NaN));








