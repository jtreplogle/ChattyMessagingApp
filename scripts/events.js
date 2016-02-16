var messageBoard = document.getElementById("chatBox");
var userInput = document.getElementById("userInput");
var clearButton = document.getElementById("clearButton");
var darkTheme = document.getElementById("darkThemeCheckbox");
var largeText = document.getElementById("largeTextCheckbox");

// Clear Button Event Listener
clearButton.addEventListener("click", function (){
    chatBox.innerHTML = "";
    clearButton.disabled = true;
    console.log("clearButton EL function fired");
});

darkTheme.addEventListener("click", function() {
    if (darkTheme.checked === true) {
        darkTheme.href = "chattydarktheme.css";
    } else {
        darkTheme.href = "chatty.css";
    }
    console.log("darkTheme EL has fired.");
});

largeText.addEventListener("click", function () {
    messageBoard.classList.toggle("enlargeText");
    console.log("largeText EL has been fired");
});