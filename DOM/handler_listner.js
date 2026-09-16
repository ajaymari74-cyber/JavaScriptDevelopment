let button1 = document.getElementById("listener")
console.log(button1);
let button2 = document.getElementById("handler")
console.log(button2);


// button1.addEventListener("click",function(){
//     console.log("First Listener")
// })

// button1.addEventListener("click",function(){
//     console.log("First Listener")
// })

// button1.addEventListener("click",function(){
//     console.log("First Listener")
// })

// button1.addEventListener("click",function(){
//     console.log("First Listener")
// })

button2.onclick= function(){
    console.log("first Handler");
    
}
button2.onclick= function(){
    console.log("second Handler");
    
}


// function firstlistener(){
//     console.log("first Handler");
    
// }
let image = document.querySelector("img")
// console.log(image);
let para = document.querySelector("p")

image.addEventListener("mouseover",function(){
    image.src = "image2.jpg"
    para.innerHTML="I am a  attractive left Eye"
})

image.addEventListener("mouseout",function(){
    image.src = "image1.jpg"
para.innerHTML="I am a  attractive Right Eye"
})
