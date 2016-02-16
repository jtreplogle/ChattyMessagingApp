var FetchMessage = (function(message){

    // function to delete selected message from DOM
    message.deleteMessage = function(messageId) {
        var messageToDelete = document.getElementById(messageId);
        messageToDelete.parentNode.removeChild(messageToDelete);
    }

    return message;
})(FetchMessage);