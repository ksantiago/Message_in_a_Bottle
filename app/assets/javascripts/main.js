// javascript will go here


function sendMessage() {
<<<<<<< HEAD
  var form = new FormData();
  form.title = this.elements['title'].value;
  form.body = this.elements['body'].value;
  form.is_read = this.elements['is_read'].value;
=======
  var form = new FormData;
  form.append("message[title]", this.elements['title'].value);
  form.append("message[body]", this.elements['body'].value);
  form.append("message[is_read]", this.elements['is_read'].value);
>>>>>>> 57c2010a893c4c3d72c69907ed63da6eae975af8
  var xhr = new XMLHttpRequest();
  xhr.open("post", "/messages", false);
  xhr.send(form);
}

$('button').on("click", sendMessage);


