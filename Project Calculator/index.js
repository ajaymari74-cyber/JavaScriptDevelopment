let input = document.querySelector("input");

function AddVAlue(elementVAl) {
    input.value += elementVAl;
}
function clearVal(){
    input.value =""
}
function deleteVal()
{
    input.value= input.value.slice(0,length-1)
}
function evalValue(){
    input.value = eval(input.value)
}