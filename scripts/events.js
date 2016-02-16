var messageBoard = document.getElementById("chatBox");
var userInput = document.getElementById("userInput");
var clearButton = document.getElementById("clearButton");
var darkTheme = document.getElementById("darkThemeCheckbox");
var largeText = document.getElementById("largeTextCheckbox");
var deleteButtons = document.getElementsByClassName("deleteButton");
console.log(deleteButtons);

// CLEAR BUTTON EVENT LISTENER
clearButton.addEventListener("click", function (){
    chatBox.innerHTML = "";
    clearButton.disabled = true;
    console.log("clearButton EL function fired");
});

// DARK THEME CHECKBOX EVENT LISTENER
/*
darkTheme.addEventListener("click", function() {
    if (darkTheme.checked === true) {
        darkTheme.href = "chattydarktheme.css";
    } else {
        darkTheme.href = "chatty.css";
    }
    console.log("darkTheme EL has fired.");
});
*/

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

/*
deleteButtons.addEventListener("click", function(event) {
   var currentDelButton = event.currenttarget;
   outputString = "";
   console.log("Delete Button was fired."); 
});
*/