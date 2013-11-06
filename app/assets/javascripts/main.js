
$( document ).ready(function() {

  var $new_message = $('#new-message');
  $new_message.on('click', displayForm);
});

function displayForm() {
  var $form = $('#message-id');
  $form.removeClass('message-class');
  $form.on('submit', sendMessage);
}

function sendMessage() {
  var form = new FormData();
  form.append("message[title]", this.elements['title'].value);
  form.append("message[body]", this.elements['body'].value);
  // form.append("message[is_read]", this.elements['is_read'].value);
  var xhr = new XMLHttpRequest();
  xhr.open("POST", "/messages", false);
  xhr.send(form);

}


