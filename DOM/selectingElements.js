console.log({document});
console.log(document.head);
console.log(document.body);

let  headding = document.getElementsByTagName("h1")
console.log(headding)

let para1 = document.getElementsByClassName("para1"
)
console.log(para1);

let uniqpara =document.getElementById("uniq-para")
console.log(uniqpara);

let nameAttri = document.getElementsByName("Input-1")
console.log(nameAttri);

let SelectOne = document.querySelector("#uniq-para")
let Multielement = document.querySelectorAll("h1")
console.log(SelectOne.innerHTML);
console.log(Multielement);

let NewElement = document.createElement("h2")
NewElement.innerText = "Manipulate Phase"
console.log(NewElement);

document.body.append(NewElement)
