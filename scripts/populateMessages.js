var FetchMessage = (function (originalFetchMessage) {
    var messages = [];
    var messageBoard = document.getElementById("chatBox");
    var messageContainer;
    var outputString = "";
    
  originalFetchMessage.newMessage = function (elementId, textString) {
    messageContainer = document.getElementById(elementId);
    messages.push(textString);
    outputString = `<div id="${messages.length - 1}" class="message"><p>${textString}</p><button>Delete</button></div>`;
    messageContainer.innerHTML += outputString;

  }
    return originalFetchMessage;
})(FetchMessage);









// function populateMessages (messages){
//   var domOutput = document.getElementByID("chatBox");
//   var messageOutput = "";
//   var currentMessage;

//   for (var i = 0; i < messages.length; i++) {
//     currentMessage = messages[i];
//     messageOutput += `<p>${currentMessage.msg}</p>`;
//   }
//   console.log("something happened.");
//   domOutput.innerHTML = messageOutput;

// } 

// FetchMessage.loadMessages(populateMessages);