// javascript will go here


function sendMessage() {
<<<<<<< HEAD
  var form = new FormData;
  form.append("message[title]", this.elements['title'].value);
  form.append("message[body]", this.elements['body'].value);
  form.append("message[is_read]", this.elements['is_read'].value);
=======
  var form = new FormData();
  form.title = this.elements['title'].value;
  form.body = this.elements['body'].value;
  form.isread = this.elements['is_read'].value;
>>>>>>> 5fdc640c35975892238a708b5130e81792b36b43
  var xhr = new XMLHttpRequest();
  xhr.open("post", "/messages", false);
  xhr.send(form);
}

<<<<<<< HEAD
$('button').on("click", sendMessage)
=======


$('button').on("click",sendMessage);
>>>>>>> 5fdc640c35975892238a708b5130e81792b36b43
