// Assignment Code
var generateBtn = document.querySelector("#generate");
// var capLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
// var lowLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// var specCharacters = ['~','!','@','$','*','#','%','^','&','-','+','='];
// var numbers = ['0','1','2','3','4','5','6','7','8','9'];

function generatePassword() {
  //console.log("Button appears to work")
  // 1 - prompt the user for the password criteria
  //  - password length, 8-128 characters.
  var userInput = window.prompt("How many characters would you like your password? Between 8 - 128") 
  // use parseInt as it will turn a number within a string value into a number value
  var passwordLength = parseInt(userInput)
  if (isNaN(passwordLength)) {
    window.alert("That is not a valid number.")
    return
  }

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.")
    return
  }
  console.log(passwordLength) // Logs desired password length to the console 
  //  - Whether or not to include uppercase, lower case, numeric, and/or special characters
  var userWantsNumbers = window.confirm("Would you like numbers in your password?")
  console.log(userWantsNumbers)
  var userWantsSymbols = window.confirm("Would you like symbols in your password?")
console.log(userWantsSymbols)
  var userWantsLowercase = window.confirm("Would you like lowercase letters in your password?")
console.log(userWantsLowercase)
  var userWantsUppercase = window.confirm("Would you like uppercase letters in your password?")
console.log(userWantsUppercase)

}
  
  // 2 - validate input matches

  // 3 - generate pssword based on criteria

  // 4 - display password on page text box
  //return "generated password will go here"; // possibly make another function to display password? Though this seems to work for now


// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
