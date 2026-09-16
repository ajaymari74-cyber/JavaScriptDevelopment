/* Call By Refrence
stack Memory
| Address | Variable       | value-> Reference/Pointer (Address) |
|---------|----------------|------------------|
| 0x100   |originalObject  | 0x 001                      |

Heap Memory
|Address   | Object            |
|----------|-------------------|
| 0x01     | {name : "Ajay M"} |
*/

let obj1={
    Name:"Ajay M"
}
let arr =[1,2,3,4,5,6]
let arr1 = arr
let obj2 = obj1