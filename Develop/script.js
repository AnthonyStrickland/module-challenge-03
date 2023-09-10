
// Function called generatePassword
function generatePassword() {

 // Promtpt user for pw length
var pwLength = parseInt(prompt("please select a password length (between 8 and 128 [inclusive]):"));

//verify length entered is between 8 and 128 characters
if(pwLength < 8 || pwLength > 128 || isNaN(pwLength)){
  alert("please enter a number between 8 & 128 characters.");
  return "please try again"

// } else if (pwLength < 8) {
//   alert("password must be more than 8 characters.");
//   return "please try again"

// } else if (pwLength > 128) {
//   alert("password must be less than 128 characters.");
//   return "please try again"

} else if (pwLength > 7 && pwLength < 129) {
  alert( "your password will now be created");
}

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

var passwordOption = []

var lower = confirm('Click "OK" for lowercase letters.')
  if (lower === true) {
    passwordOption.push(getRandomLowerCase)
  }
  
  var upper = confirm('Click "OK" for uppercase letters.')
  if (upper === true) {
    passwordOption.push(getRandomUpperCase)
  }

  var number = confirm('Click "OK" for numbers.')
  if (number === true) {
    passwordOption.push(getRandomNumber)
  }
  
  var symbol = confirm('Click "OK" for special characters.')
  if (symbol === true) {
    passwordOption.push(getRandomSymbol)
  }
  
  if (!lowerResponse && !upperResponse && !numberResponse && !symbolResponse) {
    alert ("Please choose at least one character type. Try again.");
    generatePassword ()
  }




//return password

var password = ""
for (var i=0; i<pwLength; i++){
  var randomPass=Math.floor(Math.random()*passwordOption.length)
  password = password + passwordOption[randomPass]()
}

return password;

}
                                                              // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
