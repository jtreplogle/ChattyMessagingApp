var FetchMessage = (function executeThisCodeAfterFileLoads() {
var messages = [];

return {
	var data = JSON.parse(this.responseText);
		console.log("data", data);

	var contentChat = document.getElementById('chatBox')
		console.log("contentChat");
	var currentChat;

	for (var i = 0; i < messages.length; i++) {
		currentChat = data.contentChat[i];

												}
	var myRequest = new XMLHttpRequest();

		myRequest.addEventListener("load", executeThisCodeAfterFileLoads);
		myRequest.open("GET", "messages.JSON");
		myRequest.send();
		}

})();