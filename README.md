# ChromePassHash
Chrome extension that hashes your passwords client side

# How it works

It will perform an SHA256 hash on every password field when you submit a form.

# How to use

Just install the chrome extension.
And use the same bad passwords but make sure you used the extension for register and login.
If you have registered an account already you might want to update your passwords with the extension turned on.

If you registered an account with the extension activated you need the extension to login agian.
If you registered without you need to turn off the extension to be able to login.

So only use it for accounts that you access with an chrome browser that has this extension.

# Known bugs

The password length is currently fix 30 characters.
It is prefixed with a upcase letter and an exclamation mark.

If 30 is too long or too short and special characters are not allowed
the login will always fail.
