// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "qwertyuiopasdfghjklzxcvbnm"
var uppercase = lowercase.toUpperCase()
var number = "1234567890"
var special = "!@#$%^&*+?"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  var final = ""
  var size = prompt("Please enter 8 to 128 characters");
  if (size > 7 && size < 129) {
    var isLowercase = confirm("Include lowercase?");
    console.log(isLowercase);
    var isUppercase = confirm("Include Uppercase?");
    console.log(isUppercase);
    var isNum = confirm("Include numbers?");
    console.log(isNum);
    var isSpecial = confirm("Include special characters?");
    console.log(isSpecial);
    for (i = 0; i < size; i++) {
      if (isLowercase === true) {
        var positionString = Math.floor(Math.random() * 26);
        final = final + lowercase[positionString];
        console.log(final);

      }
      if (isUppercase === true) {
        var positionString = Math.floor(Math.random() * 26);
        final = final + uppercase[positionString];
        console.log(final);
      }
      if (isNum === true) {
        var positionString = Math.floor(Math.random() * 10);
        final = final + number[positionString];
        console.log(final);
        
      }
      if (isSpecial === true) {
        var positionString = Math.floor(Math.random() * 10);
        var stringchar =  special[positionString].toString();
        final = final + stringchar;
        console.log(final);
       
      }
      if (final.length >= size){break;}
      
    }return final
  } else {
    alert("Must be between 8 and 128");
    size = prompt("Please enter 8 to 128 characters");

  }



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


