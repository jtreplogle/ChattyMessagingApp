var FetchMessage = (function () {
    var messageArray = [];
    
    return {
        loadMessages: function () {
            // Create new XHR request
            var myRequest = new XMLHttpRequest();

            myRequest.addEventListener("load", function() {
                // Parse JSON objects into a native JavaScript Object
                var messageData = JSON.parse(this.responseText);
                // Set private variable equal to the native JavaScript object
                messageArray = messageData.messages;
                console.log(messageArray);
                /*
                messageArray.forEach(function(currentObject){
                    FetchMessage.newMessage("chatBox", currentObject.msg)
                })
                */
                for (var i = 0; i < messageArray.length; i++) {
                    var currentObject = messageArray[i];
                    FetchMessage.newMessage("chatBox", currentObject.msg);
                }
            });

            myRequest.open("GET", "messages.json");
            myRequest.send();
        }
    }
})();

FetchMessage.loadMessages();
