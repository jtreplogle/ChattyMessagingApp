console.log("something.");
var FetchMessage = (function () {
    var messages = [];

    return {  	
        loadMessages: function (callback) {
            console.log("something 2.");
            var myRequest = new XMLHttpRequest();

            myRequest.addEventListener("load", function() {
                var messageData = JSON.parse(this.responseText);
                messages = messageData.messages;
                console.log("messageData", messageData);

                var contentChat = document.getElementById('chatBox').value
                    console.log("contentChat");
                var currentChat;

                for (var i = 0; i < messages.length; i++) {
                    currentChat = messageData.contentChat[i];
                    console.log("currentchat", currentchat);
                }
            // callback(messages);
        });

            myRequest.open("GET", "messages.json");
            myRequest.send();
        }
    }
})();

FetchMessage.loadMessages();

/*
return {

        loadInventory: function (callback) {
        // Create an XHR Request to load cars from CarLot.json file
            var inventoryLoader = new XMLHttpRequest();

        // Listen for when the load event is broadcast and execute an anonymous callback
        inventoryLoader.addEventListener("load", function () {
            // Set the value of the private array, and parse into a native JS object
            var inventoryData = JSON.parse(this.responseText);
            inventory = inventoryData.cars;
            console.log("inventory", inventory);

            callback(inventory);
        });

        // Retrieve the information in inventory.json
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();
    },

        getInventory: function () {
            return inventory
        },
    };
*/



