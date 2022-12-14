// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria

// WHEN prompted for password criteria
// THEN I select which criteria to include in the password

// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters

// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

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

// Character Strings
const charStrings = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  number: '0123456789',
  special: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

// Prompts and generatePassword function 
function generatePassword() {
  var passwordCharSet = "";

  // Set Length
  var length = window.prompt("How many characters would you like your password to be? Please enter a number between 8 and 128.");
    if (length < 8){
    window.alert("Please select an appropriate amount of characters.");
    document.getElementsByClassName("card-body").reset();
    }
    else{
  // Set uppercase
  var uppercase = window.confirm("Would you like to include uppercase letters in your password?");
  if (uppercase) {
    passwordCharSet += charStrings.uppercase;
  };

  // Set lowercase
  var lowercase = window.confirm("Would you like to include lowercase letters in your password?");
  if (lowercase) {
    passwordCharSet += charStrings.lowercase;
  };

//Set numbers
  var numbers = window.confirm("Would you like to include numbers in your password?");
  if (numbers) {
    passwordCharSet += charStrings.number;
  };

  // Set symbols
  var special = window.confirm("Would you like to include a special character in your password?");
  if (special) {
    passwordCharSet += charStrings.special;
  };

  var password = "";
}
  if(uppercase == false && lowercase == false && numbers == false && special == false) {
    window.alert("Please select at least one option to generate a valid password.");
    document.getElementsByClassName("card-body").reset();
  }

  //Random fun things (Math)

  for (let i = 0; i < length; i++) {
    password += passwordCharSet[Math.floor(Math.random() * passwordCharSet.length)]
  }
  return password;
}

//See if way to ensure true variety occurs