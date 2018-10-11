console.log("hello from content.js")

const PREFIX = "!A9"
const MAX_LEN = 30

// var passwordField = document.getElementById('password');
var passwordFields = document.querySelectorAll('input[type=password]')


function manipulate_pass(raw_pw) {
  var hashed_pw = PREFIX + hash_sha256(raw_pw)
  return hashed_pw.substring(0, MAX_LEN);
}

// update the userinput (password field)
function hash_pass() {
  passwordFields.forEach(passwordField =>   {
    raw_pw = passwordField.value
    // console.log("got raw password: " + raw_pw)
    passwordField.value = manipulate_pass(raw_pw)
    pass = passwordField.value
    // console.log("updated password to: " + pass)
    console.log("hashed password")
  })
}

document.querySelector('form').addEventListener("submit", function(event) {
    // event.preventDefault() //prevents form submitting the form
    // DO STUFF...
    hash_pass()
    return true; // return false to cancel form action
});
