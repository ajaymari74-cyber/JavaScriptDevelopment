//Parent
function TraversalFun(){
let getParent =document.querySelector(".child1")
console.log(getParent.parentElement);
console.log(getParent.parentNode);

let getParent1 = document.querySelector("html")
console.log(getParent1.parentElement);
console.log(getParent1.parentNode);
}

//Node --> Element Node, Text Node, Attribute Node, Document Node

//Child

function selectChild(){
    let getElementByclass = document.querySelector(".prant")
    console.log(getElementByclass.childElementCount);
    console.log(getElementByclass.childNodes);
    console.log(getElementByclass.children);
    console.log(getElementByclass.firstChild);
    console.log(getElementByclass.firstChild);
    console.log(getElementByclass.firstElementChild);
    console.log(getElementByclass.lastChild);
    console.log(getElementByclass.lastElementChild);
        
    

}
selectChild()

//Siplings
function selectSiblings(){
    let child1 = document.querySelector(".child1")
    console.log(child1.nextSibling);
    console.log(child1.nextElementSibling);
    console.log(child1.previousSibling);
    console.log(child1.previousElementSibling);

    
}
selectSiblings()