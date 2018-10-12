/********************************
 *                              *
 *   Every time the page gets   *
 *   refreshed the extension    *
 *   will be deactivated        *
 *                              *
 *   press shift + p to toggle  *
 *   it on/off                  *
 *                              *
 ********************************/

var is_extension_active = false

function ToggleAddon() {
  if (is_extension_active) {
    console.log("addon deactivated")
    is_extension_active = false
    alert("PasswdHasher DEACTIVATED!")
  } else {
    console.log("addon activated")
    is_extension_active = true
    alert("PasswdHasher ACTIVATED!")
  }
}

var keymap = {};
onkeydown = onkeyup = function(e){
  e = e || event; // to deal with IE
  keymap[e.keyCode] = e.type == 'keydown';

  if (keymap[16] && keymap[80]) {
    ToggleAddon();
    keymap[16] = false;
    keymap[80] = false;
  }
}
