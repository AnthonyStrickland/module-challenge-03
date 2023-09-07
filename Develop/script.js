// Assignment Code
var generateBtn = document.querySelector("#generate");

 var  passwordOption =  {
  lower: getRandomLowerCase,
  upper: getRandomUpperCase,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

function generatePassword(lower, upper, number, symbol)

// Function called generatePassword

// Function write password to the #password inuput
function writePassword()  {
  var password = generatePassword();
  var passwordText = document.querySelector ("#passowrd")
}

// Promtpt user for pw length
//verify length entered is between 8 and 128 characters
//if not, keep prompting until it is valid
//ask user if they want to include:
//use the confirm method to get a boolean value/answer to prompts
//while loop
//use # characters from user to do a for loop to get random character
//what if the user said no to all prompts?
//return password

// random caps letters
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
console.log(getRandomUpperCase());

// random lowercase letters
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}
console.log(getRandomLowerCase());

// add random numbers
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
console.log(getRandomNumber());

// add random symbols
function getRandomSymbol() {
  var symbols = "!@#$%^&*-_,."
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol());

// keep track of answers in variables

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button do not touch
generateBtn.addEventListener("click", writePassword);
