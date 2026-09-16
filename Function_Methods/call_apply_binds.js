// let employee ={
//     uName :"Ajay",
//     uSalary:10000,
//     introYourSelf: function(a,b){
//         console.log(a+b, this.uName);
        
//     }
// }
// console.log(employee.uSalary)
// employee.introYourSelf(10,20);
let employee1={ulName :"Ajith", laName :"Kumar"}

let employee ={
    uName :"ajay M",
    uSalary:100000,
    introYourSelf:(a,b)=>{
      console.log(this.uName);
      console.log(this.uName + " " +this .laName+(a+b));
      
    }
}
employee.introYourSelf.call(employee1,10,20)
employee.introYourSelf.apply(employee1,10,20)
let newfuond =employee.introYourSelf.bind(employee1,10,20)
console.log(newfuond);


