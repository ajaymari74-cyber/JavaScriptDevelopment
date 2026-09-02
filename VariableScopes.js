// var funcition Scope
// function outFuntion(){
//   if (true) {
//     var functionVar = "Im a Variable"
    
//   }
//   console.log(functionVar);
  
// }
// outFuntion()

//blockScope

// function blockScope(){
//   let blockVariable = "Im a Block Scope Variable"
//   if (true) {
    
//     const blockVariable1 = "Im a Const Variable"
//     console.log(blockVariable);
//     console.log(blockVariable1);
//   }

// }
// blockScope()


// var globalScopeVar ="I'm a accessble in global "
// let blockScope = "Im accessble in blcok"
// const blockScope1 = "Im accessble in blcok"
// console.log(window.globalScopeVar)
// console.log(window.blockScope)
// console.log(window.blockScope1) 


var a=10;
let b = 20;
const c= 30;

function accessGlobalLocaalVar(){
    // var a=100;
    // let b=200;
    // const c=300;
    
    function innerFuntion(){
        // var a= 1000;
        // let b = 2000;
        // const c =3000; 
console.log(a+b+c);

    }innerFuntion()
console.log(a+b+c);
    

}accessGlobalLocaalVar()
console.log(a+b+c);
