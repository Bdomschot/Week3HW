// Assignment Code
var generateBtn = document.querySelector("#generate");
const lowerCaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberOptions = ["0","1","2","3","4","5","6","7","8","9"];
const specialCharacterOptions = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function userInputLength() {
  let length;
  let lengthValidate = false;

  while ( lengthValidate = false){
    var lengthInput = prompt("Please enter a password length between 8 and 128 characters.");

    if ( lengthInput === null ) return;  
    
    length = parseInt ( lengthInput );

    if ( length.isInteger() && (length >= 8 && length <= 128)) {
      lengthValidate = true;
      return;
    }
    else {
      alert ( "Invalid entry please try again.")
      return;
    }
  }

  return length;
}






function generatePassword() {
    var length = userInputLength();
    
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);