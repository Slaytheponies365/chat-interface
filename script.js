// get references to the chat container, input field, and send button
const chatContainer = document.getElementById('chat-container');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');

// add a click event listener to the send button
chatSend.addEventListener('click', () => {
  // get the message from the input field
  const message = chatInput.value;
  // send the message to the server
  displayMessage(message);
  chatInput.value='';
});


// function to send a message to the server
function sendMessage(message) {
  // make an HTTP POST request to the server
  // include the message in the request body
}

// function to display a message in the chat interface
function displayMessage(message, isReceived) {
  // create a new div element to hold the message
  const messageElement = document.createElement('div');
  messageElement.classList.add('message');

  // create a div for the message bubble
  const messageBubble = document.createElement('div');
  messageBubble.classList.add('message-bubble');
  if (isReceived) {
    messageBubble.classList.add('received');
  }

  // create a paragraph for the message text
  const messageText = document.createElement('p');
  messageText.classList.add('message-text');
  messageText.textContent = message;

  // create a small element for the message time
  const messageTime = document.createElement('small');
  messageTime.classList.add('message-time');
  messageTime.textContent = new Date().toLocaleTimeString();

  // add the message text and time to the message bubble
  messageBubble.appendChild(messageText);
  messageBubble.appendChild(messageTime);

  // add the message bubble to the message element
  messageElement.appendChild(messageBubble);

  // add the message element to the chat messages container
  document.getElementById('chat-messages').appendChild(messageElement);

  // scroll the chat messages to the bottom
  const chatMessages = document.getElementById('chat-messages');
  chatMessages.scrollTop = chatMessages.scrollHeight;
}