var FetchMessage = (function(message){

    message.deleteMessage = function(messageId) {
        var messageToDelete = document.getElementById(messageId);
        messageToDelete.parentNode.removeChild(messageToDelete);
    }

    return message;
})(FetchMessage);