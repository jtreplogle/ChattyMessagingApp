var messageBoard = document.getElementById("chatBox");
var userInput = document.getElementById("userInput");
var clearButton = document.getElementById("clearButton");
var darkTheme = document.getElementById("darkThemeCheckbox");
var largeText = document.getElementById("largeTextCheckbox");
var deleteButtons = document.getElementsByClassName("deleteButton");
var paragraphs = document.getElementsByClassName("indMessages");
console.log(deleteButtons);

// CLEAR BUTTON EVENT LISTENER
clearButton.addEventListener("click", function (){
    chatBox.innerHTML = "";
    clearButton.disabled = true;
    console.log("clearButton EL function fired");
});

// DARK THEME CHECKBOX EVENT LISTENER
darkTheme.addEventListener("click", function(){
    document.body.classList.toggle("darkTheme");
    console.log("darkTheme EL has fired.");
});

// LARGE TEXT CHECKBOX EVENT LISTENER
largeText.addEventListener("click", function () {
    messageBoard.classList.toggle("enlargeText");
    console.log("largeText EL has been fired");
});

// CURRENT MESSAGE DELETE BUTTON EVENT LISTENER
messageBoard.addEventListener("click", function(e){
    if (e.target.innerHTML === "Delete") {
        messageId = e.target.parentNode.id;
        console.log(messageId);
        FetchMessage.deleteIndex(messageId);
        FetchMessage.deleteMessage(messageId);
        if (document.getElementsByClassName("message").length === 0) {
            clearButton.disabled = true;
        }
    }
});

// INPUT FIELD EVENT LISTENER
userInput.addEventListener("keypress", function (event) {
    if (event.keyCode === 13) {
        console.log(event);
        FetchMessage.newMessage("chatBox", userInput.value);
            clearButton.disabled = false;
            userInput.value = "";
            // userInput.blur();
            userInput.focus();
      }
});

