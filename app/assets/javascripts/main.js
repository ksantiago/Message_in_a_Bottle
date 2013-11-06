// javascript will go here


function sendMessage() {
  var form = new FormData;
  form.append("message[title]", this.elements['title'].value);
  form.append("message[body]", this.elements['body'].value);
  form.append("message[is_read]", this.elements['is_read'].value);
  var xhr = new XMLHttpRequest();
  xhr.open("post", "/messages", false);
  xhr.send(form);
}

$('button').on("click", sendMessage);


