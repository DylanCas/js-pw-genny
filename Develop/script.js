// Assignment Code
var generateBtn = document.querySelector("#generate");
 
function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
  }
  var rand = Math.random()
  return Math.floor(min*(1 - rand) + rand * max)
}

function getRandomItem(list) {
  return list[randomInt(0, list.length)]
}

function generatePassword() {
  //console.log("Button appears to work")
  // 1 - prompt the user for the password criteria
  //  - password length, 8-128 characters.
  var userInput = window.prompt("How many characters would you like your password? Between 8 - 128") 
  // use parseInt as it will turn a number within a string value into a number value
  var passwordLength = parseInt(userInput)
  // the following message appears if the user puts in anything other than a number. Is there a away to turn 'eight' into 8 as a number data type?
  if (isNaN(passwordLength)) {
    window.alert("Not a valid number.")
    return
  }
  console.log(typeof passwordLength) //confirms password length string value was turned into a number value

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 and 128 characters.")
    return
  }
  console.log(passwordLength) // Logs desired password length to the console 

  //  - Whether or not to include uppercase, lower case, numeric, and/or special characters
  // console.log to send true/false according to whether or not user wants these values
  var useNumbers = window.confirm("Would you like numbers in your password?")
  console.log(useNumbers)
  var useSymbols = window.confirm("Would you like symbols in your password?")
  console.log(useSymbols)
  var useLowercase = window.confirm("Would you like lowercase letters in your password?")
  console.log(useLowercase)
  var useUppercase = window.confirm("Would you like uppercase letters in your password?")
  console.log(useUppercase)

  var numbers = ['0','1','2','3','4','5','6','7','8','9'];
  var symbols = ['~','!','@','$','*','#','%','^','&','-','+','='];
  var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

  var userBasket = []
  
  // if window.confirms are accepted, will add the relevant strings to the userbasket
  if (useNumbers === true) {
    userBasket.push(numbers)
  }

  if (useSymbols === true) {
    userBasket.push(symbols)
  }

  if (useLowercase === true) {
    userBasket.push(lowercase)
  }

  if (useUppercase === true) {
    userBasket.push(uppercase)
  }
  console.log(userBasket)

  if (userBasket.length === 0) {
    userBasket.push(lowercase)
    userBasket.push(numbers)
    userBasket.push(symbols)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(userBasket);
    var randomChar = getRandomItem(randomList);
    generatedPassword += randomChar
  }

  console.log(generatedPassword)

  return generatedPassword
}
  
  // 2 - validate input matches
  // 3 - generate pssword based on criteria
  // 4 - display password on page text box
  // return "generated password will go here"; // possibly make another function to display password? Though this seems to work for now

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
