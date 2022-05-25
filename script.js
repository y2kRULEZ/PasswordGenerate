// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var size = prompt("Please enter 8 to 128 characters");
  if(size > 8 && size<128){
    var isLowercase = confirm("Include lowercase?");
    var isUppercase = confirm("Include Uppercase?");
    var isNum = confirm("Include numbers?");
    var isSpecial = confirm("Include special characters?");
  }else{
    alert("Must be between 8 and 128");
    size = prompt("Please enter 8 to 128 characters");
    
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


