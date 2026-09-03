// //charAt
// let str = "Hello Ajay Software Developer"
// console.log(str.charAt(str.length-1));

// //charCodeAt
// // to passing ASSCI Value of character

// let str1= "Hello I'm Ajay"
// console.log(str1.charCodeAt(3));// not including number is return in NaN

// //concat
// let newStr = str.concat(" ",str1)
// console.log(newStr);


// //includes
// let str2 ="Single Threasded"
// console.log(str2.includes("n",4));

// //indexOf
// let newStr = "hello Everyone"
// console.log(newStr.indexOf("E", 7));
// //nothing element return -1

// //lastIndexOf
// let newStr = "hello Everyone"
// console.log(newStr.lastIndexOf("E",12));
// //nothing element return -1


//repeat
// let newStr="Ajay"
// console.log(newStr.repeat(2));

//replace replaceAll
// let str =" Hi I'm Ajay and I'm From Tenkasi"
// console.log(str.replace("I'm", "I am"));

// console.log(str.replaceAll("I'm","I am"));

//slice
// let newStr = "Single Thread"
// console.log(newStr.slice(4));
// console.log(newStr.slice(4,8));
// console.log(newStr.slice(-4,-1));

//substring    
// let str1= "single Threads"
// console.log(str1.substring(4));
// console.log(str1.substring(4,6));
// console.log(str1.substring(8,0));
// console.log(str1.substring(-4,8));

//split
// let words = "My name is Ajay.M"
// console.log(words.split("."));
// console.log(words.split(" ",2));


//starwith
// let words = "My name is Ajay.M"
// console.log(words.startsWith("M"));
// console.log(words.startsWith("M" ,2));
// console.log(words.startsWith("name" ,3));
// console.log(words.startsWith(" " ,2));

//EndsWith
let words = " My name is Ajay.M "
// console.log(words.endsWith("y",2));
// console.log(words.endsWith("M"));
// console.log(words.endsWith("name",7));


//toLowercase
console.log(words.toLowerCase());

//toUpperCase
console.log(words.toUpperCase());

//trim
console.log(words.trim());

//tirmStart /trimLeft
console.log(words.trimStart())

//trimend /trimRight
console.log(words.trimEnd())