document.getElementById("form-validate").addEventListener('submit', function(event){
    let username = document.getElementById("username").value.trim()
    let uEmail = document.getElementById("email").value.trim()
    let uPassword = document.getElementById("password").value.trim()
    let uCpassword = document.getElementById("confirmpassword").value.trim()
console.log(event);
  event.preventDefault()
  let uNamePattern =/^[a-zA-Z]+ [A-Za-z]+$/;
  let eMailPattern = /^ [a-z0-9]+@[a-z]{4,0}\.[a-z]{2,0}/
let isValid = true;
  if (username === "") {
      
      
     
document.getElementById("uName-error").innerHTML = "Name is Required";
 isValid = false;     }
    else if(!uNamePattern.test(username)){
      document.getElementById("uName-error").innerHTML = "Full Name is Required";
    isValid = false;      
    }
    isValid = true;    
    
if (uEmail === ""){
    document.getElementById("uEmail-error").innerHTML = "Email is Required";
 isValid = false; }
else if(!eMailPattern.test(uEmail)){
    document.getElementById("uEmail-error").innerHTML="Enter a valid Email"
   isValid = false;   
}
else if(eMailPattern.test(uEmail)){
    document.getElementById("uEmail-error").innerHTML=""
    isValid = true;    
    
}
if (uPassword === ""){
    document.getElementById("uPassword-error").innerHTML = "Password is Required";
  isValid = false; }
else if(uPassword.length<=4 || uPassword>=10){
    document.getElementById("uPassword-error").innerHTML= "password mustbe atleast 4 characters"
  isValid = false; }
else if(uPassword.length<=4 || uPassword>=10){
    document.getElementById("uPassword-error").innerHTML= ""
    isValid = true;    
  }
if(uConfirmPassword === ""){
    document.getElementById("uConfirmPassword-error").innerHTML = "Confirm Password is Required";
 isValid = false; 
}
else if(uPassword == uCpassword){
    document.getElementById("uConfirmPassword-error").innerHTML = ""

    isValid = true;    
}


else if(uPassword !== uCpassword){
    document.getElementById("uConfirmPassword-error").innerHTML = "Password is misMatched"
     isValid = false; 
}
      
if(isValid){
    alert(`hi ${username} ,Welcome to Our Website`)
console.log(uName,uEmail,passw4);

}
}
)