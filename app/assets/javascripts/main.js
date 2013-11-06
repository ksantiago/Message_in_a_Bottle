$( document ).ready(function() {
  var $all_messages = $('#all-messages')
  var $new_message = $('#new-message');
  $all_messages.on('dblclick', showMessages)
  $new_message.on('click', displayForm);
});

function showMessages(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "/messages", false)
  xhr.send();
  var $response = JSON.parse(xhr.response);
  var $newMessages = [];

  for(var i = 0; i < $response.length; i++){
    var body = $response[i].body
    var message = $response[i].message
    var content = "Message: " + message + "\n Body: " + body
    $newMessages.push(content)
  }

  var $list = $('<ul>')
  for(var i = 0; i < $newMessages.length; i++){
    var $message = $('<li>')
    $message.attr("class", "individualMessage")
    $message.text($newMessages[i])
    $list.append($message)
  }

  $('#all-messages').append($list)

}

function displayForm() {
  var $form = $('#message-id');
  $form.removeClass('message-class');
  $form.on('submit', sendMessage);
}

function sendMessage() {
  var form = new FormData();
  form.append("message[message]", this.elements['message'].value);
  form.append("message[body]", this.elements['body'].value);
  // form.append("message[is_read]", this.elements['is_read'].value);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/messages", false);
  xhr.send(form);

}


