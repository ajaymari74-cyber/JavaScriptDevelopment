f1(()=> console.log(1000))
f2(()=> console.log(1000))
f3(()=> console.log(1000))

f1()
f2()
//setTimeOut (f2, 2000)
f3()
// Event Loop -->
//Micro Task Queue -First priority
     //Promise

//Macro Task Queue - Second
     //setTimeout
     //setInterval