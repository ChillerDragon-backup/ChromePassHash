const PREFIX = "!A9"
const MAX_LEN = 30

var passwordFields = document.querySelectorAll('input[type=password]')

function manipulate_pass(raw_pw) {
  var hashed_pw = PREFIX + hash_sha256(raw_pw)
  return hashed_pw.substring(0, MAX_LEN);
}

// update the userinput (password field)
function hash_pass() {
  passwordFields.forEach(passwordField =>   {
    raw_pw = passwordField.value
    passwordField.value = manipulate_pass(raw_pw)
    pass = passwordField.value
    console.log("hashed password")
  })
}

document.querySelector('form').addEventListener("submit", function(event) {
  // event.preventDefault() //prevents form submitting the form
  if (is_extension_active == false) {
    // console.log("extension if off")
    return true;
  }

  hash_pass()
  // console.log("extension is on")
  return true;
});
