// Assignment Code
var generateBtn = document.querySelector("#generate");
const upperCaseOptions = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numberOptions = ["0","1","2","3","4","5","6","7","8","9"];
const specialCharacterOptions = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"];

function userInputLength() {
  let length;
  let lengthValidate = false;

  while ( lengthValidate === false){
    var lengthInput = prompt("Please enter a password length between 8 and 128 characters.");
      
    length = parseInt(lengthInput);

    if ( Number.isInteger(length) && (length >= 8 && length <= 128)) {
      lengthValidate = true;
      continue
       }
    else {
      alert ( "Invalid entry please try again.")
      }
  }

  return length;
}

function userChoices() {
  var choices = [];

  while( choices.length === 0 ){
    if( confirm("Do you want to use upper case letters?")) {
      choices = choices.concat(upperCaseOptions)
    }

    
    if( confirm("Do you want to use lower case letters?")) {
      choices = choices.concat(lowerCaseOptions)
    }
    
    if( confirm("Do you want to use numbers?")) {
      choices = choices.concat(numberOptions)
    }
    
    if( confirm("Do you want to use special characters?")) {
      choices = choices.concat(specialCharacterOptions)
    }

    if( choices.length === 0){
      alert("Please select characters to use.")
    }
  }
  return choices;
}




function generatePassword() {
    var length = userInputLength();
    var choices = userChoices();
    var newPass = "";

    for( i = 0 ; i < length; i++ )
    {
     newPass = newPass.concat(choices[ Math.floor(Math.random() * choices.length) ]);
    }
    return newPass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);