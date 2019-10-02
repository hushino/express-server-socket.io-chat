var socket = io.connect('http://192.168.0.117:8080', { 'forceNew': true });

socket.on('messages', function(data) {
  console.log(data);
  render(data);
})

function render (data) {
  var html = data.map(function(elem, index) {
    return(`<div>
              <strong>${elem.author}</strong>:
              <em>${elem.text}</em>
              <strong><em>${elem.codigo}</em></strong>
            </div>`);
  }).join(" ");

  document.getElementById('messages').innerHTML = html;
}

function addMessage(e) {
  let df = "";
  if (document.getElementById('codigo').value != undefined) {
    df = document.getElementById('codigo').value
  }
  var message = {
    author: document.getElementById('username').value,
    text: document.getElementById('texto').value,
    codigo: df
  };

  socket.emit('new-message', message);
  return false;
}