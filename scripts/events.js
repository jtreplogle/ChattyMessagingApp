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
    chatBox.innerHTML = "";   // Clear content in chatBox div = clear all messages
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
    // Listens for if the innerHTML of the element being clicked is 'Delete'
    if (e.target.innerHTML === "Delete") {
        // Sets the ID of the current target equal to the parentNode (paragraph message) that contains it
        messageId = e.target.parentNode.id;
        console.log(messageId);
        // Runs the function that deletes current message value from the array
        FetchMessage.deleteIndex(messageId);
        // Runs the function that deletes current message value from the DOM
        FetchMessage.deleteMessage(messageId);
        // If there are no messages in the output div in the DOM, the clear button is disabled
        if (document.getElementsByClassName("message").length === 0) {
            clearButton.disabled = true;
        }
    }
});

// INPUT FIELD EVENT LISTENER
userInput.addEventListener("keypress", function (event) {
    // If the enter key is pressed
    if (event.keyCode === 13) {
        console.log(event);
        // Runs the function that adds the new message to the output div in the DOM
        FetchMessage.newMessage("chatBox", userInput.value);
            // Enables the clear button when a new message is added
            clearButton.disabled = false;
            // Clears the input field
            userInput.value = "";
            // Resets the cursor focus to the input element after new message is added
            userInput.focus();
      }
});

