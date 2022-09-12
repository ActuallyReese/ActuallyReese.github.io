//Code taken from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyClipboard() {
    // Get the text field
    var copyText = document.getElementById("copyButton");
  
    // Select the text field
    // copyText.select();
    // copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText("reesewc@comcast.net");
  
    // Alert the copied text
    alert("Copied the text: " + "reesewc@comcast.net");
  }