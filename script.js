// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var size = prompt("Please enter 8 to 128 characters")
  if(size < 8 || size>128){
    alert("Must be between 8 and 128")
    size = prompt("Please enter 8 to 128 characters")
  }else{
    var islowercase = confirm("Include lowercase?")
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


