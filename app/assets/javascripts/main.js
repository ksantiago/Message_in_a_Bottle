// javascript will go here


function sendMessage() {
  var form = new FormData();
  form.title = this.elements['title'].value;
  form.body = this.elements['body'].value;
  form.isread = this.elements['is_read'].value;
  var xhr = new XMLHttpRequest();
  xhr.open("post", "/messages", false);
  xhr.send(form);
}



$('button').on("click",sendMessage);