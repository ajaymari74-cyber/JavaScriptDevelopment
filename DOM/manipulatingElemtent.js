function manipulateElements(){
    let newListElement = document.createElement("li")
    // console.log(newListElement);
    // newListElement.innerText ="Item-4"
    // newListElement.innerHTML ="Item-5"
    // newListElement.innerHTML="<a>link</a>list Item-5"
    // newListElement.textContent ="<a>link</a>list Item-5"
    
    
    
    console.log(newListElement);
    let input = document.querySelector("input")
    // console.log(input.value);
    newListElement.innerText = input.value
    console.log(newListElement);

    let orderlist = document.querySelector("ol")
    // orderlist.append("textNode",newListElement)
    // orderlist.appendChild(newListElement)
    // orderlist.insertBefore(newListElement,orderlist.children[2])
    // orderlist.replaceChild(newListElement,orderlist.children[1])
    
    // orderlist.removeChild(orderlist.children[0])
    // orderlist.remove(orderlist.children[0])
    
    //Dynamic CaseCading
    newListElement.style.color ="yellow"
    newListElement.style.textShadow = "10px 10px 5px white"
    orderlist.prepend("Textnode",newListElement)
}