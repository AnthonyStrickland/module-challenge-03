
// Function called generatePassword
function generatePassword() {

 // Promtpt user for pwlength
var pwLength = parseInt(prompt("please select a password length (between 8 and 128 characters):"));

//verify length entered is between 8 and 128 characters
if(pwLength < 8 || pwLength > 128 || isNaN(pwLength)){
  alert("please enter a number between 8 & 128 characters.");
  return "please try again"

} else if (pwLength > 7 && pwLength < 129) {
  alert( "Please choose your options");
}

// random caps letters
function getRandomUpperCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

// random lowercase letters
function getRandomLowerCase() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// add random numbers
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// add random symbols
function getRandomSymbol() {
  var symbols = "!@#$%^&*-_,."
  return symbols[Math.floor(Math.random() * symbols.length)]
}

let passwordOption = []

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
  
  if (!lower && !upper && !number && !symbol) {
    alert ("Please choose at least one character type. Try again.");
    generatePassword ()
  }


//return password

let password = ""
for (let i=0; i<pwLength; i++){
  let randomPass=Math.floor(Math.random()*passwordOption.length)
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
