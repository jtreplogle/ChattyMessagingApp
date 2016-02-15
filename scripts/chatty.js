var FetchMessage = (function () {
    var messageArray = [];
    return {
        loadMessages: function () {
            console.log("something 2.");
            var myRequest = new XMLHttpRequest();

            myRequest.addEventListener("load", function() {
                var messageData = JSON.parse(this.responseText);
                messageArray = messageData.messages;
                
                // messageArray.forEach(function(currentObject){
                //     FetchMessage.newMessage("chatBox", currentObject.msg)
                // })
                

                for (var i = 0; i < messageArray.length; i++) {
                    var currentObject = messageArray[i];
                    FetchMessage.newMessage("chatBox", currentObject.msg);
                }
            });

            myRequest.open("GET", "scripts/messages.json");
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



