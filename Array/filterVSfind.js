let emplyees=[
    {emplyees:"Ajay",Salary:100000},
    {emplyees:"Arun",Salary:120000},
    {emplyees:"Ajith",Salary:150000}
]
// let filter = emplyees.filter(val=> val.Salary>115000)
// console.log(filter);

//find Method
let filterDataByFind = emplyees.find(val=>val.Salary>115000)
console.log(filterDataByFind);
