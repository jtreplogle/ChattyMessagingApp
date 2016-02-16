var FetchMessage = (function (originalFetchMessage) {
    var messages = [];
    var messageBoard = document.getElementById("chatBox");
    var messageContainer;
    var outputString = "";
    
    originalFetchMessage.newMessage = function (elementId, textString) {
        messageContainer = document.getElementById(elementId);
        // Adds the new message from userInput into the private messages array
        messages.push(textString);
        // Output messages as strings into the DOM
        outputString = `<div id="${messages.length - 1}" class="message"><p class="indMessages">${textString}</p><button class="deleteButton">Delete</button></div>`;
        // Set Messsage output div equal to the built DOM string
        messageContainer.innerHTML += outputString;
    }

    // Delete currently selected message from the messages array
    originalFetchMessage.deleteIndex = function (messageId) {
        delete messages[messageId]; 
    }

    // Return the messages array to be accessed by the public
    originalFetchMessage.getMessage = function () {
        return messages;
    }

    return originalFetchMessage;
})(FetchMessage);
