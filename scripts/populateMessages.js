var FetchMessage = (function (originalFetchMessage) {
    var messages = [];
    var messageBoard = document.getElementById("chatBox");
    var messageContainer;
    var outputString = "";
    
  originalFetchMessage.newMessage = function (elementId, textString) {
    messageContainer = document.getElementById(elementId);
    messages.push(textString);
    outputString = `<div id="${messages.length - 1}" class="message"><p>${textString}</p><button class="deleteButton">Delete</button></div>`;
    messageContainer.innerHTML += outputString;

  }
    return originalFetchMessage;
})(FetchMessage);
